import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

//Import configs
import creatorConfig from '../../assets/configs/creatorConfig.json';

//Import scripts
import dragElement from '../../assets/scripts/dragElement';
import { selectFieldsHandler } from '../../assets/scripts/selectFields';


const Map: React.FC = () => {
  const mapSize = useSelector(state => state.map.size);
  const mapPic = useSelector(state => state.map.mapPic);

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
      <canvas 
        className="map__canvas map__canvas--main" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id="mapCanvas" 
        onClick={e => selectFieldsHandler(e)}
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--select" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id="mapSelectCanvas" 
        onClick={e => selectFieldsHandler(e)}
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--block js-mapLayer" 
        data-layername="disable fields" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id="mapBlockCanvas"
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--passage js-mapLayer"
        data-layername="passage"
        width={`${mapSize.x * fieldSize}`}
        height={`${mapSize.y * fieldSize}`} 
        id="mapPassageCanvas"
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--building js-mapLayer" 
        data-layername="buildings" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id="mapbuildingCanvas"
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--decoration js-mapLayer" 
        data-layername="decorations" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id="mapdecorationCanvas"
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--subsoil js-mapLayer" 
        data-layername="subsoil" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id="mapsubsoilCanvas"
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--npc js-mapLayer" 
        data-layername="npcs" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id="mapnpcCanvas"
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--mob js-mapLayer" 
        data-layername="mobs" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id="mapmobCanvas"
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--vertexWeight js-mapLayer" 
        data-layername="vertex weight" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id="mapVertexWeightCanvas"
      > </canvas>
    </main>
  );
}


export default Map;