import React from 'react';
import { connect } from 'react-redux';

//Import configs
import creatorConfig from '../../assets/configs/creatorConfig.json';


interface IMapSquare {
  mapSquareNet: boolean
}


const MapSquare: React.SFC<IMapSquare> = ({ mapSquareNet }) => {
  const fieldSize = creatorConfig.map.fieldSize;
  const border = mapSquareNet ? '1px' : '0';

  const mapSquareStyles = {
    maxWidth: `${fieldSize/2}px`,
    minWidth: `${fieldSize/2}px`,
    height: `${fieldSize/2}px`,
    borderWidth: `${border}`
  }
  return (
    <div className="mapField__square" style={mapSquareStyles}>
        
    </div>
  );
}

const mapStateToProps = state => {
  return {
    mapSquareNet: state.map.net.square
  }
}

export default connect(mapStateToProps)(MapSquare);