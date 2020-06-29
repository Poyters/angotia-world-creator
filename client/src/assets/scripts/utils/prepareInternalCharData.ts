import { CharState } from '../../types/charState';
import { deepCopy } from './deepCopy';
const camelcaseKeys = require('camelcase-keys');


export const prepareInternalCharData = (charData: CharState) => {
  console.log('before', charData);
  const internalData = camelcaseKeys(deepCopy(charData), {deep: true});
  console.log('prepareinternalData', internalData);
  return internalData;
};
