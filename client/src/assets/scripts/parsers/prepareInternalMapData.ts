import { MapState } from '../../types/mapState';
import { deepCopy } from '../utils/deepCopy';
const camelcaseKeys = require('camelcase-keys');


export const prepareInternalMapData = (mapData: MapState | any) => {
  const dataCopy = deepCopy(mapData);
  dataCopy.internalId = dataCopy._id;
  delete dataCopy._id;

  const internalData = camelcaseKeys(dataCopy, {deep: true});
  return internalData;
};
