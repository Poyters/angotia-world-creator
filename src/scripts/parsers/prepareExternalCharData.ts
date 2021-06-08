import { ICharState } from '../../interfaces/charState.interface';
import { deepCopy } from '../utils/deepCopy';
import { camelCaseToUnderscore } from './camelCaseToUnderscore';
import { getUserId } from '../user/getUserId';
import { log } from '../utils/log';


export const prepareExternalCharData = (charData: ICharState) => {
  log('PREPARING_EXTERNAL_CHAR_DATA');

  const userId = getUserId() ?? '';
  let preparedCharData = deepCopy(charData);

  delete preparedCharData.temponaryPlayerDialogs;
  preparedCharData._id = preparedCharData.internalId;
  delete preparedCharData.internalId;
  preparedCharData = camelCaseToUnderscore(preparedCharData);
  delete preparedCharData.id;
  preparedCharData.field_diameter = parseInt(preparedCharData.field_diameter);
  Object.keys( preparedCharData.statistics).forEach(key => { 
    preparedCharData.statistics[key] = parseInt(preparedCharData.statistics[key]);
  });

  preparedCharData.monologs = preparedCharData.monologs?.map(monolog => {
    const newMonolog = deepCopy(monolog);
    newMonolog._id = newMonolog.id;
    delete newMonolog.id;
    return newMonolog;
  });

  preparedCharData.dialogs = preparedCharData.dialogs?.map(dialog => {
    const newDialog = deepCopy(dialog);
    newDialog._id = newDialog.id;
    delete newDialog.id;
    delete newDialog.connected_dialogs;

    newDialog.player = newDialog.player?.map(player => {
      const newPlayer = deepCopy(player);
      newPlayer._id = newPlayer.id;
      delete newPlayer.id;

      return newPlayer;
    });
    return newDialog;
  });

  preparedCharData.author = userId;

  return preparedCharData;
};
