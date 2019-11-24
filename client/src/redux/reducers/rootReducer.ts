import { combineReducers } from 'redux';

//Import reducers
import appReducer from './appReducer';
import authReducer from './authReducer';
import mapReducer from './mapReducer';
import uiReducer from './uiReducer';
import charReducer from './charReducer';


const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    map: mapReducer,
    ui: uiReducer,
    char: charReducer
});

export default rootReducer;