interface ISetMapSizes {
    x: number,
    y: number
}

export const setMapSizes = sizes => {
    return {
        type: 'CHANGE_CURRENT_CHAR',
        sizes
    }
}