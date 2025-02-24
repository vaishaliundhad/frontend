const redux =require('redux')
// import * as redux from 'redux';

//redux store

const createStore = redux.createStore;

//redux action

const buy_item =()=>{
    return {
        type:"BUY_ITEM",
        info:"first index action"
    }
}

const buy_cake =()=>{
    return{
        type:"BUY_CAKE",
        info:"Buying a cake"
    }
}
const buy_choco=()=>{
    return{
        type:"BUY_CHOCO",
        info:"buying a choco"
    }
}
// initalstate

// let initalState=10;


const initalState ={
    item:10,
    cake:20,
    choco:30
}

//reducer

const ItemReducer =(state=initalState, action)=>{
    switch(action.type){
        case "BUY_ITEM":
            return {...state , item:state.item-1};
        case "BUY_CAKE":
            return {...state,cake:state.cake-1};  
        case "BUY_CHOCO":
            return {...state , choco:state.choco+1};     
        default:
            return state;
    }
}

// create store

const store= createStore(ItemReducer)
// console.log("store" , store);
console.log('initalstate' , store.getState());

    store.subscribe(()=> console.log('updated state' , store.getState()));
store.dispatch(buy_item());

store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_choco());


