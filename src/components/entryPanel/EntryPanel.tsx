import React from 'react';

//Import other components
import MapSizeInput from './MapSizeInput';


const EntryPanel: React.SFC = () => {
  const mapSizeValidation = () => {

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
              value="x-axis"
              id="xMapSize"
            />
            <span className="t-paragraph3Normal">x</span>
            <MapSizeInput
              value="y-axis"
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