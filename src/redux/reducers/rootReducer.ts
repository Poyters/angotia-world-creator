import { combineReducers } from 'redux';

//Import reducers
import appReducer from './appReducer';
import authReducer from './authReducer';
import mapReducer from './mapReducer';


const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    map: mapReducer
});

export default rootReducer;