import creatorConfig from '../../configs/creatorConfig.json';


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
    !data?.min_entry_level ||
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
    )
  ) return false;

  return true;
};
