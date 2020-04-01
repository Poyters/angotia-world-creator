import { store } from '../../index';

//Import interfaces
import { IDialog, IMonolog, IPlayer } from '../../assets/interfaces/dialogsInterfaces';

export const changeCharType = (charType: string) => {
  return {
    type: 'CHANGE_CHAR_TYPE',
    charType
  };
};

export const changeChar = (char: string) => {
  return {
    type: 'CHANGE_CHAR',
    char
  };
};

export const changeMonologs = (monologs: IMonolog[]) => {
  return {
    type: 'CHANGE_MONOLOGS',
    monologs
  };
};

export const changeDialogs = (dialogs: IDialog[]) => {
  return {
    type: 'CHANGE_DIALOGS',
    dialogs
  };
};

export const changeTemponaryPlayerDialogs = (temponaryDialogs: IPlayer[]) => {
  return {
    type: 'CHANGE_TEMPONARY_PLAYER_DIALOGS',
    temponaryDialogs
  };
};

export const isAgressiveMob = (isAgressive: boolean) => {
  return {
    type: 'IS_AGRESSIVE_MOB',
    isAgressive
  };
};

export const setCharPic = (picPath: string) => {
  return {
    type: 'SET_CHAR_PIC',
    picPath
  };
};


export const changeStatistics = (key: string, value: string | number) => {
  const statistics = store.getState().char.statistics;
  const newStats = Object.assign({}, statistics);
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
