export const initState = {
    actionNote: "Map has been loaded",
    mapName: 'board name',
    select: {
        type: "none", //none, square, field, mouse
        matrix: [],
    },
    net: {
        field: true,
        square: true
    }
};


export const mapReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CHANGE_ACTION_NOTIFICATION':
            return {
                ...state,
                actionNote: action.notification
            };
        case 'CHANGE_MAP_NAME':
        return {
            ...state,
            mapName: action.mapName
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
        default:
            return state;
    }
};

export default mapReducer;