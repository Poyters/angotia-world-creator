import { store } from '../../index';
import mapConfig from '../../assets/configs/map.config.json';
import { IMapSize } from '../../interfaces/map.interface';
import { IStore } from '../../interfaces/store.interface';


const fieldSize: number = mapConfig.map.fieldSize;

export const drawMapNet = (ctx: any, type: number) => {
  const storeData = store.getState() as IStore;
  const mapSize: IMapSize = storeData.map.size;

  const mapSizeX: number = mapSize.x*fieldSize;
  const mapSizeY: number = mapSize.y*fieldSize;
  const divider: number = type === 0 ? 1 : 2;
    
  ctx.beginPath();

  if (type === 0) { //field
    ctx.setLineDash([]);
    ctx.strokeStyle = "#bbb";
  } 
  else { //square
    ctx.setLineDash([2, 6]);
    ctx.strokeStyle = "#666";
  } 
  ctx.lineWidth = 1;


  for (let x: number = fieldSize/divider; x<mapSizeX; x+=fieldSize/divider) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, mapSizeY);
    ctx.closePath();
  }

  for (let y:number = fieldSize/divider; y<mapSizeY; y+=fieldSize/divider) {
    ctx.moveTo(0, y);
    ctx.lineTo(mapSizeX, y);
    ctx.closePath();
  }

  ctx.closePath();
  ctx.stroke();
};