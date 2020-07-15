import { MapState } from '../../types/mapState';
import { deepCopy } from '../utils/deepCopy';
import { contentListToMatrix } from './contentListToMatrix';
const camelcaseKeys = require('camelcase-keys');


export const prepareInternalMapData = (mapData: MapState | any) => {
  const dataCopy = deepCopy(mapData);
  dataCopy.internalId = dataCopy._id;
  delete dataCopy._id;

  const internalData = camelcaseKeys(dataCopy, {deep: true});
  const mapSize = internalData.size;
  console.log('inside internal', internalData);

  internalData.blockMatrix = contentListToMatrix(internalData.blockMatrix, mapSize);
  internalData.building.matrix = contentListToMatrix(internalData.building, mapSize);
  internalData.decoration.matrix = contentListToMatrix(internalData.decoration, mapSize);
  internalData.subsoil.matrix = contentListToMatrix(internalData.subsoil, mapSize);
  internalData.npc.matrix = contentListToMatrix(internalData.npc, mapSize);
  internalData.mob.matrix = contentListToMatrix(internalData.mob, mapSize);
  internalData.se.matrix = contentListToMatrix(internalData.se, mapSize);

  delete internalData.building.items;
  delete internalData.building.pics;
  delete internalData.decoration.items;
  delete internalData.decoration.pics;
  delete internalData.subsoil.items;
  delete internalData.subsoil.pics;
  delete internalData.npc.items;
  delete internalData.npc.pics;
  delete internalData.mob.items;
  delete internalData.mob.pics;
  delete internalData.se.items;
  delete internalData.se.pics;

  return internalData;
};
