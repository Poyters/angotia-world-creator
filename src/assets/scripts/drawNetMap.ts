import creatorConfig from '../configs/creatorConfig.json';


export const drawFields = (ctx, mapSize) => {
    const fieldSize: number = creatorConfig.map.fieldSize
    const mapSizeX: number = mapSize.x*fieldSize;
    const mapSizeY: number = mapSize.y*fieldSize;
  
    ctx.beginPath();
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
    const fieldSize: number = creatorConfig.map.fieldSize
    const mapSizeX: number = mapSize.x*fieldSize;
    const mapSizeY: number = mapSize.y*fieldSize;
  
    ctx.beginPath();
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