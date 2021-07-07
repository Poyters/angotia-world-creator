import { CharType } from '../../models/charType.model';
import { log } from '../utils/log';


export const isValidExternalCharData = (data): boolean => {
  let result = true;

  if (
    Array.isArray(data) ||
    !data?.name ||
    !data?.type || 
    (
      Object.keys(data).length === 0 && data.constructor === Object
    ) ||
    (
      !data?.choosed ||
      (
        data?.choosed !== CharType.npc &&
        data?.choosed !== CharType.mob &&
        data?.choosed !== CharType.se
      )
    ) ||
    !data?._id || 
    (
      data?.field_diameter === null ||
      data?.field_diameter === undefined
    ) ||
    (
      data?.is_mob_aggressive === null ||
      data?.is_mob_aggressive === undefined
    ) ||
    (
      data?.has_visible_level === null ||
      data?.has_visible_level === undefined
    ) ||
    (
      data?.char_pic === null ||
      data?.char_pic === undefined
    ) ||
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
    )
  ) result = false;

  log('IS_VALID_EXTERNAL_CHAR_DATA', { result });

  return result;
};