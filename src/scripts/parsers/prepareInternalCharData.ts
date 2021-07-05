import { ICharState } from '../../interfaces/charState.interface';
import { deepCopy } from '../utils/deepCopy';
import camelcaseKeys from 'camelcase-keys';
import { log } from '../utils/log';


export const prepareInternalCharData = (externalCharData): ICharState => {
  log('PREPARING_INTERNAL_CHAR_DATA');

  const dataCopy = deepCopy(externalCharData);
  dataCopy.internalId = dataCopy._id;
  delete dataCopy._id;

  const internalData = camelcaseKeys(dataCopy, { deep: true });

  if (internalData.monologs === null) internalData.monologs = [];
  if (internalData.dialogs === null) internalData.dialogs = [];

  return internalData;
};
