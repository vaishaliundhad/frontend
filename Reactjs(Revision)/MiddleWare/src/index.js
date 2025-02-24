const redux = require('redux')
const applyMiddleWare = redux.applyMiddleware
const reduxlogger = require('redux-logger')
const logger = reduxlogger.createLogger()

const createStore = redux.createStore;

//redux action

const buy_item = () => {
    return {
        type: "BUY_ITEM",
        info: "first indexaction"
    }
}

const buy_book = () => {
    return {
        type: "BUY_BOOK",
        info: "buying a book"
    }
}

const buy_pen = () => {
    return {
        type: "BUY_PEN",
        info: "buying a pen"
    }
}

const initalvalue = {
    item: 10,
    book: 5,
    pen: 15
}

const ItemReducer = (state = initalvalue, action) => {
    switch (action.type) {
        case "BUY_ITEM":
            return { ...state, item: state.item - 1 };
        case "BUY_BOOK":
            return { ...state, book: state.book - 1 }
        case "BUY_PEN":
            return { ...state, pen: state.pen + 1 }

        default:
            return state;
    }
}

const store=createStore(ItemReducer, applyMiddleWare(logger))

console.log("initalvalue" , store.getState());

store.subscribe(()=>console.log("update state", store.getState()));

store.dispatch(buy_item());
store.dispatch(buy_book());
store.dispatch(buy_pen());

