import { CharState } from '../../types/charState';
import { deepCopy } from './deepCopy';
const camelcaseKeys = require('camelcase-keys');


export const prepareInternalCharData = (charData: CharState) => {
  const dataCopy = deepCopy(charData);
  dataCopy.internalId = dataCopy._id;
  delete dataCopy._id;
  console.log('before', charData);

  const internalData = camelcaseKeys(dataCopy, {deep: true});
  console.log('prepareinternalData', internalData);
  return internalData;
};
