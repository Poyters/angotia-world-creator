import mapConfig from '../../assets/configs/map.config.json';
import { log } from '../utils/log';


export const isValidExternalMapData = (data): boolean => {
  let result = true;

  if (
    !data ||
    Array.isArray(data) ||
    (
      Object.keys(data).length === 0 && data.constructor === Object
    ) ||
    !data?._id ||
    !data?.map_name ||
    !data?.min_entry_level === undefined ||
    parseInt(data?.min_entry_level) < 0 ||
    !data?.visibility_range ||
    (
      !data?.size ||
      !data?.size?.x ||
      !data?.size?.y ||
      data?.size?.x < mapConfig.map.minSize ||
      data?.size?.x > mapConfig.map.maxSize ||
      data?.size?.y < mapConfig.map.minSize ||
      data?.size?.y > mapConfig.map.maxSize
    ) ||
    data?.block_matrix === null ||
    data.passage === null ||
    data.building === null ||
    data.decoration === null ||
    data.subsoil === null ||
    data.npc === null ||
    data.mob === null ||
    data.se === null ||
    data.vertex === null
  ) result = false;

  log('IS_VALID_EXTERNAL_MAP_DATA', { result });

  return result;
};
