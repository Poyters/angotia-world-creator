export const makeImage = async (blob: any): Promise<any> => {
  const image = new Image();
  image.src = blob;

  return image;
};
