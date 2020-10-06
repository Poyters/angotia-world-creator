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

  if (charState.statistics.jink < rules.jink.min) {
    occuredErrors.push(CharCreationError.minJink);
  } else if (charState.statistics.jink > rules.jink.max) {
    occuredErrors.push(CharCreationError.maxJink);
  } else if (!Number.isInteger(+charState.statistics.jink)) {
    occuredErrors.push(CharCreationError.isIntegerJink);
  }

  if (charState.statistics.attackSpeed < rules.attackSpeed.min) {
    occuredErrors.push(CharCreationError.minAttackSpeed);
  } else if (charState.statistics.attackSpeed > rules.attackSpeed.max) {
    occuredErrors.push(CharCreationError.maxAttackSpeed);
  } else if (!Number.isInteger(+charState.statistics.attackSpeed)) {
    occuredErrors.push(CharCreationError.isIntegerAttackSpeed);
  }

  if (charState.settings.timeOfOccurance.min < rules.timeOfOccurance.min) {
    occuredErrors.push(CharCreationError.minTimeOfOccuranceMin);
  } else if (charState.settings.timeOfOccurance.min > rules.timeOfOccurance.max) {
    occuredErrors.push(CharCreationError.maxTimeOfOccuranceMin);
  } else if (charState.settings.timeOfOccurance.max < rules.timeOfOccurance.min) {
    occuredErrors.push(CharCreationError.minTimeOfOccuranceMax);
  } else if (charState.settings.timeOfOccurance.max > rules.timeOfOccurance.max) {
    occuredErrors.push(CharCreationError.maxTimeOfOccuranceMax);
  } else if (charState.settings.timeOfOccurance.min >= charState.settings.timeOfOccurance.max) {
    occuredErrors.push(CharCreationError.minMaxTimeOfOccurance);
  } else if (!Number.isInteger(+charState.settings.timeOfOccurance.min)) {
    occuredErrors.push(CharCreationError.isIntegerTimeOfOccuranceMin);
  } else if (!Number.isInteger(+charState.settings.timeOfOccurance.max)) {
    occuredErrors.push(CharCreationError.isIntegerTimeOfOccuranceMax);
  }

  if (charState.settings.respTime.min < rules.respTime.min) {
    occuredErrors.push(CharCreationError.minRespTimeMin);
  } else if (charState.settings.respTime.min > rules.respTime.max) {
    occuredErrors.push(CharCreationError.maxRespTimeMin);
  } else if (charState.settings.respTime.max < rules.respTime.min) {
    occuredErrors.push(CharCreationError.minRespTimeMax);
  } else if (charState.settings.respTime.max > rules.respTime.max) {
    occuredErrors.push(CharCreationError.maxRespTimeMax);
  } else if (charState.settings.respTime.min >= charState.settings.respTime.max) {
    occuredErrors.push(CharCreationError.minMaxRespTime);
  } else if (!Number.isInteger(+charState.settings.respTime.min)) {
    occuredErrors.push(CharCreationError.isIntegerRespTimeMin);
  } else if (!Number.isInteger(+charState.settings.respTime.max)) {
    occuredErrors.push(CharCreationError.isIntegerRespTimeMax);
  }

  store.dispatch(changeCharCreationErrors(occuredErrors));
};