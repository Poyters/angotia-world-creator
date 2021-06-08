import { store } from '../../index';
import { changeInternalImagesData } from '../../store/actions/mapActions';
import { deepCopy } from './../utils/deepCopy';
import uuid from 'uuid/v4';
import { IStore } from '../../interfaces/store.interface';
import { IInternalImageData } from '../../interfaces/images.interface';
import { MapPicData } from '../../models/mapPicData.model';
import { log } from '../utils/log';


export const addInternalImagesData = (blob: string): string => {
  const storeData: IStore = store.getState();
  const imagesData: IInternalImageData[] = deepCopy(storeData.map.images);
  log('ADD_INTERNAL_IMAGES_DATA', { blobLength: blob?.length, imagesDataQuantity: imagesData?.length ?? 0 });

  for (const imageData of imagesData) {
    if (imageData.blob === blob) {
      return `${MapPicData.suffix}${imageData.id}`;
    }
  }

  log('CREATE_INTERNAL_IMAGE_DATA');
  const newImageInstance: IInternalImageData = {
    id: uuid(),
    blob
  };

  imagesData.push(newImageInstance);
  store.dispatch(changeInternalImagesData(imagesData));

  return `${MapPicData.suffix}${newImageInstance.id}`;
};