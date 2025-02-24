const redux = require('redux')
const createStore = redux.createStore

/* constant */

const BUY_CHOCOLATE = 'BUY_CHOCOLATE'
const BUY_CAKE = 'BUY_CAKE'

/* REDUX ACTION */

function buy_chocolate(){
    return{
        type:BUY_CHOCOLATE,
        info:'first redux action'
    }
}

function buy_cake(){
    return{
        type:BUY_CAKE,
        info:'first redux action'
    }
}

/* initialState for redux */

const initialState = {
    NumOfChocolate : 20,
    NumOfCake : 30
}

/* Redux Reducer */

const ChocoReducer = (state = initialState , action) => {
 switch(action.type){
    case BUY_CHOCOLATE : return{
        ...state,
        NumOfChocolate:state.NumOfChocolate - 1
    }
    case BUY_CAKE : return{
        ...state,
        NumOfCake:state.NumOfCake - 1
    }
    default:return state
 }
}

/* redux store */


const store = createStore(ChocoReducer)

console.log(store.getState());

const unsubscribe  =  store.subscribe(() => console.log(store.getState()))

store.dispatch(buy_chocolate())
store.dispatch(buy_chocolate())
store.dispatch(buy_cake())

unsubscribe()


