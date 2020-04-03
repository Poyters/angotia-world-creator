import { IMapSize } from '../../assets/interfaces/mapInterfaces';


export const setMapSizes = (sizes: IMapSize) => {
    return {
        type: 'CHANGE_MAP_SIZES',
        sizes
    };
};

export const setMapBg = (path: string) => {
    return {
        type: 'SET_MAP_BACKGROUND',
        path
    };
};

export const changeMapBlockMatrix = (newMatrix: Array<any>) => {
    return {
        type: 'CHANGE_MAP_BLOCK_MATRIX',
        newMatrix
    };
};

export const setVisibilityRange = (range: number) => {
    return {
        type: 'SET_VISIBILITY_RANGE',
        range
    };
};

export const changeMapPassageMatrix = (newMatrix: Array<any>) => {
    return {
        type: 'CHANGE_MAP_PASSAGE_MATRIX',
        newMatrix
    };
};

export const changeMapBuildingMatrix = (newMatrix: Array<any>) => {
    return {
        type: 'CHANGE_MAP_BUILDING_MATRIX',
        newMatrix
    };
};

export const changeMapDecorationMatrix = (newMatrix: Array<any>) => {
    return {
        type: 'CHANGE_MAP_DECORATION_MATRIX',
        newMatrix
    };
};

export const changeMapSubsoilMatrix = (newMatrix: Array<any>) => {
    return {
        type: 'CHANGE_MAP_SUBSOIL_MATRIX',
        newMatrix
    };
};

export const changeMapNpcMatrix = (newMatrix: Array<any>) => {
    return {
        type: 'CHANGE_MAP_NPC_MATRIX',
        newMatrix
    };
};

export const changeMapMobMatrix = (newMatrix: Array<any>) => {
    return {
        type: 'CHANGE_MAP_MOB_MATRIX',
        newMatrix
    };
};

export const changeMapVertexWeightMatrix = (newMatrix: Array<any>) => {
    return {
        type: 'CHANGE_MAP_VERTEX_WEIGHT_MATRIX',
        newMatrix
    };
};

export const changeMapPassageLocations = (locations) => {
    return {
        type: 'CHANGE_MAP_PASSAGE_LOCATIONS',
        locations
    };
};

export const changeMapVertexWeights = (weights) => {
    return {
        type: 'CHANGE_MAP_VERTEX_WEIGHTS',
        weights
    };
};

export const loadMapData = (mapData) => {
    return {
        type: 'LOAD_MAP_DATA',
        mapData
    };
};

export const setMapDesc = (description: string) => ({
    type: 'SET_MAP_DESCRIPTION',
    description
});

export const setMinEntryLevel = (minLvl: number) => ({
    type: 'SET_MAP_MIN_LVL',
    minLvl
});
