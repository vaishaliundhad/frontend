import { combineReducers } from "redux";
import reducer , {demoreducer} from './Reducer'

const RootReducer = combineReducers ({
    reducer1:reducer,
    reducer2:demoreducer
})

export default RootReducer
