import { IInternalImageData } from '../../interfaces/images.interface';
import { MapPicData } from '../../models/mapPicData.model';


// picId should be in format <MapPicData.suffix>pic_id or pic_id
export const findPicBlob = (picId: string, internalImages: IInternalImageData[]): string | null => {
  const transformedPicId: string = picId.replace(MapPicData.suffix, '');

  for (const picItem of internalImages) {
    if (picItem.id === transformedPicId) return picItem.blob;
  }

  return null;
};