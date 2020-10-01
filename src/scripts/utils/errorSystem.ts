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

  store.dispatch(changeMapCreationErrors(occuredErrors));
};