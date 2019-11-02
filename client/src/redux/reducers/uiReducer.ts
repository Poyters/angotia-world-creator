export const initState = {
    actionNote: "Map has been loaded",
    mapName: 'board name'
};


export const mapReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CHANGE_ACTION_NOTIFICATION':
            return {
                ...state,
                actionNote: action.notification
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

export default mapReducer;