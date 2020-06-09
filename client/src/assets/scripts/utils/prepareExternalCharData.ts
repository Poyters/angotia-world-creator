import { CharState } from '../../types/charState';
import { deepCopy } from './deepCopy';
import { camelCaseKeysToUnderscore } from './camelCaseKeysToUnderscore';

export const prepareExternalCharData = (charData: CharState) => {
  let preparedCharData = deepCopy(charData);

  switch(charData.choosed) {
    case 'npc':
      delete preparedCharData.isAgressiveMob;
      delete preparedCharData.temponaryPlayerDialogs;
      delete preparedCharData.mobRange;
      delete preparedCharData.statistics.attackSpeed;
      delete preparedCharData.statistics.attackRange;
      delete preparedCharData.settings.respTime;
      preparedCharData = camelCaseKeysToUnderscore(preparedCharData);
      preparedCharData._id = preparedCharData.id;
      delete preparedCharData.id;

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

        newDialog.player = newDialog.player?.map(player => {
          const newPlayer = deepCopy(player);
          newPlayer._id = newPlayer.id;
          delete newPlayer.id;

          return newPlayer;
        });
        return newDialog;
      });
    break;
    case 'mob':
      delete preparedCharData.temponaryPlayerDialogs;
    break;
    case 'se':
      delete preparedCharData.temponaryPlayerDialogs;
    break;
  }

  return preparedCharData;
};
