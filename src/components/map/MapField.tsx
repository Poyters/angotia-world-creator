import React from 'react';
import creatorConfig from '../../assets/configs/creatorConfig.json';

//Import other components
import MapSquare from './MapSquare';


const MapField: React.SFC = () => {
  const fieldSize = creatorConfig.map.fieldSize;

  const mapFieldStyles = {
    width: `${fieldSize}px`,
    height: `${fieldSize}px`
  }

  return (
    <div className="mapField" style={mapFieldStyles}>
      x
    </div>
  );
}

export default MapField;