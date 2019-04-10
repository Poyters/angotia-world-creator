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
        matrix: [] // board matrix, set for each 0 and for selected 1
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
        default:
            return state;
    }
}

export default mapReducer;