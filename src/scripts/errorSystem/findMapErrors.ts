import { store } from '../../index';
import { IStore } from '../../interfaces/store.interface';
import { IMapState } from '../../interfaces/mapState.interface';
import mapConfig from '../../assets/configs/map.config.json';
import { MapCreationError } from '../../models/mapCreationError.model';
import { changeMapCreationErrors } from '../../store/actions/uiActions';


export const findMapErrors = (): void => {
  console.log('here');
  const storeData: IStore = store.getState();
  const mapState: IMapState = storeData.map;
  const occuredErrors: string[] = [];

  if (mapState.minEntryLevel < mapConfig.rules.entryLevel.min) {
    occuredErrors.push(MapCreationError.minEntryLevel);
  }

  if (mapState.minEntryLevel > mapConfig.rules.entryLevel.max) {
    occuredErrors.push(MapCreationError.maxEntryLevel);
  }

  if (mapState.description.length < mapConfig.rules.description.length.min) {
    occuredErrors.push(MapCreationError.minDescriptionLength);
  }

  if (mapState.description.length > mapConfig.rules.description.length.max) {
    occuredErrors.push(MapCreationError.maxDescriptionLength);
  }

  if (mapState.mapName.length < mapConfig.rules.name.length.min) {
    occuredErrors.push(MapCreationError.minMapLength);
  }

  if (mapState.mapName.length > mapConfig.rules.name.length.max) {
    occuredErrors.push(MapCreationError.maxMapLength);
  }

  store.dispatch(changeMapCreationErrors(occuredErrors));
};