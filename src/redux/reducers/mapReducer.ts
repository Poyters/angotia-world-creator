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
        type: "square", //none, square, field
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
        default:
            return state;
    }
}

export default mapReducer;