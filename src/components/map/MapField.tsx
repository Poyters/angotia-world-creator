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

  const fieldSquares = [...Array(4)].map((el, index) => {
    return <MapSquare key={index}/>
  })

  return (
    <div className="mapField" style={mapFieldStyles}>
      {fieldSquares}
    </div>
  );
}

export default MapField;