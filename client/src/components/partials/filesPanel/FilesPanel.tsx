import React, { Fragment, useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid/v4';

//Import configs
import creatorConfig from '../../../assets/configs/creatorConfig.json';

//Import scripts
import { markSquare } from '../../../assets/scripts/markSquare';
import { generateEmptyMapMatrix } from '../../../assets/scripts/map';
import { deepCopy } from '../../../assets/scripts/utils/deepCopy';

//Import components
import Arrow from '../Arrow';
import CharButton from './CharButton';

//Import images
import test1 from '../../../assets/images/mapSources/building/test1.png';
import test1min from '../../../assets/images/mapSources/building/test1min.png';
import test2 from '../../../assets/images/mapSources/decoration/test2.png';
import test3 from '../../../assets/images/mapSources/mob/test3.png';
import test4 from '../../../assets/images/mapSources/npc/test4.png';
import test5 from '../../../assets/images/mapSources/subsoil/test3.png';

//Import actions
import { 
	changeMapBuildingMatrix, 
	changeMapDecorationMatrix, 
	changeMapSubsoilMatrix, 
	changeMapNpcMatrix, 
	changeMapMobMatrix 
} from '../../../redux/actions/mapActions';

//Import contexts
import { ContentContext } from '../../../Template';


const bookmarks: string[] = creatorConfig.bookmarks;

const FilesPanel: React.FC = () => {
	const { filesPanel } = useContext(ContentContext);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [currBookmark, setCurrBookmark] = useState<string>(bookmarks[0]);
	const dispatch = useDispatch();
	const buildingMatrix = deepCopy(useSelector(state => state.map.building.matrix));
	const subsoilMatrix = deepCopy(useSelector(state => state.map.subsoil.matrix));
	const mobMatrix = deepCopy(useSelector(state => state.map.mob.matrix));
	const decorationMatrix = deepCopy(
		useSelector(state => state.map.decoration.matrix)
	);
	const npcMatrix = deepCopy(useSelector(state => state.map.npc.matrix));

	useEffect((): void => { //Create necessary empty matrix at the beginning
		const newEmptyMatrix = generateEmptyMapMatrix();

		dispatch(changeMapBuildingMatrix(deepCopy(newEmptyMatrix)));
		dispatch(changeMapDecorationMatrix(deepCopy(newEmptyMatrix)));
		dispatch(changeMapSubsoilMatrix(deepCopy(newEmptyMatrix)));
		dispatch(changeMapNpcMatrix(deepCopy(newEmptyMatrix)));
		dispatch(changeMapMobMatrix(deepCopy(newEmptyMatrix)));
	}, []);

	const filesPanelStyles = {
		right: isOpen ? "0" : "-300px"
	};

	const imageStyle = {
		width: `${creatorConfig.map.fieldSize}px`,
		height: `${creatorConfig.map.fieldSize}px`
	};
	
	const generateImages = (): any[] => {
		const bookmarkImages: string[] = [];
		let matrixTransformationMethod: Function;
		let sourceMatrix: any[];
		let note: string = '';

		switch(currBookmark) { 
			case 'building':
				bookmarkImages.push(test1); //TODO: get images from database
				bookmarkImages.push(test1min); //TODO: get images from database
				matrixTransformationMethod = changeMapBuildingMatrix;
				sourceMatrix = buildingMatrix;
				note ='Added building images';
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
				note ='Added decoration images';
			break;
			case 'subsoil':
				bookmarkImages.push(test3);
				matrixTransformationMethod = changeMapSubsoilMatrix;
				sourceMatrix = subsoilMatrix;
				note ='Added subsoil images';
			break;
			case 'mob':
				bookmarkImages.push(test4);
				matrixTransformationMethod = changeMapMobMatrix;
				sourceMatrix = mobMatrix;
				note ='Added MOBs';
			break;
			case 'npc':
				bookmarkImages.push(test5);
				matrixTransformationMethod = changeMapNpcMatrix;
				sourceMatrix = npcMatrix;
				note ='Added NPCs';
			break;
		}

		const imagesToRender: any[] = bookmarkImages.map((img: string) => {
			return (
				<li 
					key={uuid()} 
					style={imageStyle} 
					onClick={(): void => markSquare(
							sourceMatrix, 
							`map${currBookmark}Canvas`, 
							matrixTransformationMethod, 
							note, 
							img, 
							'image'
					)}
				>
					<img src={img}></img>
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
					{ filesPanel.bookmarks[bookmark] } 
				</li>
			);
		});

		return bookmarksToRender;
	};

	return (
		<Fragment>
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

					{
						currBookmark === 'mob' ||
						currBookmark === 'npc' ? (
							<div 
								className="filesPanel__switch filesPanel__switch--char t-paragraph5Normal" 
							>
								<CharButton />
							</div>
						) : null
					}
					

					<div 
						className="filesPanel__switch t-paragraph4Normal" 
						onClick={(): void => setIsOpen(false)}
					>
						<span>
							{ filesPanel.close }
						</span>
						<Arrow additionalClass="arrow--filesPanel"/>
					</div>
				</div>
			</aside>
		</Fragment>
	);
};


export default FilesPanel;