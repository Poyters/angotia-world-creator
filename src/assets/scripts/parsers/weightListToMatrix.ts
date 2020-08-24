import { IVertexWeight } from '../../interfaces/vertex';
import { IMapSize } from '../../interfaces/map';
import { generateEmptyMapMatrix } from '../map';


export const weightListToMatrix = (
  weightsList: IVertexWeight[], matrixSize: IMapSize
): any[] | null => {
  if (!weightsList) return null;
  const emptyMatrix = generateEmptyMapMatrix(matrixSize);

  if (weightsList.length === 0) return emptyMatrix;

  for (const weight of weightsList) {
    // eslint-disable-next-line max-len
    emptyMatrix[weight.y][weight.x][weight.yShift][weight.xShift] = 1;   
  }

  return emptyMatrix;
};
