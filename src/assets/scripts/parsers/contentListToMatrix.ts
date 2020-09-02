import { IContentList } from '../../interfaces/contentList.interface';
import { IMapSize } from '../../interfaces/map.interface';
import { generateEmptyMapMatrix } from '../map';


export const contentListToMatrix = (
  contentList: IContentList, matrixSize: IMapSize
): any[] | null => {
  if (!contentList) return null;
  const emptyMatrix = generateEmptyMapMatrix(matrixSize);

  if (contentList.items.length === 0) return emptyMatrix;

  for (const contentItem of contentList.items) {
    if (contentItem.value.toString().includes('picId')) {
      const picId: string = contentItem.value
        .toString().replace('picId=', '');

      for (const picItem of contentList.pics) {
        if (picItem.id === picId) {
          // eslint-disable-next-line max-len
          emptyMatrix[contentItem.y][contentItem.x][contentItem.yShift][contentItem.xShift] = picItem.blob;
        }
      }
    } else {
      // eslint-disable-next-line max-len
      emptyMatrix[contentItem.y][contentItem.x][contentItem.yShift][contentItem.xShift] = contentItem.value;
    }
    
  }

  return emptyMatrix;
};
