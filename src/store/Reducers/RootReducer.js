import {combineReducers} from 'redux';
import userReducer from './UserReducer';


import OrderReducer from './OrderReducer';

const rootReducer = combineReducers({
    OrderReducer,userReducer

})

export default rootReducer;