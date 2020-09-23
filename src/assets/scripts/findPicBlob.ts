import { store } from '../../index';
import { IStore } from '../../interfaces/store.interface';


export const findPicBlob = (picId: string): string | null => {
  const transformedPicId: string = picId.replace('picId=', '');
  const storeData: IStore = store.getState();
  const mapItems = storeData.map.images;

  for (const picItem of mapItems) {
    if (picItem.id === transformedPicId) return picItem.blob;
  }

  return null;
};