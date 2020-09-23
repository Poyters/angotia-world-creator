import { store } from '../../index';
import { changeInternalImagesData } from '../../store/actions/mapActions';
import { deepCopy } from './utils/deepCopy';
import uuid from 'uuid/v4';
import { IStore } from '../../interfaces/store.interface';


export const addInternalImagesData = (blob: string): string => {
  const storeData: IStore = store.getState();
  const imagesData = deepCopy(storeData.map.images);

  const newImageInstance = {
    id: uuid(),
    blob
  };

  imagesData.push(newImageInstance);
  store.dispatch(changeInternalImagesData(imagesData));

  return `picId=${newImageInstance.id}`;
};