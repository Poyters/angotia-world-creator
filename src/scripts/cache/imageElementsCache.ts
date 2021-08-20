import { ICachedImageElement } from '../../interfaces/images.interface';
const imageElementsCache: ICachedImageElement[] = [];

export const findCachedImage = (id: string) => {
  return imageElementsCache.filter(imageData => imageData.id === id);
};

export const pushToCache = (element: ICachedImageElement) => {
  imageElementsCache.push(element);
};