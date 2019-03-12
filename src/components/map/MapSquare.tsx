import React from 'react';
import creatorConfig from '../../assets/configs/creatorConfig.json';


const MapSquare: React.SFC = () => {
  const fieldSize = creatorConfig.map.fieldSize;

  const mapSquareStyles = {
    maxWidth: `${fieldSize/2}px`,
    minWidth: `${fieldSize/2}px`,
    height: `${fieldSize/2}px`
  }
  return (
    <div className="mapField__square" style={mapSquareStyles}>
        
    </div>
  );
}

export default MapSquare;