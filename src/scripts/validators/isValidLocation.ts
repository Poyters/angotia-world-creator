import { IVertexWeight } from '../../interfaces/vertex.interface';
import { IPassageLocation } from '../../interfaces/passage.interface';
import { IMapSize } from '../../interfaces/map.interface';
import creatorConfig from '../../assets/configs/creatorConfig.json';


export const isValidLocation = (
  location: IPassageLocation | IVertexWeight, mapSize: IMapSize
): boolean => {
  if (
    location.x > mapSize.x - 1 ||
    location.y > mapSize.y - 1 ||
    (
      location.xShift !== 1 && location.xShift !== 0
    ) ||
    (
      location.yShift !== 1 && location.yShift !== 0
    ) ||
    (
      !mapSize ||
      !mapSize.x ||
      !mapSize.y ||
      mapSize.x < creatorConfig.map.minSize ||
      mapSize.y < creatorConfig.map.minSize ||
      mapSize.x > creatorConfig.map.maxSize ||
      mapSize.y > creatorConfig.map.maxSize
    )
  ) return false;

  return true;
};