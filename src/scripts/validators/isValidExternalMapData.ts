import creatorConfig from '../../assets/configs/creator.config.json';


export const isValidExternalMapData = (data: any): boolean => {
  if (
    !data ||
    Array.isArray(data) ||
    (
      Object.keys(data).length === 0 && data.constructor === Object
    ) ||
    !data?.description ||
    !data?._id ||
    !data?.map_name ||
    !data?.min_entry_level === undefined ||
    parseInt(data?.min_entry_level) < 0 ||
    !data?.map_pic ||
    !data?.visibility_range ||
    (
      !data?.size ||
      !data?.size?.x ||
      !data?.size?.y ||
      data?.size?.x < creatorConfig.map.minSize ||
      data?.size?.x > creatorConfig.map.maxSize ||
      data?.size?.y < creatorConfig.map.minSize ||
      data?.size?.y > creatorConfig.map.maxSize
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
  ) return false;

  return true;
};
