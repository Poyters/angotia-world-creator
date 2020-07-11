import { MapState } from '../../types/mapState';
import { deepCopy } from './deepCopy';
import { camelCaseToUnderscore } from './camelCaseToUnderscore';
import { matrixToContentList } from './matrixToContentList';


export const prepareExternalMapData = (mapData: MapState | any) => {
  let preparedMapData = deepCopy(mapData);

  preparedMapData._id = preparedMapData.internalId;
  delete preparedMapData.internalId;
  delete preparedMapData.id;
  preparedMapData = camelCaseToUnderscore(preparedMapData);

  preparedMapData.block_matrix = matrixToContentList(preparedMapData.block_matrix);

  preparedMapData.passage.content = matrixToContentList(preparedMapData.passage.matrix);
  delete preparedMapData.passage.matrix;

  preparedMapData.building = matrixToContentList(preparedMapData.building.matrix);

  preparedMapData.decoration = matrixToContentList(preparedMapData.decoration.matrix);

  preparedMapData.subsoil = matrixToContentList(preparedMapData.subsoil.matrix);

  preparedMapData.npc = matrixToContentList(preparedMapData.npc.matrix);

  preparedMapData.mob = matrixToContentList(preparedMapData.mob.matrix);

  preparedMapData.se = matrixToContentList(preparedMapData.se.matrix);

  preparedMapData.vertex.content = matrixToContentList(preparedMapData.vertex.matrix);
  delete preparedMapData.vertex.matrix;


  return preparedMapData;
};
