import mapConfig from '../../assets/configs/map.config.json';

export const drawImage = (
  image: HTMLImageElement, 
  ctx: CanvasRenderingContext2D,
  drawStartX: number,
  drawStartY: number,
  indexOfFieldCell?: number,
  passedFieldSize?: number
) => {
  const fieldSize = passedFieldSize || mapConfig.map.fieldSize;

  if (
    image.width <= (fieldSize / 2) &&
    image.height <= (fieldSize / 2)
  ) {
    ctx.drawImage(image, drawStartX, drawStartY);
  } else if (indexOfFieldCell === 0) {
    ctx.drawImage(image, drawStartX, drawStartY);
  }
};