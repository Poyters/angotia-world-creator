import { IPoint } from '../../interfaces/math.interface';


export const combineCanvases = (canvasList: string[], mapSize: IPoint) => {
  const canvases = canvasList.map(canvas => {
    return document.getElementById(canvas) as HTMLCanvasElement;
  });

  const destinationCanvas = document.createElement('canvas');
  destinationCanvas.width = mapSize.x;
  destinationCanvas.height = mapSize.y;

  const destinationContext = destinationCanvas.getContext('2d');

  for (const canvas of canvases) {
    destinationContext?.drawImage(canvas, 0, 0);
  }

  return destinationCanvas.toDataURL();
};