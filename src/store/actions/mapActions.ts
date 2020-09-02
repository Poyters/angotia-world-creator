import { IMapSize } from '../../interfaces/map.interface';
import { IPassageLocation } from '../../interfaces/passage.interface';
import { IVertexWeight } from '../../interfaces/vertex.interface';
import { IStore } from '../../interfaces/store.interface';


export const setMapSizes = (sizes: IMapSize) => ({
    type: 'CHANGE_MAP_SIZES',
    sizes
});

export const setMapBg = (path: string) => ({
    type: 'SET_MAP_BACKGROUND',
    path
});

export const changeMapBlockMatrix = (newMatrix: Array<any>) => ({
    type: 'CHANGE_MAP_BLOCK_MATRIX',
    newMatrix
});

export const setVisibilityRange = (range: number) => ({
    type: 'SET_VISIBILITY_RANGE',
    range
});

export const changeMapPassageMatrix = (newMatrix: Array<any>) => ({
    type: 'CHANGE_MAP_PASSAGE_MATRIX',
    newMatrix
});

export const changeMapBuildingMatrix = (newMatrix: Array<any>) => ({
    type: 'CHANGE_MAP_BUILDING_MATRIX',
    newMatrix
});

export const changeMapDecorationMatrix = (newMatrix: Array<any>) => ({
    type: 'CHANGE_MAP_DECORATION_MATRIX',
    newMatrix
});

export const changeMapSubsoilMatrix = (newMatrix: Array<any>) => ({
    type: 'CHANGE_MAP_SUBSOIL_MATRIX',
    newMatrix
});

export const changeMapNpcMatrix = (newMatrix: Array<any>) => ({
    type: 'CHANGE_MAP_NPC_MATRIX',
    newMatrix
});

export const changeMapMobMatrix = (newMatrix: Array<any>) => ({
    type: 'CHANGE_MAP_MOB_MATRIX',
    newMatrix
});

export const changeMapSeMatrix = (newMatrix: Array<any>) => ({
    type: 'CHANGE_MAP_SE_MATRIX',
    newMatrix
});


export const changeMapVertexWeightMatrix = (newMatrix: Array<any>) => ({
    type: 'CHANGE_MAP_VERTEX_WEIGHT_MATRIX',
    newMatrix
});

export const changeMapPassageLocations = (locations: IPassageLocation[]) => ({
    type: 'CHANGE_MAP_PASSAGE_LOCATIONS',
    locations
});

export const changeMapVertexWeights = (weights: IVertexWeight[]) => ({
    type: 'CHANGE_MAP_VERTEX_WEIGHTS',
    weights
});

export const loadMapData = (mapData: IStore) => ({
    type: 'LOAD_MAP_DATA',
    mapData
});

export const setMapDesc = (description: string) => ({
    type: 'SET_MAP_DESCRIPTION',
    description
});

export const setMinEntryLevel = (minLvl: number) => ({
    type: 'SET_MAP_MIN_LVL',
    minLvl
});

export const changeMapName = (mapName: string) => ({
    type: 'CHANGE_MAP_NAME',
    mapName
});