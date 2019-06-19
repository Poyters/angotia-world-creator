import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//Import configs
import creatorConfig from '../../assets/configs/creatorConfig.json';

//Import scripts
import dragElement from '../../assets/scripts/dragElement';
import { selectFieldsHandler } from '../../assets/scripts/selectFields';

//Import interfaces
import { IMapSize } from '../../assets/interfaces/mapInterfaces';


interface IMap {
  mapSize: IMapSize,
  mapPic: string
}

const Map: React.FC<IMap> = ({ mapSize, mapPic }) => {
  const fieldSize: number = creatorConfig.map.fieldSize;

  interface IMapStyles {
    width: string,
    height: string,
    backgroundImage: string
  }

  const mapStyles: IMapStyles = {
    width: `${mapSize.x * fieldSize}px`,
    height: `${mapSize.y * fieldSize}px`,
    backgroundImage: `url('${mapPic}')`
  }

  useEffect((): void => {
    dragElement(document.getElementById("map"));
  }, [])


  return (
    <main className="map" style={mapStyles} id="map">
      <canvas className="map__mainCanvas" width={`${mapSize.x * fieldSize}`} height={`${mapSize.y * fieldSize}`} id="mapCanvas" onClick={e => selectFieldsHandler(e)}> </canvas>
      <canvas className="map__selectCanvas" width={`${mapSize.x * fieldSize}`} height={`${mapSize.y * fieldSize}`} id="mapSelectCanvas" onClick={e => selectFieldsHandler(e)}> </canvas>
    </main>
  );
}


const mapStateToProps = state => {
  return {
    mapSize: state.map.size,
    mapPic: state.map.mapPic
  }
}


export default connect(mapStateToProps)(Map);