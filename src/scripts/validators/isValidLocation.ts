import { IVertexWeight } from "../../interfaces/vertex.interface";
import { IPassageLocation } from "../../interfaces/passage.interface";
import { IMapSize } from "../../interfaces/map.interface";
import mapConfig from "../../assets/configs/map.config.json";
import { log } from "../utils/log";

export const isValidLocation = (
  location: IPassageLocation | IVertexWeight,
  mapSize: IMapSize
): boolean => {
  let result = true;

  if (
    location.x > mapSize.x - 1 ||
    location.y > mapSize.y - 1 ||
    (location.xShift !== 1 && location.xShift !== 0) ||
    (location.yShift !== 1 && location.yShift !== 0) ||
    !mapSize ||
    !mapSize.x ||
    !mapSize.y ||
    mapSize.x < mapConfig.map.minSize ||
    mapSize.y < mapConfig.map.minSize ||
    mapSize.x > mapConfig.map.maxSize ||
    mapSize.y > mapConfig.map.maxSize
  )
    result = false;

  log("IS_LOCATION_VALID", { result });

  return result;
};
