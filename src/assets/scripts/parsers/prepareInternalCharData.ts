import { ICharState } from '../../../interfaces/charState.interface';
import { deepCopy } from '../utils/deepCopy';
const camelcaseKeys = require('camelcase-keys');


export const prepareInternalCharData = (charData: ICharState) => {
  const dataCopy = deepCopy(charData);
  dataCopy.internalId = dataCopy._id;
  delete dataCopy._id;

  const internalData = camelcaseKeys(dataCopy, {deep: true});
  return internalData;
};
