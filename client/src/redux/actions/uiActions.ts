export const setNotification = (notification: string) => {
    return {
        type: 'CHANGE_ACTION_NOTIFICATION',
        notification
    };
};

export const changeMapName = (mapName: string) => {
    return {
        type: 'CHANGE_MAP_NAME',
        mapName
    };
};

export const setMapSelectType = (selectType: string) => {
    return {
        type: 'SET_MAP_SELECT_TYPE',
        selectType
    };
};

export const changeMapSelectMatrix = (newMatrix: Array<any>) => {
    return {
        type: 'CHANGE_MAP_SELECT_MATRIX',
        newMatrix
    };
};
