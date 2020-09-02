import { IMapState } from '../../interfaces/mapState.interface';
import { deepCopy } from '../utils/deepCopy';
import { camelCaseToUnderscore } from './camelCaseToUnderscore';
import { matrixToContentList } from './matrixToContentList';


export const prepareExternalMapData = (mapData: IMapState | any) => {
  let preparedMapData = deepCopy(mapData);

  preparedMapData._id = preparedMapData.internalId;
  delete preparedMapData.internalId;
  delete preparedMapData.id;
  delete preparedMapData.passage?.matrix;
  delete preparedMapData.vertex?.matrix;

  preparedMapData = camelCaseToUnderscore(preparedMapData);

  preparedMapData.block_matrix = matrixToContentList(preparedMapData.block_matrix);
  preparedMapData.building = matrixToContentList(preparedMapData.building.matrix);
  preparedMapData.decoration = matrixToContentList(preparedMapData.decoration.matrix);
  preparedMapData.subsoil = matrixToContentList(preparedMapData.subsoil.matrix);
  preparedMapData.npc = matrixToContentList(preparedMapData.npc.matrix);
  preparedMapData.mob = matrixToContentList(preparedMapData.mob.matrix);
  preparedMapData.se = matrixToContentList(preparedMapData.se.matrix);
  
  preparedMapData.passage.locations = preparedMapData.passage.locations.map(location => {
    location._id = location.id;
    delete location.id;

    return location;
  });

  preparedMapData.vertex.weights = preparedMapData.vertex.weights.map(weight => {
    weight._id = weight.id;
    delete weight.id;

    return weight;
  });

  preparedMapData.min_entry_level = parseInt(preparedMapData.min_entry_level);
  
  return preparedMapData;
};
