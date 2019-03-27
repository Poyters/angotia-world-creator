//Import configs
import creatorConfig from '../configs/creatorConfig.json';


const fieldSize: number = creatorConfig.map.fieldSize

export const drawMapNet = (ctx: any, type: number, divider: number) => {
    const mapSizeX: number = mapSize.x*fieldSize;
    const mapSizeY: number = mapSize.y*fieldSize;
      
    ctx.beginPath();

    if (type === 0) { //square
        ctx.setLineDash([5, 3]);
        ctx.strokeStyle = "#666";
    } 
    else { //field
        ctx.setLineDash([]);
        ctx.strokeStyle = "#bbb";
    } 
    ctx.lineWidth = 1;
  
    for (let x = fieldSize/divider; x<mapSizeX; x+=fieldSize/divider) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, mapSizeY);
    }
  
    for (let y = fieldSize/divider; y<mapSizeY; y+=fieldSize/divider) {
      ctx.moveTo(0, y);
      ctx.lineTo(mapSizeX, y);
    }
  
    ctx.closePath();
    ctx.stroke();
}
export const drawFields = (ctx, mapSize) => {
    const mapSizeX: number = mapSize.x*fieldSize;
    const mapSizeY: number = mapSize.y*fieldSize;
      
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.strokeStyle = "#bbb";
    ctx.lineWidth = 1;
  
    for (let x = fieldSize; x<mapSizeX; x+=fieldSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, mapSizeY);
    }
  
    for (let y = fieldSize; y<mapSizeY; y+=fieldSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(mapSizeX, y);
    }
  
    ctx.closePath();
    ctx.stroke();
} 
  


export const drawSquares = (ctx, mapSize) => {
    const mapSizeX: number = mapSize.x*fieldSize;
    const mapSizeY: number = mapSize.y*fieldSize;
  
    ctx.beginPath();
    ctx.setLineDash([5, 3]);
    ctx.strokeStyle = "#666";
    ctx.lineWidth = 1;
    
    for (let x = fieldSize/2; x<mapSizeX; x+=fieldSize/2) {
      console.log(x)
      ctx.moveTo(x, 0);
      ctx.lineTo(x, mapSizeY);
    }
  
    for (let y = fieldSize/2; y<mapSizeY; y+=fieldSize/2) {
      ctx.moveTo(0, y);
      ctx.lineTo(mapSizeX, y);
    }
  
    ctx.closePath();
    ctx.stroke();
  
  } 