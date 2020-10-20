export const makeImage = (blob: any): HTMLImageElement => {
  const image = new Image();
  image.src = blob;

  return image;
};
