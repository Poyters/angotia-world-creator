export const initState = {
    size: {
        x: 6,
        y: 6
    },
    net: {
        field: true,
        square: true
    },
    mapPic: "",
    select: {
        type: "none", //none, square, field, mouse
        matrix: [],
    },
    blockMatrix: [],
    passage: {
        locations: {}, //map id from passage
        matrix: []
    },
    building: {
        matrix: []
    },
    decoration: {
        matrix: []
    },
    subsoil: {
        matrix: []
    },
    npc: {
        matrix: [],
        dialogs: {}
    },
    mob: {
        matrix: [],
        types: {}
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
        case 'CHANGE_MAP_BLOCK_MATRIX':
            return {
                ...state,
                blockMatrix: action.newMatrix
            }
        case 'CHANGE_MAP_PASSAGE_MATRIX':
            return {
                ...state,
                passage: {
                    ...state.passage,
                    matrix: action.newMatrix
                }
            }
        default:
            return state;
    }
}

export default mapReducer;