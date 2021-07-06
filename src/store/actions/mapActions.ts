import { IMapSize } from '../../interfaces/map.interface';
import { IPassageLocation } from '../../interfaces/passage.interface';
import { IVertexWeight } from '../../interfaces/vertex.interface';
import { IMapState } from '../../interfaces/mapState.interface';


export const setMapSizes = (sizes: IMapSize) => ({
    type: 'CHANGE_MAP_SIZES',
    sizes
});

export const setMapBg = (path: string) => ({
    type: 'SET_MAP_BACKGROUND',
    path
});

export const setMapDatabaseId = (dbId: string) => ({
    type: 'SET_MAP_DATABASE_ID',
    dbId
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

export const changeMapTerrainMatrix = (newMatrix: Array<any>) => ({
    type: 'CHANGE_MAP_TERRAIN_MATRIX',
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

export const loadMapData = (mapData: IMapState) => ({
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

export const changeInternalImagesData = (imagesData: any) => ({
    type: 'CHANGE_INTERNAL_IMAGES',
    imagesData
});