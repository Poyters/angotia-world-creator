import { IContentList, IContentPic } from '../../interfaces/contentList.interface';
import { IMapSize } from '../../interfaces/map.interface';
import { generateEmptyMatrix } from '../matrix/generateEmptyMatrix';
import { addInternalImagesData } from '../utils/addInternalImagesData';
import { MapPicData } from '../../models/mapPicData.model';
import { log } from '../utils/log';


export const contentListToMatrix = (
  contentList: IContentList, matrixSize: IMapSize
): any[] | null => {
  if (!contentList) return null;

  log('PARSING_CONTENT_LIST_TO_MATRIX');

  const emptyMatrix = generateEmptyMatrix(matrixSize);

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

  log('PARSED_CONTENT_LIST_TO_MATRIX');

  return emptyMatrix;
};

const addBlobToInternalImages = (
  picId: string, contentPics: IContentPic[]
) => {
  const blob = findExternalBlob(picId, contentPics);

  if (blob) addInternalImagesData(blob);
};

const findExternalBlob = (
  picId: string, contentPics: IContentPic[]
) => {
  for (const picItem of contentPics) {
    if (picItem.id === picId) return picItem.blob;
  }

  return null;
};