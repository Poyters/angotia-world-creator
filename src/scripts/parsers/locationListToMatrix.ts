import { IPassageLocation } from '../../interfaces/passage.interface';
import { IMapSize } from '../../interfaces/map.interface';
import { generateEmptyMapMatrix } from '../map';
import { IVertexWeight } from '../../interfaces/vertex.interface';
import { isValidLocation } from '../validators/isValidLocation';


export const locationListToMatrix = (
  locationsList: IPassageLocation[] | IVertexWeight[], matrixSize: IMapSize
): any[] | null => {
  if (!locationsList) return null;
  const emptyMatrix = generateEmptyMapMatrix(matrixSize);

  if (locationsList.length === 0 || !Array.isArray(locationsList)) {
    return emptyMatrix;
  }

  for (const location of locationsList) {
    if (!isValidLocation(location, matrixSize)) return null;
    // eslint-disable-next-line max-len
    emptyMatrix[location.y][location.x][location.yShift][location.xShift] = 1;   
  }

  return emptyMatrix;
};
