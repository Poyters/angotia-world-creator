import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//Import configs
import creatorConfig from '../../assets/configs/creatorConfig.json';

//Import scripts
import dragElement from '../../assets/scripts/dragElement';
import { drawMapNet } from '../../assets/scripts/drawNetMap';


interface IMap {
  mapSize: {
    x: number,
    y: number
  },
  mapPic: string
}

const Map: React.SFC<IMap> = ({ mapSize, mapPic }) => {
  const fieldSize: number = creatorConfig.map.fieldSize;

  interface ImapStyles {
    width: string,
    height: string,
    backgroundImage: string
  }

  const mapStyles: ImapStyles = {
    width: `${mapSize.x * fieldSize}px`,
    height: `${mapSize.y * fieldSize}px`,
    backgroundImage: `url('${mapPic}')`
  }


  useEffect((): void => {
    dragElement(document.getElementById("map"));

    const canvas: any = document.getElementById("mapCanvas");
    const ctx = canvas.getContext("2d");

    drawMapNet(ctx, 0); //draw fields
    drawMapNet(ctx, 1); //draw squares
  })

  return (
    <main className="map" style={mapStyles} id="map">
      <canvas width={`${mapSize.x * fieldSize}`} height={`${mapSize.y * fieldSize}`} id="mapCanvas"> </canvas>
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