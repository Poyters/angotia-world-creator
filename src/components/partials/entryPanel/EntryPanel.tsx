import React , { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { MapSizeInput } from './MapSizeInput';
import { setMapSizes } from '../../../store/actions/mapActions';
import { loadCharData } from '../../../store/actions/charActions';
import creatorConfig from '../../../assets/configs/creatorConfig.json';
import appConfig from '../../../assets/configs/appConfig.json';
import { IPoint } from '../../../assets/interfaces/math.interface';
import { ContentContext } from '../../../Template';
import { IStore } from '../../../assets/interfaces/store.interface';
import { LoadPopup } from './LoadPopup';
import { charState } from '../../../store/states/charState';
import { deepCopy } from '../../../assets/scripts/utils/deepCopy';
import { generateEmptyMapMatrix } from '../../../assets/scripts/map';
import { 
  changeMapBlockMatrix, 
  changeMapPassageMatrix, 
  changeMapVertexWeightMatrix,
  changeMapBuildingMatrix, 
	changeMapDecorationMatrix, 
	changeMapSubsoilMatrix, 
	changeMapNpcMatrix, 
  changeMapMobMatrix,
  changeMapSeMatrix
} from '../../../store/actions/mapActions';


let mapSizes: IPoint = {
  x: 0,
  y: 0
};

export const EntryPanel: React.FC = () => {
  const { lang, routes, entryPanel } = useContext(ContentContext);
  const mapSize = useSelector((state: IStore) => state.map.size);
  const [isActiveLoadPopup, setIsActiveLoadPopup] = useState<boolean>(false);
  const [mapX, setMapX] = useState<number>(mapSize.x);
  const [mapY, setMapY] = useState<number>(mapSize.y);
  const [loadedDataType, setLoadedDataType] = useState<string>('');
  const [valMess, setValMess] = useState<string>('');
  const [redirect, setRedirect] = useState<null | string>(null);
  const emptyCharState = deepCopy(charState);
  const dispatch = useDispatch();

  const loadDataHandler = (type: string) => {
    setLoadedDataType(type);
    setIsActiveLoadPopup(true);
  };

  const mapSizeValidation = ():void => {
    const mapSizeX: number = typeof mapX === "number" ? mapX : parseInt(mapX);
    const mapSizeY: number = typeof mapY === "number" ? mapY : parseInt(mapY);
    
    if ((typeof mapSizeX !== "number" || isNaN(mapSizeX)) || 
    (typeof mapSizeY !== "number" || isNaN(mapSizeY))) {
      setValMess("Value need to be number");
    }
    else if (
      (mapSizeX >= creatorConfig.map.maxSize || mapSizeX < creatorConfig.map.minSize) || 
      (mapSizeY >= creatorConfig.map.maxSize || mapSizeY < creatorConfig.map.minSize)
    ) {
      setValMess(
        // eslint-disable-next-line max-len
        `Value need to be bigger or equal to ${creatorConfig.map.minSize} and smaller than ${creatorConfig.map.maxSize}`
      );
    }
    else if (mapSizeX % 1 !== 0 || mapSizeY % 1 !== 0) {
      setValMess("Value need to be integer, not float type.");
    }
    else { //Redirect to /map
      setValMess("");
      mapSizes.x = mapSizeX;
      mapSizes.y = mapSizeY;

      dispatch(setMapSizes(mapSizes));
      const newEmptyMatrix = generateEmptyMapMatrix();
      
      dispatch(changeMapBlockMatrix(deepCopy(newEmptyMatrix)));
      dispatch(changeMapPassageMatrix(deepCopy(newEmptyMatrix)));
      dispatch(changeMapVertexWeightMatrix(deepCopy(newEmptyMatrix)));
      dispatch(changeMapBuildingMatrix(deepCopy(newEmptyMatrix)));
      dispatch(changeMapDecorationMatrix(deepCopy(newEmptyMatrix)));
      dispatch(changeMapSubsoilMatrix(deepCopy(newEmptyMatrix)));
      dispatch(changeMapNpcMatrix(deepCopy(newEmptyMatrix)));
      dispatch(changeMapMobMatrix(deepCopy(newEmptyMatrix)));
      dispatch(changeMapSeMatrix(deepCopy(newEmptyMatrix)));
      setRedirect(routes.creator);
    }

  };

  const newCharInstanceHanlder = (): void => {
    dispatch(loadCharData(emptyCharState));
    setRedirect(routes?.char);
  };

  const content = redirect !== null ? (
    <Redirect to={`/${lang}/${redirect}`}/>
  ) : (
    <ul className="entryPanel">
      <li>
        <button className="t-paragraph1MediumLight entryPanel__createBoard">
          <span>
            { entryPanel?.createMap }
          </span>
          <div role="presentation" className="entryPanel__sizeBoard">
            <MapSizeInput
              currValue={mapX}
              changeValue={setMapX}
              id="yMapSize"
            />
            <span className="t-paragraph3Normal">x</span>
            <MapSizeInput
              currValue={mapY}
              changeValue={setMapY}
              id="yMapSize"
            />
            <div className="startBtn" onClick={mapSizeValidation}>
              start
            </div>
          </div>
          <span 
            id="validationInfo" 
            className="t-paragraph2Bold entryPanel__validationInfo"
          >
            { valMess }
          </span>
        </button>
      </li>
      <li>
        <label
          className="t-paragraph1MediumLight"
          onClick={() => loadDataHandler('map')}
        >
          { entryPanel?.loadMap }
        </label>
      </li>
      <li className="entryPanel__separator"> </li>
      <li>
        <label 
          className="t-paragraph1MediumLight"
          onClick={newCharInstanceHanlder}>
          { entryPanel?.createChar }
        </label>
      </li>
      <li>
        <label 
          className="t-paragraph1MediumLight"
          onClick={() => loadDataHandler('char')}
        >
          { entryPanel?.loadChar }
        </label>
      </li>
      <li>
        <a href={appConfig?.exitLink} id="closeBtn">
          <span className="t-paragraphLight">
          { entryPanel?.exit }
          </span>
        </a>
      </li>
    </ul>
  );

  return (
    <>
      { isActiveLoadPopup ? ReactDOM.createPortal(
        <LoadPopup isActive={setIsActiveLoadPopup} type={loadedDataType}/>, document.body
      ) : null}
     { content }
    </>
  );
};
