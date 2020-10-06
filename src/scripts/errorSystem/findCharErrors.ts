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
  } else if (charState.name.length > rules.name.length.max) {
    occuredErrors.push(CharCreationError.maxNameLength);
  }

  if (charState.statistics.level < rules.level.min) {
    occuredErrors.push(CharCreationError.minLevel);
  } else if (charState.statistics.level > rules.level.max) {
    occuredErrors.push(CharCreationError.maxLevel);
  } else if (!Number.isInteger(+charState.statistics.level)) {
    occuredErrors.push(CharCreationError.isIntegerLevel);
  }

  if (charState.statistics.health < rules.health.min) {
    occuredErrors.push(CharCreationError.minHealth);
  } else if (charState.statistics.health > rules.health.max) {
    occuredErrors.push(CharCreationError.maxHealth);
  } else if (!Number.isInteger(+charState.statistics.health)) {
    occuredErrors.push(CharCreationError.isIntegerHealth);
  }

  if (charState.statistics.attack < rules.attack.min) {
    occuredErrors.push(CharCreationError.minAttack);
  } else if (charState.statistics.attack > rules.attack.max) {
    occuredErrors.push(CharCreationError.maxAttack);
  } else if (!Number.isInteger(+charState.statistics.attack)) {
    occuredErrors.push(CharCreationError.isIntegerAttack);
  }

  if (charState.statistics.defence < rules.defence.min) {
    occuredErrors.push(CharCreationError.minDefence);
  } else if (charState.statistics.defence > rules.defence.max) {
    occuredErrors.push(CharCreationError.maxDefence);
  } else if (!Number.isInteger(+charState.statistics.defence)) {
    occuredErrors.push(CharCreationError.isIntegerDefence);
  }

  if (charState.statistics.strength < rules.dexterity.min) {
    occuredErrors.push(CharCreationError.minStrength);
  } else if (charState.statistics.strength > rules.strength.max) {
    occuredErrors.push(CharCreationError.maxStrength);
  } else if (!Number.isInteger(+charState.statistics.strength)) {
    occuredErrors.push(CharCreationError.isIntegerStrength);
  }

  if (charState.statistics.dexterity < rules.dexterity.min) {
    occuredErrors.push(CharCreationError.minDexterity);
  } else if (charState.statistics.dexterity > rules.dexterity.max) {
    occuredErrors.push(CharCreationError.maxDexterity);
  } else if (!Number.isInteger(+charState.statistics.dexterity)) {
    occuredErrors.push(CharCreationError.isIntegerDexterity);
  }

  if (charState.statistics.inteligence < rules.inteligence.min) {
    occuredErrors.push(CharCreationError.minInteligence);
  } else if (charState.statistics.inteligence > rules.inteligence.max) {
    occuredErrors.push(CharCreationError.maxInteligence);
  } else if (!Number.isInteger(+charState.statistics.inteligence)) {
    occuredErrors.push(CharCreationError.isIntegerInteligence);
  }

  store.dispatch(changeCharCreationErrors(occuredErrors));
};