export const makeImage = (blob: string): HTMLImageElement => {
  const image = new Image();
  image.src = blob;

  return image;
};

const makeImagePromise = (blob: string) =>
  new Promise((resolve, reject) => {
    const img = makeImage(blob);
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = blob;
  });

export const createAnImageSafely = async (blob: string) => {
  try {
    const image = await makeImagePromise(blob);
    return image as HTMLImageElement;
  } catch (error) {
    console.error('Cannot make image', error);
    return null;
  }
};
