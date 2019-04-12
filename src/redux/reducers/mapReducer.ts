export const initState = {
    size: {
        x: 30,
        y: 30
    },
    net: {
        field: true,
        square: true
    },
    mapPic: "",
    select: {
        type: "none", //none, square, field
        matrix: [],
    }
};


export const mapReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CHANGE_MAP_SIZES':
            return {
                ...state,
                size: action.sizes
            }
        case 'CHANGE_MAP_NETS':
            return {
                ...state,
                net: action.values
            }
        case 'SET_MAP_BACKGROUND':
            return {
                ...state,
                mapPic: action.path
            }
        case 'SET_MAP_SELECT_TYPE':
            return {
                ...state,
                select: {
                    ...state.select,
                    type: action.selectType
                }
            }
        case 'CHANGE_MAP_SELECT_MATRIX':
            return {
                ...state,
                select: {
                    ...state.select,
                    matrix: action.newMatrix
                }
            }
        default:
            return state;
    }
}

export default mapReducer;