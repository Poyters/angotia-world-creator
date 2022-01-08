import { IMapState } from "../../interfaces/mapState.interface";
import { deepCopy } from "../utils/deepCopy";
import { camelCaseToUnderscore } from "./camelCaseToUnderscore";
import { matrixToContentList } from "./matrixToContentList";
import { getUserId } from "../user/getUserId";
import { createMapBlob } from "../map/createMapBlob";
import { log } from "../utils/log";
import { IExternalMap } from "../../interfaces/map.interface";

export const prepareExternalMapData = async (
  mapData: IMapState,
  globalBlob?: string
): Promise<IExternalMap> => {
  log("PREPARING_EXTERNAL_MAP_DATA");

  const userId = getUserId() ?? "";
  let preparedMapData = deepCopy(mapData);

  preparedMapData._id = preparedMapData.internalId;
  delete preparedMapData.internalId;
  delete preparedMapData.passage?.matrix;
  delete preparedMapData.vertex?.matrix;
  preparedMapData.combinedLayersBlob = globalBlob || (await createMapBlob());

  preparedMapData = camelCaseToUnderscore(preparedMapData);

  preparedMapData.block_matrix = matrixToContentList(
    preparedMapData.block_matrix,
    preparedMapData.images
  );
  preparedMapData.building = matrixToContentList(
    preparedMapData.building.matrix,
    preparedMapData.images
  );
  preparedMapData.decoration = matrixToContentList(
    preparedMapData.decoration.matrix,
    preparedMapData.images
  );
  preparedMapData.terrain = matrixToContentList(
    preparedMapData.terrain.matrix,
    preparedMapData.images
  );
  preparedMapData.npc = matrixToContentList(
    preparedMapData.npc.matrix,
    preparedMapData.images
  );
  preparedMapData.mob = matrixToContentList(
    preparedMapData.mob.matrix,
    preparedMapData.images
  );
  preparedMapData.se = matrixToContentList(
    preparedMapData.se.matrix,
    preparedMapData.images
  );

  preparedMapData.passage.locations = preparedMapData.passage.locations.map(
    location => {
      location._id = location.id;
      delete location.id;

      return location;
    }
  );

  preparedMapData.vertex.weights = preparedMapData.vertex.weights.map(
    weight => {
      weight._id = weight.id;
      delete weight.id;

      return weight;
    }
  );

  delete preparedMapData.images;
  preparedMapData.min_entry_level = parseInt(preparedMapData.min_entry_level);

  preparedMapData.author = userId;

  return preparedMapData;
};
