import creatorConfig from '../../configs/creatorConfig.json';


const squareSize: number = creatorConfig.map.fieldSize / 2;


export const drawTriangle = (ctx: any, x: number, y: number, fillColor: string): void => {
    ctx.setLineDash([]);
    ctx.strokeStyle = fillColor;
    ctx.fillStyle = fillColor;
  
    ctx.beginPath();
    ctx.beginPath();
    ctx.moveTo(x + (squareSize/2), y + 4);
    ctx.lineTo(x + squareSize - 4, y + squareSize - 4);
    ctx.lineTo(x + 4, y + squareSize - 4);
    ctx.lineTo(x + (squareSize/2), y + 4);
    
    ctx.fill();
    ctx.stroke();
};


export const drawCross = (ctx: any, x: number, y: number): void => {
    ctx.setLineDash([]);
    ctx.strokeStyle = creatorConfig.blockSquareColor;
  
    ctx.beginPath();
  
    ctx.moveTo(x, y);
    ctx.lineTo(x + squareSize, y + squareSize);
  
    ctx.moveTo(x, y + squareSize);
    ctx.lineTo(x + squareSize, y);
    ctx.stroke();
};