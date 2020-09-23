import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import creatorConfig from '../../assets/configs/creatorConfig.json';
import { dragElement } from '../../scripts/utils/dragElement';
import { selectFieldsHandler } from '../../scripts/select/selectFields';
import { mouseSelectFields } from '../../scripts/select/mouseSelectFields';
import { IStore } from '../../interfaces/store.interface';
import uuid from 'uuid/v4';


export const Map: React.FC = () => {
  const mapSize = useSelector((state: IStore) => state.map.size);
  const mapPic = useSelector((state: IStore) => state.map.mapPic);
  const [mapTop, setMapTop] = useState<number>(0);
  const [mapLeft, setMapLeft] = useState<number>(0);

  const fieldSize: number = creatorConfig?.map?.fieldSize;

  interface IMapStyles {
    width: string,
    height: string,
    top: string,
    left: string
    backgroundImage: string
  }

  const mapStyles: IMapStyles = {
    width: `${mapSize.x * fieldSize}px`,
    height: `${mapSize.y * fieldSize}px`,
    top: `${mapTop}px`,
    left: `${mapLeft}px`,
    backgroundImage: `url('${mapPic}')`
  };

  useEffect((): void => {
    dragElement(document.getElementById("map"));
    const winHeight: number = window.innerHeight;
    const winWidth: number = window.innerWidth;
    const marginTop: number = (winHeight - (mapSize.y * fieldSize)) / 2;
    const marginLeft: number = (winWidth - (mapSize.x * fieldSize)) / 2;

    setMapTop(marginTop);
    setMapLeft(marginLeft);
  }, [mapSize, fieldSize]);

  useEffect(() => {
    mouseSelectFields();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const generateLayers = () => {
    const contentToRender = creatorConfig.layers.map((layer: any) => {
      return (
        <canvas
          key={uuid()}
          className={`map__canvas map__canvas--${layer.type} js-mapLayer`}
          data-layername={layer.name}
          width={`${mapSize.x * fieldSize}`} 
          height={`${mapSize.y * fieldSize}`} 
          id={`MAP_${layer.type.toUpperCase()}_CANVAS`}
        > </canvas>
      );
    });
    
    return contentToRender;
  };


  return (
    <main className="map" style={mapStyles} id="map">
      <canvas 
        className="map__canvas map__canvas--main" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id="mapCanvas"
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--select" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id="MAP_SELECT_CANVAS" 
        onClick={e => selectFieldsHandler(e)}
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--block js-mapLayer" 
        data-layername="disableFields" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id="MAP_BLOCK_CANVAS"
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--passage js-mapLayer"
        data-layername="passage"
        width={`${mapSize.x * fieldSize}`}
        height={`${mapSize.y * fieldSize}`} 
        id="MAP_PASSAGE_CANVAS"
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--building js-mapLayer" 
        data-layername="buildings" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id="MAP_BUILDING_CANVAS"
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--decoration js-mapLayer" 
        data-layername="decorations" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id="MAP_DECORATION_CANVAS"
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--subsoil js-mapLayer" 
        data-layername="subsoil" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id="MAP_SUBSOIL_CANVAS"
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--npc js-mapLayer" 
        data-layername="npcs" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id="MAP_NPC_CANVAS"
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--mob js-mapLayer" 
        data-layername="mobs" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id="MAP_MOB_CANVAS"
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--se js-mapLayer" 
        data-layername="speakingEnvironment" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id="MAP_SE_CANVAS"
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--vertexWeight js-mapLayer" 
        data-layername="vertexWeight" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id="MAP_VERTEXWEIGHT_CANVAS"
      > </canvas>
    </main>
  );
};