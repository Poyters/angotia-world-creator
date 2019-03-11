import React from 'react';
import { connect } from 'react-redux';

//Import other components
import MapField from './MapField';


interface IMap {
  mapSize: {
    x: number,
    y: number
  }
}

const Map: React.SFC<IMap> = ({ mapSize }) => {
  const mapStyles = {
    width: `${mapSize.x * 50}px`,
    height: `${mapSize.y * 50}px`
  }

  return (
    <main className="map" style={mapStyles}>
        Map component works!
    </main>
  );
}


const mapStateToProps = state => {
  return {
    mapSize: state.map.size
  }
}


export default connect(mapStateToProps)(Map);