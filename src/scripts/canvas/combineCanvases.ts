export const combineCanvases = (canvasList: string[]) => {
  const canvases = canvasList.map(canvas => {
    return document.getElementById(canvas) as CanvasImageSource;
  });

  const destinationCanvas = document.createElement('canvas');
  const destinationContext = destinationCanvas.getContext('2d');

  for (const canvas of canvases) {
    destinationContext?.drawImage(canvas, 0, 0);
  }

  return destinationCanvas.toDataURL();
};