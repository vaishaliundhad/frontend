import { createStore , combineReducers } from "redux";
import { CartReducer } from "./Reducer/CartReducer";

const rootReducer =combineReducers({
    cart:CartReducer,

})

const Store =createStore(rootReducer)

export default Store