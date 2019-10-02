export const initState = {
    size: {
        x: 11,
        y: 8
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
        locations: [],
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
    },
    vertex: {
        matrix: [],
        weights: []
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
        case 'CHANGE_MAP_BUILDING_MATRIX':
            return {
                ...state,
                building: {
                    ...state.building,
                    matrix: action.newMatrix
                }
            }
        case 'CHANGE_MAP_DECORATION_MATRIX':
            return {
                ...state,
                decoration: {
                    ...state.passage,
                    matrix: action.newMatrix
                }
            }
        case 'CHANGE_MAP_SUBSOIL_MATRIX':
            return {
                ...state,
                subsoil: {
                    ...state.subsoil,
                    matrix: action.newMatrix
                }
            }
        case 'CHANGE_MAP_MOB_MATRIX':
            return {
                ...state,
                mob: {
                    ...state.mob,
                    matrix: action.newMatrix
                }
            }
        case 'CHANGE_MAP_NPC_MATRIX':
            return {
                ...state,
                npc: {
                    ...state.npc,
                    matrix: action.newMatrix
                }
            }
        case 'CHANGE_MAP_VERTEX_WEIGHT_MATRIX':
            return {
                ...state,
                vertex: {
                    ...state.vertex,
                    matrix: action.newMatrix
                }
            }
        case 'CHANGE_MAP_PASSAGE_LOCATIONS':
            return {
                ...state,
                passage: {
                    ...state.passage,
                    locations: action.locations,
                },
            }
        case 'CHANGE_MAP_VERTEX_WEIGHTS':
                return {
                    ...state,
                    vertex: {
                        ...state.vertex,
                        weights: action.weights,
                    },
                }
        default:
            return state;
    }
}

export default mapReducer;