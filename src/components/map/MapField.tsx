import React from 'react';
import { connect } from 'react-redux';

//Import configs
import creatorConfig from '../../assets/configs/creatorConfig.json';

//Import other components
import MapSquare from './MapSquare';


interface IMapField {
  mapFieldNet: boolean
}


const MapField: React.SFC<IMapField> = ({ mapFieldNet }) => {
  const fieldSize = creatorConfig.map.fieldSize;
  const border = mapFieldNet ? '1px' : '0';

  const mapFieldStyles = {
    width: `${fieldSize}px`,
    height: `${fieldSize}px`,
    borderWidth: `${border}`
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


const mapStateToProps = state => {
  return {
    mapFieldNet: state.map.net.field
  }
}

export default connect(mapStateToProps)(MapField);