import { deepCopy } from '../../scripts/utils/deepCopy';
import { charState } from '../states/charState';


export const charReducer = (state = deepCopy(charState), action) => {
  switch(action.type) {
    case 'CHANGE_CHAR_TYPE':
      return {
        ...state,
        type: action.charType
      };
    case 'CHANGE_CHAR':
      return {
        ...state,
        choosed: action.char
      };
    case 'SET_CHAR_DATABASE_ID':
      return {
          ...state,
          id: action.dbId
      };
    case 'CHANGE_MONOLOGS':
      return {
        ...state,
        monologs: action.monologs
      };
    case 'CHANGE_DIALOGS':
      return {
        ...state,
        dialogs: action.dialogs
      };
    case 'CHANGE_TEMPONARY_PLAYER_DIALOGS':
      return {
        ...state,
        temponaryPlayerDialogs: action.temponaryDialogs
      };
    case 'IS_AGRESSIVE_MOB':
      return {
        ...state,
        isMobAggressive: action.isAgressive
      };
    case 'SET_MOB_RANGE':
      return {
        ...state,
        mobRange: action.range
      };
    case 'SET_CHAR_PIC':
      return {
        ...state,
        charPic: action.picPath
      };
    case 'CHANGE_STATISTICS':
      return {
        ...state,
        statistics: action.newStats
      };
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.newName
      };
    case 'CHANGE_FIELD_DIAMETER':
      return {
        ...state,
        fieldDiameter: action.newDiameter
      };
    case 'SET_VISIBLE_LEVEL':
      return {
        ...state,
        hasVisibleLevel: action.isVisible
      };
    case 'SET_TIME_OF_OCCURANCE':
      return {
        ...state,
        settings: {
          ...state.settings,
          timeOfOccurance: action.times
        }
      };
    case 'SET_RESPAWN_TIME':
      return {
        ...state,
        settings: {
          ...state.settings,
          respTime: action.times
        }
      };
    case 'LOAD_CHAR_DATA':
      return {
        ...action.data
      };
    default:
      return state;
  }
};