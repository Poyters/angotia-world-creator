import { store } from '../../index';
import { IDialog, IMonolog, IPlayer } from '../../assets/interfaces/dialogs';
import { ICharStatistic } from '../../assets/interfaces/char';


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

export const isAgressiveMob = (isAgressive: boolean) => ({
  type: 'IS_AGRESSIVE_MOB',
  isAgressive
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
