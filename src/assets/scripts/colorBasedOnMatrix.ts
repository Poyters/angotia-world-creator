//Import configs
import creatorConfig from '../configs/creatorConfig.json';


export const colorBasedOnMatrix = (matrix: any[], canvasId: string, color, specialView?: string): void => {
    const copyOfmatrix: Array<any> = [...matrix];
    const fieldSize: number = creatorConfig.map.fieldSize;
    const canvas: any = document.getElementById(canvasId);
    const ctx: any = canvas.getContext("2d");
  
    copyOfmatrix.map((yAxis: Array<number>, y:number) => {
      yAxis.map((field: number, x: number) => {
        const squareMatrix: Array<number> = [
          field[0][0],
          field[0][1],
          field[1][0],
          field[1][1]
        ];
  
        squareMatrix.map((square: number, index: number) => {
          if (square === 1) {
            const xDelta: number = index === 1 || index === 3 ?  25 : 0;
            const yDelta: number = index === 2 || index === 3 ? 25 : 0;

            switch(specialView) {
              case 'barrier':
                drawCross(ctx, x*fieldSize + xDelta, y*fieldSize + yDelta);
              break;
              default:
                ctx.fillStyle = color;
                ctx.fillRect(x*fieldSize + xDelta, y*fieldSize + yDelta, fieldSize / 2 , fieldSize / 2);
                ctx.closePath();
                ctx.stroke();
              break;
            }
          }
        });
  
      })
    })
  }


  const drawCross = (ctx: any, x: number, y: number): void => {
    ctx.setLineDash([]);
    ctx.strokeStyle = creatorConfig.blockSquareColor;

    ctx.beginPath();

    ctx.moveTo(x, y);
    ctx.lineTo(x + 25, y + 25);

    ctx.moveTo(x, y + 25);
    ctx.lineTo(x + 25, y);
    ctx.stroke();
}