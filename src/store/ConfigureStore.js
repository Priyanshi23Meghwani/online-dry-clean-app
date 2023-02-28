<<<<<<< HEAD
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers/RootReducer";
import thunk from 'redux-thunk';

=======
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducers/RootReducer";
import thunk from 'redux-thunk';


>>>>>>> 6a4ba4289232af620e834e581a5c3218764735de
export default function ConfigureStore(){
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
}