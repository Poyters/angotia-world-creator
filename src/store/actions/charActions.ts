import { store } from '../../index';
import { IDialog, IMonolog, IPlayer } from '../../interfaces/dialogs.interface';
import { ICharStatistic } from '../../interfaces/char.interface';
import { IMinMaxField } from '../../interfaces/math.interface';
import { ICharState } from '../../interfaces/charState.interface';


export const changeCharType = (charType: string) => ({
  type: 'CHANGE_CHAR_TYPE',
  charType
});

export const changeChar = (char: string) => ({
  type: 'CHANGE_CHAR',
  char
});

export const changeMonologs = (monologs: IMonolog[]) => ({
  type: 'CHANGE_MONOLOGS',
  monologs
});

export const changeDialogs = (dialogs: IDialog[]) => ({
  type: 'CHANGE_DIALOGS',
  dialogs
});

export const changeTemponaryPlayerDialogs = (temponaryDialogs: IPlayer[]) => ({
  type: 'CHANGE_TEMPONARY_PLAYER_DIALOGS',
  temponaryDialogs
});

export const setIsMobAggressive = (isAgressive: boolean) => ({
  type: 'IS_MOB_AGGRESSIVE',
  isAgressive
});

export const setMobRange = (range: string) => ({
  type: 'SET_MOB_RANGE',
  range
});

export const setCharPic = (picPath: string) => ({
  type: 'SET_CHAR_PIC',
  picPath
});

export const changeStatistics = (key: string, value: string | number) => {
  const statistics: ICharStatistic = store.getState().char.statistics;
  const newStats: ICharStatistic = Object.assign({}, statistics);
  newStats[key] = value;

  return {
    type: 'CHANGE_STATISTICS',
    newStats
  };
};

export const changeName = (newName: string) => ({
  type: 'CHANGE_NAME',
  newName
});

export const changeFieldDiameter = (newDiameter: number) => ({
  type: 'CHANGE_FIELD_DIAMETER',
  newDiameter
});

export const setVisibleLevel = (isVisible: boolean) => ({
  type: 'SET_VISIBLE_LEVEL',
  isVisible
});

export const setTimeOfOccurance = (times: IMinMaxField) => ({
  type: 'SET_TIME_OF_OCCURANCE',
  times
});

export const setRespawnTime = (times: IMinMaxField) => ({
  type: 'SET_RESPAWN_TIME',
  times
});

export const loadCharData = (data: ICharState) => ({
  type: 'LOAD_CHAR_DATA',
  data
});

export const setCharDatabaseId = (dbId: string) => ({
  type: 'SET_CHAR_DATABASE_ID',
  dbId
});