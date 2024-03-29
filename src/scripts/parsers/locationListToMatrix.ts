import { IPassageLocation } from "../../interfaces/passage.interface";
import { IMapSize } from "../../interfaces/map.interface";
import { generateEmptyMatrix } from "../matrix/generateEmptyMatrix";
import { IVertexWeight } from "../../interfaces/vertex.interface";
import { isValidLocation } from "../validators/isValidLocation";
import { log } from "../utils/log";
import { MapMatrix } from "../../interfaces/map.interface";

export const locationListToMatrix = (
  locationsList: IPassageLocation[] | IVertexWeight[],
  matrixSize: IMapSize
): MapMatrix | null => {
  if (!locationsList) return null;

  log("PARSING_LOCATION_LIST_TO_MATRIX");

  const emptyMatrix = generateEmptyMatrix(matrixSize);

  if (locationsList.length === 0 || !Array.isArray(locationsList)) {
    return emptyMatrix;
  }

  for (const location of locationsList) {
    if (!isValidLocation(location, matrixSize)) return null;

    emptyMatrix[location.y][location.x][location.yShift][location.xShift] = 1;
  }

  return emptyMatrix;
};
