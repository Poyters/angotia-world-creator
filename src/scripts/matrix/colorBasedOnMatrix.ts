import mapConfig from '../../assets/configs/map.config.json';
import { deepCopy } from '../utils/deepCopy';
import { drawCross, drawTriangle } from '../draw/drawShape';
import { makeImage } from '../draw/makeImage';
import passagePicPath from '../../assets/images/passage.png';
import { findPicBlob } from '../utils/findPicBlob';
import { IStore } from '../../interfaces/store.interface';
import { store } from '../../index';
import { MatrixFillColor } from '../../models/matrixFillColor.model';
import { log } from '../utils/log';
import { drawImage } from '../draw/drawImage';
import { findCachedImage, pushToCache } from '../cache/imageElementsCache';

const fieldSize = mapConfig.map.fieldSize;
const squareSize = mapConfig.map.fieldSize / 2;

export const colorBasedOnMatrix = (
  matrix: Array<[]>,
  canvasId: string,
  color: string,
  specialView?: string
) => {
  log('COLOR_BASED_ON_MATRIX_START', { canvasId });

  const copyOfmatrix: Array<[]> = deepCopy(matrix);
  const canvas: any = document.getElementById(canvasId);
  const ctx = canvas?.getContext('2d');
  const storeData = store.getState() as IStore;
  const internalImages = storeData.map.images;

  copyOfmatrix.forEach((yAxis: Array<number>, y: number) => {
    yAxis.forEach((field: number, x: number) => {
      const squareMatrix: Array<number> = [
        field[0][0],
        field[0][1],
        field[1][0],
        field[1][1]
      ];

      squareMatrix.forEach((square: string | number, index: number) => {
        if (square !== 0 && square) {
          const xDelta = index === 1 || index === 3 ? squareSize : 0;
          const yDelta = index === 2 || index === 3 ? squareSize : 0;
          const drawStartX = x * fieldSize + xDelta;
          const drawStartY = y * fieldSize + yDelta;

          switch (specialView) {
            case MatrixFillColor.barrier:
              drawCross(ctx, x * fieldSize + xDelta, y * fieldSize + yDelta);
              break;
            case MatrixFillColor.vertexWeight:
              const vertexWeightColor = mapConfig.vertexWeight.color;

              drawTriangle(ctx, drawStartX, drawStartY, vertexWeightColor);
              ctx.fillStyle = '#fff';
              ctx.fillText(square, drawStartX + 10, drawStartY + 18);
              break;
            case MatrixFillColor.image:
              let image: HTMLImageElement;
              const foundImage = findCachedImage(square.toString());
              
              // Images are unique, we found max one image
              if (foundImage.length === 1) {
                log('GETTING_IMAGE_CACHE_COLORING_MATRIX');
                image = foundImage[0].object;
              } else {
                // square is path to image
                image = makeImage(findPicBlob(square.toString(), internalImages) || ''); 
                image.onload = () => {
                  pushToCache({
                    id: square.toString(),
                    object: image
                  });
                }; 
              }

              if (image.complete) {
                drawImage(image, ctx, drawStartX, drawStartY, index);
              } else {
                image.onload = () => {
                  drawImage(image, ctx, drawStartX, drawStartY, index);
                };
              }
              break;
            case MatrixFillColor.passage:
              let passagePic: HTMLImageElement;
              const foundPassage = findCachedImage(MatrixFillColor.passage);
              
              // Images are unique, we found max one image
              if (foundPassage.length === 1) {
                log('GETTING_IMAGE_CACHE_COLORING_MATRIX');
                passagePic = foundPassage[0].object;
              } else {
                passagePic = makeImage(passagePicPath); // square is path to image
                passagePic.onload = () => {
                  pushToCache({
                    id: MatrixFillColor.passage,
                    object: passagePic
                  });
                }; 
              }

              if (passagePic.complete) {
                ctx.drawImage(passagePic, drawStartX, drawStartY);
              } else {
                passagePic.onload = () => {
                  ctx.drawImage(passagePic, drawStartX, drawStartY);
                };
              }
              break;
            default:
              ctx.fillStyle = color;
              ctx.fillRect(
                x * fieldSize + xDelta,
                y * fieldSize + yDelta,
                fieldSize / 2,
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

  log('COLOR_BASED_ON_MATRIX_END', { canvasId });
};