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
