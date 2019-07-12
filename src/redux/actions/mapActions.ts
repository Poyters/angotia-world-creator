//Import interfaces
import { IMapSize, IMapNetStatus } from '../../assets/interfaces/mapInterfaces';


export const setMapSizes = (sizes: IMapSize) => {
    return {
        type: 'CHANGE_MAP_SIZES',
        sizes
    }
}

export const setMapNets = (values: IMapNetStatus) => {
    return {
        type: 'CHANGE_MAP_NETS',
        values
    }
}

export const setMapBg = (path: string) => {
    return {
        type: 'SET_MAP_BACKGROUND',
        path
    }
}

export const setMapSelectType = (selectType: string) => {
    return {
        type: 'SET_MAP_SELECT_TYPE',
        selectType
    }
}

export const changeMapSelectMatrix = (newMatrix: Array<any>) => {
    return {
        type: 'CHANGE_MAP_SELECT_MATRIX',
        newMatrix
    }
}

export const changeMapBlockMatrix = (newMatrix: Array<any>) => {
    return {
        type: 'CHANGE_MAP_BLOCK_MATRIX',
        newMatrix
    }
}

export const setLoadingMapState = (loadingState: boolean) => {
    return {
        type: 'SET_LOADING_MAP_STATE',
        loadingState
    }
}
