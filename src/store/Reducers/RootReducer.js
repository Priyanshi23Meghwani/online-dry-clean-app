import {combineReducers} from 'redux';
import OrderReducer from "./OrderReducer";
import UserReducer from "./UserReducer";
import serviceReducer from './ServiceReducer';

const rootReducer = combineReducers({
    OrderReducer,
    UserReducer,
    serviceReducer
})

export default rootReducer;