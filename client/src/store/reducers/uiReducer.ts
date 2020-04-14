import { uiState } from '../states/uiState';


export const uiReducer = (state = uiState, action) => {
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
        default:
            return state;
    }
};
