import { IInternalImageData } from '../../interfaces/internalImageData.interface';
import { MapPicData } from '../../models/mapPicData.model';


export const findPicBlob = (picId: string, internalImages: IInternalImageData[]): string | null => {
  const transformedPicId: string = picId.replace(MapPicData.suffix, '');

  for (const picItem of internalImages) {
    if (picItem.id === transformedPicId) return picItem.blob;
  }

  return null;
};