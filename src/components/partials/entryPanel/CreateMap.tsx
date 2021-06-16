import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid/v4';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { IStore } from '../../../interfaces/store.interface';
import { MapSizeInput } from './MapSizeInput';
import { mapState } from '../../../store/states/mapState';
import { deepCopy } from '../../../scripts/utils/deepCopy';
import { loadMapData } from '../../../store/actions/mapActions';
import mapConfig from '../../../assets/configs/map.config.json';
import { IMapState } from '../../../interfaces/mapState.interface';
import { generateEmptyMatrix } from '../../../scripts/matrix/generateEmptyMatrix';
import routesConfig from '../../../assets/configs/routes.config.json';
import { useTranslation } from 'react-i18next';

export const CreateMap: React.FC = () => {
  const [redirect, setRedirect] = useState<null | string>(null);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const mapSize = useSelector((state: IStore) => state.map.size);
  const [mapX, setMapX] = useState<number>(mapSize.x);
  const [mapY, setMapY] = useState<number>(mapSize.y);
  const [valMess, setValMess] = useState<string>('');
  const dispatch = useDispatch();
  const emptyMapState: IMapState = deepCopy(mapState);
  const { t } = useTranslation(['common', 'create']);

  useEffect(() => {
    mapSizeValidation();
  }, [mapX, mapY]);

  const mapSizeValidation = () => {
    const mapSizeX = typeof mapX === 'number' ? mapX : parseInt(mapX);
    const mapSizeY = typeof mapY === 'number' ? mapY : parseInt(mapY);
    
    if ((typeof mapSizeX !== 'number' || isNaN(mapSizeX)) || 
    (typeof mapSizeY !== 'number' || isNaN(mapSizeY))) {
      setValMess(t('create:map.isNotNumber'));
    }
    else if (
      (mapSizeX >= mapConfig.map.maxSize || mapSizeX < mapConfig.map.minSize) || 
      (mapSizeY >= mapConfig.map.maxSize || mapSizeY < mapConfig.map.minSize)
    ) {
      setValMess(
        t('create:map.minMax', { 
          min: mapConfig.map.minSize,
          max: mapConfig.map.maxSize 
        })
      );
    }
    else if (mapSizeX % 1 !== 0 || mapSizeY % 1 !== 0) {
      setValMess(t('create:map.isNotInteger'));
    }
    else {
      setValMess('');
    }
  };

  const createMap = () => {
    const mapSizeX = typeof mapX === 'number' ? mapX : parseInt(mapX);
    const mapSizeY = typeof mapY === 'number' ? mapY : parseInt(mapY);
    const newEmptyMatrix = generateEmptyMatrix({
      x: mapSizeX,
      y: mapSizeY
    });

    setValMess('');
    emptyMapState.size.x = mapSizeX;
    emptyMapState.size.y = mapSizeY;
    emptyMapState.blockMatrix = deepCopy(newEmptyMatrix);
    emptyMapState.passage.matrix = deepCopy(newEmptyMatrix);
    emptyMapState.building.matrix = deepCopy(newEmptyMatrix);
    emptyMapState.decoration.matrix = deepCopy(newEmptyMatrix);
    emptyMapState.subsoil.matrix = deepCopy(newEmptyMatrix);
    emptyMapState.npc.matrix = deepCopy(newEmptyMatrix);
    emptyMapState.mob.matrix = deepCopy(newEmptyMatrix);
    emptyMapState.se.matrix = deepCopy(newEmptyMatrix);
    emptyMapState.vertex.matrix = deepCopy(newEmptyMatrix);

    dispatch(loadMapData(emptyMapState));
    setRedirect(routesConfig.mapCreator);
  };

  return (
    <>
      {
        redirect !== null ? (
          <Redirect to={`/${redirect}`}/>
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
              { t('create:map.title') } 
              </header>
              <div className="insertPopup__content">
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
              </div>
              <div className="insertPopup__errorMess insertPopup--error"> 
                { valMess }
              </div>
              <button 
                type="submit" 
                className="insertPopup__submit t-paragraphLight" 
                onClick={createMap} 
                disabled={!!valMess}
              > 
                { t('create:map.start') } 
              </button>
            </div>
          </div>, document.body
        ) : null
      }
      <li key={uuid()} onClick={() => setIsOpenPopup(true)}>
        { t('common:map') }        
      </li>
    </>
  );
};