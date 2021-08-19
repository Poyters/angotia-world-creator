import React, { useState, CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import uuid from 'uuid/v4';
import mapConfig from '../../../../assets/configs/map.config.json';
import { markSquare } from '../../../../scripts/matrix/markSquare';
import { deepCopy } from '../../../../scripts/utils/deepCopy';
import test1 from '../../../../assets/images/mapSources/building/test1.png';
import test1min from '../../../../assets/images/mapSources/building/test1min.png';
import test2 from '../../../../assets/images/mapSources/decoration/test2.png';
import test3 from '../../../../assets/images/mapSources/mob/test3.png';
import test4 from '../../../../assets/images/mapSources/npc/test4.png';
import test5 from '../../../../assets/images/mapSources/terrain/test3.png';
import tree1 from '../../../../assets/images/mapSources/decoration/tree1.png';
import { 
	changeMapBuildingMatrix, 
	changeMapDecorationMatrix, 
	changeMapTerrainMatrix, 
	changeMapNpcMatrix, 
	changeMapMobMatrix ,
	changeMapSeMatrix
} from '../../../../store/actions/mapActions';
import { IStore } from '../../../../interfaces/store.interface';
import { addInternalImagesData } from '../../../../scripts/utils/addInternalImagesData';
import { MatrixFillColor } from '../../../../models/matrixFillColor.model';
import { useTranslation } from 'react-i18next';
import { Bookmarks } from '../../../../models/bookmarks.model';
import { Canvas } from '../../../../models/canvas.model';


const bookmarks = Object.keys(Bookmarks);

export const FilesPanel: React.FC = () => {
	const { t } = useTranslation(['files', 'common']);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [currBookmark, setCurrBookmark] = useState<string>(bookmarks[0]);
	const buildingMatrix = deepCopy(useSelector((state: IStore) => state.map.building.matrix));
	const terrainMatrix = deepCopy(useSelector((state: IStore) => state.map.terrain.matrix));
	const mobMatrix = deepCopy(useSelector((state: IStore) => state.map.mob.matrix));
	const decorationMatrix = deepCopy(
		useSelector((state: IStore) => state.map.decoration.matrix)
	);
	const npcMatrix = deepCopy(useSelector((state: IStore) => state.map.npc.matrix));
	const seMatrix = deepCopy(useSelector((state: IStore) => state.map.se.matrix));

	const filesPanelStyles = {
		right: isOpen ? '0' : '-300px'
	};

	const imageStyle: CSSProperties = {
		width: `${mapConfig?.map?.fieldSize}px`,
		height: `${mapConfig?.map?.fieldSize}px`
	};
	
	const generateImages = () => {
		const bookmarkImages: string[] = [];
		let matrixTransformationMethod;
		let sourceMatrix;

		switch(currBookmark) { 
			case 'building':
				bookmarkImages.push(test1);
				bookmarkImages.push(test1min);
				matrixTransformationMethod = changeMapBuildingMatrix;
				sourceMatrix = buildingMatrix;
			break;
			case 'decoration':
				bookmarkImages.push(test2);
				bookmarkImages.push(test2);
				bookmarkImages.push(test2);
				bookmarkImages.push(test2);
				bookmarkImages.push(test2);
				bookmarkImages.push(test2);
				bookmarkImages.push(test2);
				bookmarkImages.push(test2);
				bookmarkImages.push(test2);
				bookmarkImages.push(test2);
				bookmarkImages.push(test2);
				bookmarkImages.push(test2);
				bookmarkImages.push(test2);
				bookmarkImages.push(test2);
				bookmarkImages.push(tree1);
				matrixTransformationMethod = changeMapDecorationMatrix;
				sourceMatrix = decorationMatrix;
			break;
			case 'terrain':
				bookmarkImages.push(test3);
				matrixTransformationMethod = changeMapTerrainMatrix;
				sourceMatrix = terrainMatrix;
			break;
			case 'mob':
				bookmarkImages.push(test4);
				matrixTransformationMethod = changeMapMobMatrix;
				sourceMatrix = mobMatrix;
			break;
			case 'npc':
				bookmarkImages.push(test5);
				matrixTransformationMethod = changeMapNpcMatrix;
				sourceMatrix = npcMatrix;
			break;
			case 'se':
				bookmarkImages.push(test3);
				matrixTransformationMethod = changeMapSeMatrix;
				sourceMatrix = seMatrix;
			break;
		}

		const imagesToRender = bookmarkImages.map((img: string) => {
			return (
				// TODO: tutaj powinienem nie wrzucać img do
				// markSquare, a dodać blob do images store, i tu zamiast img id do bloba
				<li 
					key={uuid()} 
					style={imageStyle} 
					onClick={() => markSquare(
						sourceMatrix, 
						Canvas[currBookmark], 
						matrixTransformationMethod, 
						t('files:panel.added', { 
							bookmark: t(`files:panel.bookmarks.${currBookmark}`) 
						}), 
						// Add blob to internal images, and return id to blob
						addInternalImagesData(img),
						MatrixFillColor.image
					)}
				>
					<img src={img} alt='tile' />
				</li>
			);
		});

		return imagesToRender;
	};

	const generateBookmarks = () => {
		const bookmarksToRender = bookmarks.map(
			(bookmark: string) => {
			return (
				<li 
					key={uuid()} 
					onClick={() => setCurrBookmark(bookmark)} 
					style={{ color: currBookmark === bookmark ? 
							'#27427c' : 'inherit' }}
				> 
					{ 
						t(`files:panel.bookmarks.${bookmark}`)
					} 
				</li>
			);
		});

		return bookmarksToRender;
	};

	return (
		<>
			<div 
				className="g-sidePanelSwitch g-sidePanelSwitch--filesPanel t-paragraph4Normal" 
				onClick={() => setIsOpen(true)}
			> 
				{ t('files:panel.label') }
			</div>
			<aside className="g-sidePanelWrapper" style={filesPanelStyles}>
				<div className="filesPanel">
					<nav className="filesPanel__bookmarks t-paragraph5Normal">
						<ul>
							{ generateBookmarks() }
						</ul>
					</nav>

					<div className="filesPanel__imagesContainer">
						<ul>
							{ generateImages() }
						</ul>
					</div>

					<div 
						className="filesPanel__switch t-paragraph5Normal" 
						onClick={() => setIsOpen(false)}
					>
						<span>
							{ t('common:close') }
						</span>
					</div>
				</div>
			</aside>
		</>
	);
};