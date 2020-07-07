import creatorConfig from '../../configs/creatorConfig.json';


export const isValidExternalMapData = (data: any): boolean => {
  if (
    !data ||
    data.id ||
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
    !Array.isArray(data?.block_matrix) ||
    (
      !data.passage ||
      !data.passage.locations ||
      !Array.isArray(data.passage.locations) ||
      !data.passage.matrix ||
      !Array.isArray(data.passage.matrix)
    ) ||
    (
      !data.building ||
      !data.building.matrix ||
      !Array.isArray(data.building.matrix)
    )
  ) return false;

  return true;
};
