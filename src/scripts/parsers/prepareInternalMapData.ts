import { IMapState } from '../../interfaces/mapState.interface';
import { deepCopy } from '../utils/deepCopy';
import { contentListToMatrix } from './contentListToMatrix';
import { locationListToMatrix } from './locationListToMatrix';
const camelcaseKeys = require('camelcase-keys');


export const prepareInternalMapData = (mapData: any): IMapState => {
  const dataCopy = deepCopy(mapData);
  dataCopy.internalId = dataCopy._id;
  delete dataCopy._id;

  const internalData = camelcaseKeys(dataCopy, {deep: true});
  const mapSize = internalData.size;

  internalData.blockMatrix = contentListToMatrix(internalData.blockMatrix, mapSize);
  internalData.building.matrix = contentListToMatrix(internalData.building, mapSize);
  internalData.decoration.matrix = contentListToMatrix(internalData.decoration, mapSize);
  internalData.subsoil.matrix = contentListToMatrix(internalData.subsoil, mapSize);
  internalData.npc.matrix = contentListToMatrix(internalData.npc, mapSize);
  internalData.mob.matrix = contentListToMatrix(internalData.mob, mapSize);
  internalData.se.matrix = contentListToMatrix(internalData.se, mapSize);
  internalData.passage.matrix = locationListToMatrix(internalData.passage.locations, mapSize);
  internalData.vertex.matrix = locationListToMatrix(internalData.vertex.weights, mapSize);

  internalData.images = [];
  internalData.images.push(...internalData.building.pics);
  internalData.images.push(...internalData.decoration.pics);
  internalData.images.push(...internalData.subsoil.pics);
  internalData.images.push(...internalData.npc.pics);
  internalData.images.push(...internalData.mob.pics);
  internalData.images.push(...internalData.se.pics);

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

  // console.log('internalData', JSON.stringify(internalData));
  return internalData;
};
