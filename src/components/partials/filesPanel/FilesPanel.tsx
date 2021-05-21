import React, { useState, useContext, CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import uuid from 'uuid/v4';
import mapConfig from '../../../assets/configs/map.config.json';
import { markSquare } from '../../../scripts/matrix/markSquare';
import { deepCopy } from '../../../scripts/utils/deepCopy';
import test1 from '../../../assets/images/mapSources/building/test1.png';
import test1min from '../../../assets/images/mapSources/building/test1min.png';
import test2 from '../../../assets/images/mapSources/decoration/test2.png';
import test3 from '../../../assets/images/mapSources/mob/test3.png';
import test4 from '../../../assets/images/mapSources/npc/test4.png';
import test5 from '../../../assets/images/mapSources/subsoil/test3.png';
import { 
	changeMapBuildingMatrix, 
	changeMapDecorationMatrix, 
	changeMapSubsoilMatrix, 
	changeMapNpcMatrix, 
	changeMapMobMatrix ,
	changeMapSeMatrix
} from '../../../store/actions/mapActions';
import { ContentContext } from '../../../Template';
import { IStore } from '../../../interfaces/store.interface';
import { addInternalImagesData } from '../../../scripts/utils/addInternalImagesData';
import { MatrixFillColor } from '../../../models/matrixFillColor.model';


const bookmarks: string[] = mapConfig.bookmarks;

export const FilesPanel: React.FC = () => {
	const { filesPanel } = useContext(ContentContext);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [currBookmark, setCurrBookmark] = useState<string>(bookmarks[0]);
	const buildingMatrix = deepCopy(useSelector((state: IStore) => state.map.building.matrix));
	const subsoilMatrix = deepCopy(useSelector((state: IStore) => state.map.subsoil.matrix));
	const mobMatrix = deepCopy(useSelector((state: IStore) => state.map.mob.matrix));
	const decorationMatrix = deepCopy(
		useSelector((state: IStore) => state.map.decoration.matrix)
	);
	const npcMatrix = deepCopy(useSelector((state: IStore) => state.map.npc.matrix));
	const seMatrix = deepCopy(useSelector((state: IStore) => state.map.se.matrix));

	const filesPanelStyles = {
		right: isOpen ? "0" : "-300px"
	};

	const imageStyle: CSSProperties = {
		width: `${mapConfig?.map?.fieldSize}px`,
		height: `${mapConfig?.map?.fieldSize}px`
	};
	
	const generateImages = (): any[] => {
		const bookmarkImages: string[] = [];
		let matrixTransformationMethod: Function;
		let sourceMatrix: any[];

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
				matrixTransformationMethod = changeMapDecorationMatrix;
				sourceMatrix = decorationMatrix;
			break;
			case 'subsoil':
				bookmarkImages.push(test3);
				matrixTransformationMethod = changeMapSubsoilMatrix;
				sourceMatrix = subsoilMatrix;
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

		const imagesToRender: any[] = bookmarkImages.map((img: string) => {
			return (
				// TODO: tutaj powinienem nie wrzucać img do markSquare, a dodać blob do images store, i tu zamiast img id do bloba
				<li 
					key={uuid()} 
					style={imageStyle} 
					onClick={(): void => markSquare(
							sourceMatrix, 
							`MAP_${currBookmark.toUpperCase()}_CANVAS`, 
							matrixTransformationMethod, 
							`Added ${currBookmark}`, 
							addInternalImagesData(img), // add blob to internal images, and return id to blob
							MatrixFillColor.image
					)}
				>
					<img src={img} alt='tile' />
				</li>
			);
		});

		return imagesToRender;
	};

	const generateBookmarks = (): any[] => {
		const bookmarksToRender: any[] = bookmarks.map(
			(bookmark: string) => {
			return (
				<li 
					key={uuid()} 
					onClick={(): void => setCurrBookmark(bookmark)} 
					style={{color: currBookmark === bookmark ? 
							'#27427c' : 'inherit'}}
				> 
					{ 
						!filesPanel?.bookmarks[bookmark] ||
						filesPanel?.bookmarks[bookmark]?.length <= 0 ?
						bookmark : filesPanel?.bookmarks[bookmark]
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
				onClick={(): void => setIsOpen(true)}
			> 
				{ filesPanel.switch }
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
						onClick={(): void => setIsOpen(false)}
					>
						<span>
							{ filesPanel.close }
						</span>
					</div>
				</div>
			</aside>
		</>
	);
};