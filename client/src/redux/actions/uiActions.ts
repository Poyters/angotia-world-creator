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

