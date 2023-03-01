import {combineReducers} from 'redux';
import OrderReducer from "./OrderReducer";
import UserReducer from "./UserReducer";
import serviceReducer from './ServiceReducer';
import AddressReducer from './AddressReducer';

const rootReducer = combineReducers({
    OrderReducer,
    UserReducer,
    serviceReducer,
    AddressReducer
})

export default rootReducer;