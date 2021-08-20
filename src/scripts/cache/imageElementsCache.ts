import { ICachedImageElement } from '../../interfaces/images.interface';
import { log } from '../utils/log';

const imageElementsCache: ICachedImageElement[] = [];

export const findCachedImage = (id: string) => {
  log('LOOKING_FOR_IMAGE_ELEMENTS_CACHE', { id });
  return imageElementsCache.filter(imageData => imageData.id === id);
};

export const pushToCache = (element: ICachedImageElement) => {
  log('PUSH_IMAGE_ELEMENTS_CACHE', { element });
  imageElementsCache.push(element);
};