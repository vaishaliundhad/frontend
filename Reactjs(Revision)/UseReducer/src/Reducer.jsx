import React from 'react'


// const UseRducer = () => {
//     const intialstate = {
//         age: 20,
//         data: 40
//     }

    const Reducer = (state, action) => {
        switch (action.type) {
            case "incrementAge": return {
                ...state, age: state.age + 1
            }
            case "decrementAge": return {
                ...state, age: state.age - 1
            }
            case "incrementData": return {
                ...state, Data: state.Data + 1
            }
            case "decrementData": return {
                ...state, Data: state.Data - 1
            }
        }
    }


export default Reducer
