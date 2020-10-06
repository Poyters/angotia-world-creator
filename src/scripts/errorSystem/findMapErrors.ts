import { store } from '../../index';
import { IStore } from '../../interfaces/store.interface';
import { IMapState } from '../../interfaces/mapState.interface';
import errorSystemConfig from '../../assets/configs/errorSystem.config.json';
import { MapCreationError } from '../../models/mapCreationError.model';
import { changeMapCreationErrors } from '../../store/actions/uiActions';
import { countElementsInMatrix } from '../matrix/countElementsInMatrix';


export const findMapErrors = (): void => {
  const storeData: IStore = store.getState();
  const mapState: IMapState = storeData.map;
  const squareQuantity: number = mapState.size.x * mapState.size.y * 4;
  const occuredErrors: string[] = [];
  const rules = errorSystemConfig.map;

  if (mapState.minEntryLevel < rules.entryLevel.min) {
    occuredErrors.push(MapCreationError.minEntryLevel);
  }

  if (mapState.minEntryLevel > rules.entryLevel.max) {
    occuredErrors.push(MapCreationError.maxEntryLevel);
  }

  if (mapState.description.length < rules.description.length.min) {
    occuredErrors.push(MapCreationError.minDescriptionLength);
  }

  if (mapState.description.length > rules.description.length.max) {
    occuredErrors.push(MapCreationError.maxDescriptionLength);
  }

  if (mapState.mapName.length < rules.name.length.min) {
    occuredErrors.push(MapCreationError.minMapLength);
  }

  if (mapState.mapName.length > rules.name.length.max) {
    occuredErrors.push(MapCreationError.maxMapLength);
  }

  if (
    countElementsInMatrix(mapState.blockMatrix) > 
    (squareQuantity / rules.block.quantity.max)
  ) occuredErrors.push(MapCreationError.maxBlockQuantity);

  if (
    countElementsInMatrix(mapState.passage.matrix) > 
    (squareQuantity / rules.passage.quantity.max)
  ) occuredErrors.push(MapCreationError.maxPassageQuantity);

  if (
    countElementsInMatrix(mapState.se.matrix) > 
    (squareQuantity / rules.se.quantity.max)
  ) occuredErrors.push(MapCreationError.maxSeQuantity);

  if (
    countElementsInMatrix(mapState.npc.matrix) > 
    (squareQuantity / rules.npc.quantity.max)
  ) occuredErrors.push(MapCreationError.maxNpcQuantity);

  if (
    countElementsInMatrix(mapState.mob.matrix) > 
    (squareQuantity / rules.mob.quantity.max)
  ) occuredErrors.push(MapCreationError.maxMobQuantity);

  store.dispatch(changeMapCreationErrors(occuredErrors));
};