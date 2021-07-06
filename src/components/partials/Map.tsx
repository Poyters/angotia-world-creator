import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import mapConfig from '../../assets/configs/map.config.json';
import { dragElement } from '../../scripts/utils/dragElement';
import { selectFieldsHandler } from '../../scripts/select/selectFields';
import { mouseSelectFields } from '../../scripts/select/mouseSelectFields';
import { IStore } from '../../interfaces/store.interface';
import { Canvas } from '../../models/canvas.model';


export const Map: React.FC = () => {
  const mapSize = useSelector((state: IStore) => state.map.size);
  const mapPic = useSelector((state: IStore) => state.map.mapPic);
  const [mapTop, setMapTop] = useState<number>(0);
  const [mapLeft, setMapLeft] = useState<number>(0);

  const fieldSize: number = mapConfig?.map?.fieldSize;

  const mapStyles = {
    width: `${mapSize.x * fieldSize}px`,
    height: `${mapSize.y * fieldSize}px`,
    top: `${mapTop}px`,
    left: `${mapLeft}px`,
    backgroundImage: `url('${mapPic}')`
  };

  useEffect(() => {
    dragElement(document.getElementById('map'));
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

  return (
    <main className="map" style={mapStyles} id="map">
      <canvas 
        className="map__canvas map__canvas--main" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id={Canvas.base}
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--select" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id={Canvas.select} 
        onClick={e => selectFieldsHandler(e)}
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--block js-mapLayer" 
        data-layername="disableFields" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id={Canvas.block}
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--passage js-mapLayer"
        data-layername="passage"
        width={`${mapSize.x * fieldSize}`}
        height={`${mapSize.y * fieldSize}`} 
        id={Canvas.passage}
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--building js-mapLayer" 
        data-layername="buildings" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id={Canvas.building}
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--decoration js-mapLayer" 
        data-layername="decorations" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id={Canvas.decoration}
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--terrain js-mapLayer" 
        data-layername="terrain" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id={Canvas.terrain}
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--npc js-mapLayer" 
        data-layername="npcs" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id={Canvas.npc}
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--mob js-mapLayer" 
        data-layername="mobs" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id={Canvas.mob}
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--se js-mapLayer" 
        data-layername="speakingEnvironment" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id={Canvas.se}
      > </canvas>

      <canvas 
        className="map__canvas map__canvas--vertexWeight js-mapLayer" 
        data-layername="vertexWeight" 
        width={`${mapSize.x * fieldSize}`} 
        height={`${mapSize.y * fieldSize}`} 
        id={Canvas.vertexWeight}
      > </canvas>
    </main>
  );
};