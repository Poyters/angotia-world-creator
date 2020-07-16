import { deepCopy } from '../../assets/scripts/utils/deepCopy';
import { mapState } from '../states/mapState';


export const mapReducer = (state = deepCopy(mapState), action) => {
    console.log('action.type', action.type, state);
    switch(action.type) {
        case 'CHANGE_MAP_SIZES':
            return {
                ...state,
                size: action.sizes
            };
        case 'SET_MAP_BACKGROUND':
            return {
                ...state,
                mapPic: action.path
            };
        case 'CHANGE_MAP_BLOCK_MATRIX':
            console.log('newMatrix', action.newMatrix);
            return {
                ...state,
                blockMatrix: action.newMatrix
            };
        case 'CHANGE_MAP_PASSAGE_MATRIX':
            return {
                ...state,
                passage: {
                    ...state.passage,
                    matrix: action.newMatrix
                }
            };
        case 'CHANGE_MAP_BUILDING_MATRIX':
            return {
                ...state,
                building: {
                    ...state.building,
                    matrix: action.newMatrix
                }
            };
        case 'CHANGE_MAP_DECORATION_MATRIX':
            return {
                ...state,
                decoration: {
                    ...state.passage,
                    matrix: action.newMatrix
                }
            };
        case 'CHANGE_MAP_SUBSOIL_MATRIX':
            return {
                ...state,
                subsoil: {
                    ...state.subsoil,
                    matrix: action.newMatrix
                }
            };
        case 'CHANGE_MAP_MOB_MATRIX':
            return {
                ...state,
                mob: {
                    ...state.mob,
                    matrix: action.newMatrix
                }
            };
        case 'CHANGE_MAP_SE_MATRIX':
            return {
                ...state,
                se: {
                    ...state.se,
                    matrix: action.newMatrix
                }
            };
        case 'CHANGE_MAP_NPC_MATRIX':
            return {
                ...state,
                npc: {
                    ...state.npc,
                    matrix: action.newMatrix
                }
            };
        case 'CHANGE_MAP_VERTEX_WEIGHT_MATRIX':
            return {
                ...state,
                vertex: {
                    ...state.vertex,
                    matrix: action.newMatrix
                }
            };
        case 'CHANGE_MAP_PASSAGE_LOCATIONS':
            return {
                ...state,
                passage: {
                    ...state.passage,
                    locations: action.locations,
                },
            };
        case 'CHANGE_MAP_VERTEX_WEIGHTS':
            return {
                ...state,
                vertex: {
                    ...state.vertex,
                    weights: action.weights,
                },
            };
        case 'LOAD_MAP_DATA':
            console.log('inserted load data', action.mapData);
            return {
                ...action.mapData
            };
        case 'SET_VISIBILITY_RANGE':
            return {
                ...state,
                visibilityRange: action.range
            };
        case 'SET_MAP_DESCRIPTION':
            return {
                ...state,
                description: action.description
            };
        case 'SET_MAP_MIN_LVL':
            return {
                ...state,
                minEntryLevel: action.minLvl
            };
        case 'CHANGE_MAP_NAME':
            return {
                ...state,
                mapName: action.mapName
            };
        default:
            return state;
    }
};