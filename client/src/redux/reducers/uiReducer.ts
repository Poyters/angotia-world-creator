export const initState = {
    actionNote: "Map has been loaded"
};


export const mapReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CHANGE_ACTION_NOTIFICATION':
            return {
                ...state,
                actionNote: action.notification
            };
        default:
            return state;
    }
};

export default mapReducer;