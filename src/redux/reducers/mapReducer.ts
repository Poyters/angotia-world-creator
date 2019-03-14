const initState = {
    size: {
        x: 30,
        y: 30
    },
    net: {
        field: true,
        square: true
    }
};


const mapReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CHANGE_MAP_SIZES':
            return {
                ...state,
                size: action.sizes
            }
        default:
            return state;
    }
}

export default mapReducer;