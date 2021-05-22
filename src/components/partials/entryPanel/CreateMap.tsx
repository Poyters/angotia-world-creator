import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid/v4';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { ContentContext } from '../../../Template';
import { IPoint } from '../../../interfaces/math.interface';
import { IStore } from '../../../interfaces/store.interface';
import { MapSizeInput } from './MapSizeInput';
import { setMapSizes } from '../../../store/actions/mapActions';
import { deepCopy } from '../../../scripts/utils/deepCopy';
import mapConfig from '../../../assets/configs/map.config.json';
import { generateEmptyMatrix } from '../../../scripts/matrix/generateEmptyMatrix';
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

const mapSizes: IPoint = {
  x: 0,
  y: 0
};

export const CreateMap: React.FC = () => {
  const { lang, routes } = useContext(ContentContext);
  const [redirect, setRedirect] = useState<null | string>(null);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const mapSize = useSelector((state: IStore) => state.map.size);
  const [mapX, setMapX] = useState<number>(mapSize.x);
  const [mapY, setMapY] = useState<number>(mapSize.y);
  const [valMess, setValMess] = useState<string>('');
  const dispatch = useDispatch();

  const mapSizeValidation = ():void => {
    const mapSizeX: number = typeof mapX === "number" ? mapX : parseInt(mapX);
    const mapSizeY: number = typeof mapY === "number" ? mapY : parseInt(mapY);
    
    if ((typeof mapSizeX !== "number" || isNaN(mapSizeX)) || 
    (typeof mapSizeY !== "number" || isNaN(mapSizeY))) {
      setValMess("Value need to be number");
    }
    else if (
      (mapSizeX >= mapConfig.map.maxSize || mapSizeX < mapConfig.map.minSize) || 
      (mapSizeY >= mapConfig.map.maxSize || mapSizeY < mapConfig.map.minSize)
    ) {
      setValMess(
        // eslint-disable-next-line max-len
        `Value need to be bigger or equal to ${mapConfig.map.minSize} and smaller than ${mapConfig.map.maxSize}`
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
      const newEmptyMatrix = generateEmptyMatrix();
      
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

  return (
    <>
      {
        redirect !== null ? (
          <Redirect to={`/${lang}/${redirect}`}/>
        ) : null
      }
      { isOpenPopup ? ReactDOM.createPortal(
          <div className="g-container g-container--popup">
            <div role="alert" className="insertPopup">
              <div
                className="g-exitBtn g-exitBtn--popup"
                onClick={() => setIsOpenPopup(false)}
              > </div>
              <header className="insertPopup__header t-paragraph3Light">
                Create map
              </header>
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
              { valMess }
            </div>
          </div>, document.body
        ) : null
      }
      <li key={uuid()} onClick={() => setIsOpenPopup(true)}>
        Map      
      </li>
    </>
  );
};