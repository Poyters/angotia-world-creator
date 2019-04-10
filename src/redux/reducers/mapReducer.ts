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
    click: "none" // none/filed/square
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