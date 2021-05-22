import { ICharState } from '../../interfaces/charState.interface';
import { deepCopy } from '../utils/deepCopy';
import camelcaseKeys from 'camelcase-keys';


export const prepareInternalCharData = (charData: any): ICharState => {
  const dataCopy = deepCopy(charData);
  dataCopy.internalId = dataCopy._id;
  delete dataCopy._id;

  const internalData = camelcaseKeys(dataCopy, {deep: true});

  if (internalData.monologs === null) internalData.monologs = [];
  if (internalData.dialogs === null) internalData.dialogs = [];

  return internalData;
};
