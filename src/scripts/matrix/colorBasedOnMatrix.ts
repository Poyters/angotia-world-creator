import mapConfig from '../../assets/configs/map.config.json';
import { deepCopy } from '../utils/deepCopy';
import { drawCross, drawTriangle } from '../draw/drawShape';
import { makeImage } from '../draw/makeImage';
import passagePicPath from '../../assets/images/passage.png';
import { findPicBlob } from '../utils/findPicBlob';
import { IInternalImageData } from '../../interfaces/internalImageData.interface';
import { IStore } from '../../interfaces/store.interface';
import { store } from '../../index';
import { MatrixFillColor } from '../../models/matrixFillColor.model';


const fieldSize: number = mapConfig.map.fieldSize;
const squareSize: number = mapConfig.map.fieldSize / 2;

export const colorBasedOnMatrix = async (
  matrix: Array<[]>, 
  canvasId: string, 
  color: string, 
  specialView?: string
): Promise<void> => {
    const copyOfmatrix: Array<[]> = deepCopy(matrix);
    const canvas: any = document.getElementById(canvasId);
    const ctx: any = canvas.getContext("2d");
    const storeData: IStore = store.getState();
    const internalImages: IInternalImageData[] = storeData.map.images;

    await copyOfmatrix.forEach(async (yAxis: Array<number>, y:number) => {
      await yAxis.forEach(async (field: number, x: number) => {
        const squareMatrix: Array<number> = [
          field[0][0],
          field[0][1],
          field[1][0],
          field[1][1]
        ];
  
        await squareMatrix.forEach(async (square: any, index: number) => {
          if (square !== 0 && square) {
            const xDelta: number = index === 1 || index === 3 ?  squareSize : 0;
            const yDelta: number = index === 2 || index === 3 ? squareSize : 0;
            const drawStartX = x*fieldSize + xDelta;
            const drawStartY = y*fieldSize + yDelta;

            switch(specialView) {
              case MatrixFillColor.barrier:
                drawCross(ctx, x*fieldSize + xDelta, y*fieldSize + yDelta);
              break;
              case MatrixFillColor.vertexWeight:
                const vertexWeightColor: string = mapConfig.vertexWeight.color;
                
                drawTriangle(ctx, drawStartX, drawStartY, vertexWeightColor);
                ctx.fillStyle = '#fff';
                ctx.fillText(square, drawStartX + 10, drawStartY + 18);
              break;
              case MatrixFillColor.image:
                const image = await makeImage(findPicBlob(square, internalImages)); //square is path to image

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
              case MatrixFillColor.passage:
                const passagePic = await makeImage(passagePicPath);

                ctx.drawImage(passagePic, drawStartX, drawStartY);
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
