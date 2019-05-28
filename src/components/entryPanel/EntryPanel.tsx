import React , { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

//Import other components
import MapSizeInput from './MapSizeInput';

//Import actions
import { setMapSizes } from '../../redux/actions/mapActions';

//Import interfaces
import { IMapSize } from '../../assets/interfaces/mapInterfaces';


let mapSizes = {
  x: 0,
  y: 0
}


interface IEntryPanel {
  mapSize: IMapSize,
  setMapSizes: Function
}

const EntryPanel: React.SFC<IEntryPanel> = ({ mapSize, setMapSizes }) => {
  const [mapX, setMapX] = useState<any>(mapSize.x);
  const [mapY, setMapY] = useState<any>(mapSize.y);
  const [valMess, setValMess] = useState('');
  const [redirect, setRedirect] = useState(false);

  const mapSizeValidation = () => {
    const mapSizeX:number = typeof mapX === "number" ? mapX : parseInt(mapX);
    const mapSizeY:number = typeof mapY === "number" ? mapY : parseInt(mapY);
    
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

      setMapSizes(mapSizes);
      setRedirect(true)
    }

  }

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

  return (
    content
  );
}


const mapStateToProps = state => {
  return {
    mapSize: state.map.size
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMapSizes: sizes => {dispatch(setMapSizes(sizes))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryPanel);
