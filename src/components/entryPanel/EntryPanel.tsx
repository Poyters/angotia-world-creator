import React , { useState } from 'react';

//Import other components
import MapSizeInput from './MapSizeInput';


export let mapSizes = {
  x: 0,
  y: 0
}

interface IMapSize {
  size: number | string
}

export const EntryPanel: React.SFC = () => {
  const [mapX, setMapX] = useState<IMapSize>({size: 30});
  const [mapY, setMapY] = useState<IMapSize>({size: 30});
  const [valMess, setValMess] = useState('');

  const mapSizeValidation = () => {
    const mapSizeX:number = typeof mapX.size === "number" ? mapX.size : parseInt(mapX.size);
    const mapSizeY:number = typeof mapY.size === "number" ? mapY.size : parseInt(mapY.size);
    
    if ((typeof mapSizeX !== "number" || isNaN(mapSizeX)) || 
    (typeof mapSizeY !== "number" || isNaN(mapSizeY))) {
      setValMess("Value need to be number");
    }
    else if ((mapSizeX >= 100 || mapSizeX < 5) || (mapSizeY >= 100 || mapSizeY < 5)) {
      setValMess("Value need to be bigger or equal to five and smaller than 100");
    }
    else if (mapSizeX % 1 !== 0 || mapSizeY % 1 !== 0) {
      setValMess("Value need to be integer, not float type.");
    }
    else { //Redirect to map.html
      setValMess("");
      mapSizes.x = mapSizeX
      mapSizes.y = mapSizeY;
      console.log(mapSizes);
    }

  }

  console.log(valMess)
  return (
    <ul className="entryPanel">
      <li>
        <a href="#" className="t-paragraph1Light entryPanel__createBoard">
          {/* tabindex="1" */}
          <span>
            create new map
          </span>
          <div role="presentation" className="entryPanel__sizeBoard">
            <MapSizeInput
              currValue={mapX.size}
              changeValue={setMapX}
              id="yMapSize"
            />
            <span className="t-paragraph3Normal">x</span>
            <MapSizeInput
              currValue={mapY.size}
              changeValue={setMapY}
              id="yMapSize"
            />
            <button onClick={mapSizeValidation}>start</button>
          </div>
          <span id="validationInfo" className="t-paragraph2Bold entryPanel__validationInfo">
            {valMess}
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="t-paragraph1Light">
            edit existing map
          </span>
        </a>
      </li>
      <li>
        <a href="#" id="closeBtn">
          <span className="t-paragraphLight">
            exit
          </span>
        </a>
      </li>
    </ul>
  );
}
