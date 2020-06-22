import { CharState } from '../../types/charState';
import { deepCopy } from './deepCopy';
const camelcaseKeys = require('camelcase-keys');


export const prepareInternalCharData = (charData: CharState) => {
  let preparedCharData = deepCopy(charData);

  switch(charData.choosed) {
    case 'npc':
      preparedCharData = camelcaseKeys(preparedCharData, {deep: true});
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
