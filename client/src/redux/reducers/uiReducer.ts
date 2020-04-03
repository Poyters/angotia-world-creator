export const initState = {
    actionNote: "Map has been loaded",
    select: {
        type: "none", //none, square, field, mouse
        matrix: [],
    },
    net: {
        field: true,
        square: true
    },
    language: 'en',
    statisticPanelIsOpen: false
};


export const uiReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CHANGE_ACTION_NOTIFICATION':
            return {
                ...state,
                actionNote: action.notification
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
