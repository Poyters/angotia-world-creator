import React , { useState } from 'react';

//Import other components
import MapSizeInput from './MapSizeInput';

interface IMapSize {
  size: number | string
}

const EntryPanel: React.SFC = () => {
  const [mapX, setMapX] = useState<IMapSize>({size: 30});
  const [mapY, setMapY] = useState<IMapSize>({size: 30});

  const mapSizeValidation = () => {
    console.log('mapX', mapX);
    console.log('mapY', mapY);
  }

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
          <span id="validationInfo" className="t-paragraph2Bold entryPanel__validationInfo"></span>
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

export default EntryPanel;