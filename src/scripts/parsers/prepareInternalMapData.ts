import { IMapState } from "../../interfaces/mapState.interface";
import { deepCopy } from "../utils/deepCopy";
import { contentListToMatrix } from "./contentListToMatrix";
import { locationListToMatrix } from "./locationListToMatrix";
import camelcaseKeys from "camelcase-keys";
import { log } from "../utils/log";

export const prepareInternalMapData = (externalMapData): IMapState => {
  log("PREPARING_INTERNAL_MAP_DATA");

  const dataCopy = deepCopy(externalMapData);
  dataCopy.internalId = dataCopy._id;
  delete dataCopy._id;

  const internalData = camelcaseKeys(dataCopy, { deep: true });
  const mapSize = internalData.size;

  internalData.blockMatrix = contentListToMatrix(
    internalData.blockMatrix,
    mapSize
  );
  internalData.building.matrix = contentListToMatrix(
    internalData.building,
    mapSize
  );
  internalData.decoration.matrix = contentListToMatrix(
    internalData.decoration,
    mapSize
  );
  internalData.terrain.matrix = contentListToMatrix(
    internalData.terrain,
    mapSize
  );
  internalData.npc.matrix = contentListToMatrix(internalData.npc, mapSize);
  internalData.mob.matrix = contentListToMatrix(internalData.mob, mapSize);
  internalData.se.matrix = contentListToMatrix(internalData.se, mapSize);
  internalData.passage.matrix = locationListToMatrix(
    internalData.passage.locations,
    mapSize
  );
  internalData.vertex.matrix = locationListToMatrix(
    internalData.vertex.weights,
    mapSize
  );

  internalData.images = [
    ...internalData.building.pics,
    ...internalData.decoration.pics,
    ...internalData.terrain.pics,
    ...internalData.npc.pics,
    ...internalData.mob.pics,
    ...internalData.se.pics
  ];

  delete internalData.building.items;
  delete internalData.building.pics;
  delete internalData.decoration.items;
  delete internalData.decoration.pics;
  delete internalData.terrain.items;
  delete internalData.terrain.pics;
  delete internalData.npc.items;
  delete internalData.npc.pics;
  delete internalData.mob.items;
  delete internalData.mob.pics;
  delete internalData.se.items;
  delete internalData.se.pics;

  if (internalData.description === null) internalData.description = "";

  log("PREPARED_INTERNAL_MAP_DATA");

  return internalData;
};
