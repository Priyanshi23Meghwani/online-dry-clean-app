import {combineReducers} from 'redux';
import OrderReducer from "./OrderReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
    OrderReducer,
    UserReducer
})

export default rootReducer;