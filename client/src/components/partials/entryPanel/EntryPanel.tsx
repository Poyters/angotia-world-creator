import React , { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { MapSizeInput } from './MapSizeInput';
import { setMapSizes, loadMapData } from '../../../store/actions/mapActions';
import { changeMapName } from '../../../store/actions/mapActions';
import creatorConfig from '../../../assets/configs/creatorConfig.json';
import appConfig from '../../../assets/configs/appConfig.json';
import { IPoint } from '../../../assets/interfaces/point';
import { drawLoadedMap } from '../../../assets/scripts/drawLoadedMap';
import { ContentContext } from '../../../Template';
import { IStore } from '../../../assets/interfaces/store';


let mapSizes: IPoint = {
  x: 0,
  y: 0
};

export const EntryPanel: React.FC = () => {
  const { lang, routes, entryPanel } = useContext(ContentContext);
  const mapSize = useSelector((state: IStore) => state.map.size);
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
        // eslint-disable-next-line max-len
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
    <Redirect to={`/${lang}/${routes.creator}`}/>
  ) : (
    <ul className="entryPanel">
      <li>
        <button className="t-paragraph1MediumLight entryPanel__createBoard">
          <span>
            { entryPanel.createMap }
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
            {valMess}
          </span>
        </button>
      </li>
      <li>
        <a href="#">
          <input 
              type="file" 
              id="loadMapInput" 
              className="entryPanel__loadMapInput"
              onChange={(event): void => loadMap(event)}
          />
          <label className="t-paragraph1MediumLight" htmlFor="loadMapInput">
            { entryPanel.loadMap }
          </label>
        </a>
      </li>
      <li className="entryPanel__separator"> </li>
      <li>
        <Link
          to={`/${lang}/${routes.char}`}
          className="t-paragraph1MediumLight"
        >
            { entryPanel.createChar }
        </Link>
      </li>
      <li>
        <Link
          to={`/${lang}/${routes.char}`}
          className="t-paragraph1MediumLight"
        >
          { entryPanel.loadChar }
        </Link>
      </li>
      <li>
        <a href={appConfig.exitLink} id="closeBtn">
          <span className="t-paragraphLight">
          { entryPanel.exit }
          </span>
        </a>
      </li>
    </ul>
  );

  return (
    content
  );
};
