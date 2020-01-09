//Import configs
import creatorConfig from '../configs/creatorConfig.json';

//Import scripts
import { deepCopy } from './utils/deepCopy';
import { drawCross, drawTriangle } from './draw/drawShape';
import { makeImage } from './draw/makeImage';


const fieldSize: number = creatorConfig.map.fieldSize;
const squareSize: number = creatorConfig.map.fieldSize / 2;

export const colorBasedOnMatrix = (
  matrix: Array<[]>, 
  canvasId: string, 
  color: string, 
  specialView?: string
): void => {
    const copyOfmatrix: Array<[]> = deepCopy(matrix);
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
          if (square !== 0 && square) {
            const xDelta: number = index === 1 || index === 3 ?  squareSize : 0;
            const yDelta: number = index === 2 || index === 3 ? squareSize : 0;
            const drawStartX = x*fieldSize + xDelta;
            const drawStartY = y*fieldSize + yDelta;

            switch(specialView) {
              case 'barrier':
                drawCross(ctx, x*fieldSize + xDelta, y*fieldSize + yDelta);
              break;
              case 'vertexWeight':
                const vertexWeightColor: string = creatorConfig.vertexWeight.color;
                
                drawTriangle(ctx, drawStartX, drawStartY, vertexWeightColor);
                ctx.fillStyle = '#fff';
                ctx.fillText(square, drawStartX + 10, drawStartY + 18);
              break;
              case 'image':
                const image = makeImage(square); //square is path to image

                if (
                  image.width <= (fieldSize / 2) && 
                  image.height <= (fieldSize / 2)
                ) { //square size
                  ctx.drawImage(image, drawStartX, drawStartY);
                }
                else { //field size
                  if (index === 0) {
                    ctx.drawImage(image, drawStartX, drawStartY);
                  }
                }
              break;
              default:
                ctx.fillStyle = color;
                ctx.fillRect(
                  x*fieldSize + xDelta, 
                  y*fieldSize + yDelta, 
                  fieldSize / 2 , 
                  fieldSize / 2
                );
                ctx.closePath();
                ctx.stroke();
              break;
            }
          }
        });
  
      });
    });
  };