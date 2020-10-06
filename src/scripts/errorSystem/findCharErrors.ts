import { store } from '../../index';
import { IStore } from '../../interfaces/store.interface';
import { ICharState } from '../../interfaces/charState.interface';
import errorSystemConfig from '../../assets/configs/errorSystem.config.json';
import { CharCreationError } from '../../models/charCreationError.model';
import { changeCharCreationErrors } from '../../store/actions/uiActions';


export const findCharErrors = (): void => {
  const storeData: IStore = store.getState();
  const charState: ICharState = storeData.char;
  const occuredErrors: string[] = [];
  const rules = errorSystemConfig.char;

  if (charState.name.length < rules.name.length.min) {
    occuredErrors.push(CharCreationError.minNameLength);
  }

  if (charState.name.length > rules.name.length.max) {
    occuredErrors.push(CharCreationError.maxNameLength);
  }

  if (charState.statistics.level < rules.level.min) {
    occuredErrors.push(CharCreationError.minLevel);
  }

  if (charState.statistics.level > rules.level.max) {
    occuredErrors.push(CharCreationError.maxLevel);
  }

  store.dispatch(changeCharCreationErrors(occuredErrors));
};