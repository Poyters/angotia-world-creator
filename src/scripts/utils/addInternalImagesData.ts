import { store } from '../../index';
import { changeInternalImagesData } from '../../store/actions/mapActions';
import { deepCopy } from './../utils/deepCopy';
import uuid from 'uuid/v4';
import { IStore } from '../../interfaces/store.interface';
import { IInternalImageData } from '../../interfaces/images.interface';
import { MapPicData } from '../../models/mapPicData.model';


export const addInternalImagesData = (blob: string): string => {
  const storeData: IStore = store.getState();
  const imagesData: IInternalImageData[] = deepCopy(storeData.map.images);

  for (const imageData of imagesData) {
    if (imageData.blob === blob) {
      return `${MapPicData.suffix}${imageData.id}`;
    }
  }

  const newImageInstance: IInternalImageData = {
    id: uuid(),
    blob
  };

  imagesData.push(newImageInstance);
  store.dispatch(changeInternalImagesData(imagesData));

  return `${MapPicData.suffix}${newImageInstance.id}`;
};