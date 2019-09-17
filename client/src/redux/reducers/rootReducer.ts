import { combineReducers } from 'redux';

//Import reducers
import appReducer from './appReducer';
import authReducer from './authReducer';
import mapReducer from './mapReducer';
import uiReducer from './uiReducer';


const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    map: mapReducer,
    ui: uiReducer
});

export default rootReducer;