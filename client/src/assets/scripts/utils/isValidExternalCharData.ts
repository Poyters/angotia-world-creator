export const isValidExternalCharData = (data: any): boolean => {
  if (
    Array.isArray(data) ||
    !data?.name ||
    !data?.type || 
    (
      !data?.choosed ||
      (
        data?.choosed !== 'npc' &&
        data?.choosed !== 'mob' &&
        data?.choosed !== 'se'
      )
    ) ||
    !data?._id || 
    (
      data?.field_diameter === null ||
      data?.field_diameter === undefined
    ) ||
    (
      data?.move_type === null ||
      data?.move_type === undefined
    ) ||
    (
      data?.mob_range === null ||
      data?.mob_range === undefined
    ) ||
    (
      data?.is_agressive_mob === null ||
      data?.is_agressive_mob === undefined
    ) ||
    (
      data?.has_visible_level === null ||
      data?.has_visible_level === undefined
    ) ||
    (
      data?.char_pic === null ||
      data?.char_pic === undefined
    ) ||
    !Array.isArray(data?.monologs) ||
    !Array.isArray(data?.dialogs) ||
    (
      !data?.statistics ||
      data?.statistics?.level < 1 ||
      data?.statistics?.health < 1 ||
      data?.statistics?.attack < 0 ||
      data?.statistics?.defence < 0 ||
      data?.statistics?.strength < 0 ||
      data?.statistics?.dexterity < 0 ||
      data?.statistics?.inteligence < 0 ||
      data?.statistics?.jink < 0 ||
      data?.statistics?.speed < 0 ||
      data?.statistics?.attack_range < 0 ||
      data?.statistics?.attack_speed < 0 ||
      data?.statistics?.level === undefined ||
      data?.statistics?.health === undefined ||
      data?.statistics?.attack === undefined ||
      data?.statistics?.defence === undefined ||
      data?.statistics?.strength === undefined ||
      data?.statistics?.dexterity === undefined ||
      data?.statistics?.inteligence === undefined ||
      data?.statistics?.jink === undefined ||
      data?.statistics?.speed === undefined ||
      data?.statistics?.attack_range === undefined ||
      data?.statistics?.attack_speed === undefined
    ) ||
    (
      !data?.settings ||
      !data?.settings?.time_of_occurance ||
      data?.settings?.time_of_occurance?.min < 0 ||
      data?.settings?.time_of_occurance?.min > 24 ||
      !data?.settings?.resp_time ||
      data?.settings?.resp_time?.min < 0 ||
      data?.settings?.resp_time?.max > 999999
    ) ||
    data?.id ||
    data?.fieldDiameter ||
    data?.moveType ||
    data?.charPic ||
    data?.hasVisibleLevel ||
    data?.isAgressiveMob ||
    data?.internalId ||
    data?.mobRange
  ) return false;

  return true;
};