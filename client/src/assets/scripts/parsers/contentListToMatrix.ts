import { IContentList } from '../../interfaces/contentList';
import { IMapSize } from '../../interfaces/map';
import { generateEmptyMapMatrix } from '../map';


export const contentListToMatrix = (
  contentList: IContentList, matrixSize: IMapSize
): any[] => {
  const emptyMatrix = generateEmptyMapMatrix(matrixSize);

  for (const contentItem of contentList.items) {
    // eslint-disable-next-line max-len
    emptyMatrix[contentItem.y][contentItem.x][contentItem.yShift][contentItem.xShift] = contentItem.value;
  }

  return emptyMatrix;
};
