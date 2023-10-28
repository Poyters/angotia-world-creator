import { store } from "../../index";
import { IMapSize } from "../../interfaces/map.interface";
import { IStore } from "../../interfaces/store.interface";
import { log } from "../utils/log";
import { MapMatrix } from "../../interfaces/map.interface";

export const generateEmptyMatrix = (inputMapSize?: IMapSize): MapMatrix => {
  log("GENERATING_EMPTY_MATRIX", { inputMapSize });

  const storeData = store.getState() as IStore;
  const mapSize: IMapSize = inputMapSize ? inputMapSize : storeData.map.size;

  const newMatrix = [...Array(mapSize.y)].map(() => {
    return [...Array(mapSize.x)].map((): Array<number[]> => {
      return [
        [0, 0],
        [0, 0]
      ];
    });
  });

  return newMatrix;
};
