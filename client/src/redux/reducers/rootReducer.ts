import { combineReducers } from 'redux';
import { mapReducer } from './mapReducer';
import { uiReducer } from './uiReducer';
import { charReducer } from './charReducer';


const rootReducer = combineReducers({
    map: mapReducer,
    ui: uiReducer,
    char: charReducer
});

export default rootReducer;