import { IContentList, IContentPic } from '../../../interfaces/contentList.interface';
import { IMapSize } from '../../../interfaces/map.interface';
import { generateEmptyMapMatrix } from '../map';
import { addInternalImagesData } from '../addInternalImagesData';
import { MapPicData } from '../../../models/mapPicData.model';


export const contentListToMatrix = (
  contentList: IContentList, matrixSize: IMapSize
): any[] | null => {
  if (!contentList) return null;
  const emptyMatrix = generateEmptyMapMatrix(matrixSize);

  if (contentList.items.length === 0) return emptyMatrix;

  for (const contentItem of contentList.items) {
    if (contentItem.value.toString().includes(MapPicData.suffix)) {
      const picId: string = contentItem.value
        .toString().replace(MapPicData.suffix, '');

      for (const picItem of contentList.pics) {
        if (picItem.id === picId) {
          // eslint-disable-next-line max-len
          emptyMatrix[contentItem.y][contentItem.x][contentItem.yShift][contentItem.xShift] = contentItem.value;
          addBlobToInternalImages(picId, contentList.pics);
          // add blob to images (store)
        }
      }
    } else {
      // eslint-disable-next-line max-len
      emptyMatrix[contentItem.y][contentItem.x][contentItem.yShift][contentItem.xShift] = contentItem.value;
    }
    
  }

  return emptyMatrix;
};

const addBlobToInternalImages = (
  picId: string, contentPics: IContentPic[]
) => {
  const blob: string | null = findExternalBlob(picId, contentPics);

  if (blob) addInternalImagesData(blob);
};

const findExternalBlob = (
  picId: string, contentPics: IContentPic[]
): string | null => {
  for (const picItem of contentPics) {
    if (picItem.id === picId) return picItem.blob;
  }

  return null;
};