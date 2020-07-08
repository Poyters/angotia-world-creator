import { MapState } from '../../types/mapState';
import { deepCopy } from './deepCopy';
import { camelCaseToUnderscore } from './camelCaseToUnderscore';


export const prepareExternalMapData = (mapData: MapState | any) => {
  let preparedMapData = deepCopy(mapData);

  preparedMapData._id = preparedMapData.internalId;
  delete preparedMapData.internalId;
  delete preparedMapData.id;
  preparedMapData = camelCaseToUnderscore(preparedMapData);

  return preparedMapData;
};
