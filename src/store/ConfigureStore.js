import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers/RootReducer";
import thunk from 'redux-thunk';

export default function ConfigureStore(){
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
}