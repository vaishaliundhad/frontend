import React from "react"


const initialState = 10

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_ITEM_1': return state + 1
        default: return state
    }
}

export default reducer