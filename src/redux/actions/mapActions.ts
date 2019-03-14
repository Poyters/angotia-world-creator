interface ISetMapSizes {
    x: number,
    y: number
}

export const setMapSizes = sizes => {
    return {
        type: 'CHANGE_MAP_SIZES',
        sizes
    }
}

export const setMapNets = values => {
    return {
        type: 'CHANGE_MAP_NETS',
        values
    }
}