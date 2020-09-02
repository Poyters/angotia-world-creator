import { IPassageLocation } from '../../../interfaces/passage.interface';
import { IMapSize } from '../../../interfaces/map.interface';
import { generateEmptyMapMatrix } from '../map';


export const locationListToMatrix = (
  locationsList: IPassageLocation[], matrixSize: IMapSize
): any[] | null => {
  if (!locationsList) return null;
  const emptyMatrix = generateEmptyMapMatrix(matrixSize);

  if (locationsList.length === 0) return emptyMatrix;

  for (const location of locationsList) {
    // eslint-disable-next-line max-len
    emptyMatrix[location.y][location.x][location.yShift][location.xShift] = 1;   
  }

  return emptyMatrix;
};
