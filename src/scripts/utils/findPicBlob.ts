import { IInternalImageData } from '../../interfaces/images.interface';
import { MapPicData } from '../../models/mapPicData.model';
import { log } from '../utils/log';


// picId should be in format <MapPicData.suffix>pic_id or pic_id
export const findPicBlob = (picId: string, internalImages: IInternalImageData[]) => {
  log("FIND_PIC_BLOB", { picId, internalImagesQuantity: internalImages?.length ?? 0 });
  const transformedPicId = picId.replace(MapPicData.suffix, '');

  for (const picItem of internalImages) {
    if (picItem.id === transformedPicId) return picItem.blob;
  }

  return null;
};