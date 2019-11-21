import React , { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';

//Import other components
import MapSizeInput from './MapSizeInput';

//Import actions
import { setMapSizes } from '../../../redux/actions/mapActions';
import { changeMapName } from '../../../redux/actions/uiActions';
import { loadMapData } from '../../../redux/actions/mapActions';

//Import configs
import creatorConfig from '../../../assets/configs/creatorConfig.json';
import appConfig from '../../../assets/configs/appConfig.json';

//Import interfaces
import { IPoint } from '../../../assets/interfaces/pointInterfaces';

//Import scripts
import { drawLoadedMap } from '../../../assets/scripts/drawLoadedMap';


let mapSizes: IPoint = {
  x: 0,
  y: 0
};


const EntryPanel: React.FC = () => {
  const mapSize = useSelector(state => state.map.size);
  const [mapX, setMapX] = useState<number>(mapSize.x);
  const [mapY, setMapY] = useState<number>(mapSize.y);
  const [valMess, setValMess] = useState<string>('');
  const [redirect, setRedirect] = useState<boolean>(false);
  const dispatch = useDispatch();

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
        `Value need to be bigger or equal to ${creatorConfig.map.minSize} and smaller than ${creatorConfig.map.maxSize}`
      );
    }
    else if (mapSizeX % 1 !== 0 || mapSizeY % 1 !== 0) {
      setValMess("Value need to be integer, not float type.");
    }
    else { //Redirect to map.html
      setValMess("");
      mapSizes.x = mapSizeX;
      mapSizes.y = mapSizeY;

      dispatch(setMapSizes(mapSizes));
      setRedirect(true);
    }

  };

  const loadMap = (evt: any) => {
    const file = evt.target.files[0]; 
    const reader = new FileReader();

    reader.onload = (():any => {
      return (e) => {
        const mapData = JSON.parse(e.target.result);

        dispatch(changeMapName(file.name));
        dispatch(loadMapData(mapData));
        drawLoadedMap();
      };

    })();

    reader.readAsText(file);
    setRedirect(true);
  };

  const content = redirect ? (
    <Redirect to='/creator'/>
  ) : (
    <ul className="entryPanel">
      <li>
        <a href="#" className="t-paragraph1Light entryPanel__createBoard">
          <span>
            create new map
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
            <button onClick={mapSizeValidation}>start</button>
          </div>
          <span 
            id="validationInfo" 
            className="t-paragraph2Bold entryPanel__validationInfo"
          >
            {valMess}
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <input 
              type="file" 
              id="loadMapInput" 
              className="loadMapInput"
              onChange={(event): void => loadMap(event)}
          />
          <label className="t-paragraph1Light" htmlFor="loadMapInput">
            load map
          </label>
        </a>
      </li>
      <li>
        <a href={appConfig.exitLink} id="closeBtn">
          <span className="t-paragraphLight">
            exit
          </span>
        </a>
      </li>
    </ul>
  );

  return (
    content
  );
};


export default EntryPanel;
