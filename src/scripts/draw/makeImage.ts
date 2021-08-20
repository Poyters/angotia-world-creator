import { log } from '../utils/log';

export const makeImage = (blob: string): HTMLImageElement => {
  log('MAKING_AN_IMAGE');
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
  log('CREATING_AN_IMAGE_SAFELY');

  try {
    const image = await makeImagePromise(blob);
    log('CREATED_SAFE_IMAGE');

    return image as HTMLImageElement;
  } catch (error) {
    log('CREATING_AN_IMAGE_SAFELY_ERROR');

    return null;
  }
};
