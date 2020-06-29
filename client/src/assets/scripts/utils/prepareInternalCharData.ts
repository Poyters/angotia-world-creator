import { CharState } from '../../types/charState';
import { deepCopy } from './deepCopy';
const camelcaseKeys = require('camelcase-keys');


export const prepareInternalCharData = (charData: CharState) => {
  return camelcaseKeys(deepCopy(charData), {deep: true});
};
