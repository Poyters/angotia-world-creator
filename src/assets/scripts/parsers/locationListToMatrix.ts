import { IPassageLocation } from '../../../interfaces/passage.interface';
import { IMapSize } from '../../../interfaces/map.interface';
import { generateEmptyMapMatrix } from '../map';


export const locationListToMatrix = (
  locationsList: IPassageLocation[], matrixSize: IMapSize
): any[] | null => {
  if (!locationsList) return null;
  const emptyMatrix = generateEmptyMapMatrix(matrixSize);

  if (locationsList.length === 0 || !Array.isArray(locationsList)) {
    return emptyMatrix;
  }

  for (const location of locationsList) {
    if (!isLocationValid(location, matrixSize)) return null;
    // eslint-disable-next-line max-len
    emptyMatrix[location.y][location.x][location.yShift][location.xShift] = 1;   
  }

  return emptyMatrix;
};

const isLocationValid = (location: IPassageLocation, mapSize: IMapSize): boolean => {
  if (
    location.x > mapSize.x - 1 ||
    location.y > mapSize.y - 1 ||
    (
      location.xShift !== 1 && location.xShift !== 0
    ) ||
    (
      location.yShift !== 1 && location.yShift !== 0
    )
  ) return false;

  return true;
};
