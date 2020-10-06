import { deepCopy } from '../../scripts/utils/deepCopy';
import { uiState } from '../states/uiState';


export const uiReducer = (state = deepCopy(uiState), action) => {
    switch(action.type) {
        case 'CHANGE_ACTION_NOTIFICATION':
            return {
                ...state,
                actionNote: action.notifications
            };
        case 'SET_MAP_SELECT_TYPE':
            return {
                ...state,
                select: {
                    ...state.select,
                    type: action.selectType
                }
            };
        case 'CHANGE_MAP_SELECT_MATRIX':
            return {
                ...state,
                select: {
                    ...state.select,
                    matrix: action.newMatrix
                }
            };
        case 'CHANGE_MAP_NETS':
            return {
                ...state,
                net: action.values
            };
        case 'CHANGE_LANGUAGE':
            return {
                ...state,
                language: action.lang
            };
        case 'TOGGLE_STATISTIC_PANEL':
            return {
                ...state,
                statisticPanelIsOpen: action.isOpen
            };
        case 'TOGGLE_ERROR_PANEL':
            return {
                ...state,
                errorPanelIsOpen: action.isOpen
            };
        case 'CHANGE_MAP_CREATION_ERRORS':
            return {
                ...state,
                mapCreationErrors: action.errorList
            };
        case 'CHANGE_CHAR_CREATION_ERRORS':
            return {
                ...state,
                charCreationErrors: action.errorList
            };
        default:
            return state;
    }
};
