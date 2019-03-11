import React from 'react';
import { connect } from 'react-redux';
import creatorConfig from '../../assets/configs/creatorConfig.json';

//Import other components
import MapField from './MapField';


interface IMap {
  mapSize: {
    x: number,
    y: number
  }
}

const Map: React.SFC<IMap> = ({ mapSize }) => {
  const fieldSize = creatorConfig.map.fieldSize;

  const mapStyles = {
    width: `${mapSize.x * fieldSize}px`,
    height: `${mapSize.y * fieldSize}px`
  }

  const mapFields = [...Array(mapSize.x*mapSize.y)].map((el, index) => {
    return <MapField key={index}/>
  })

  return (
    <main className="map" style={mapStyles}>
        {mapFields}
    </main>
  );
}


const mapStateToProps = state => {
  return {
    mapSize: state.map.size
  }
}


export default connect(mapStateToProps)(Map);