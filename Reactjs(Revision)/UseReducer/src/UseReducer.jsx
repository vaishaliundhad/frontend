    import React from 'react'
    import { useReducer } from 'react'
    import Reducer from './Reducer'

    const UseReducer = () => {
        const [state , dispatch]= useReducer(Reducer , {age:40 , count:40})
        // console.log('usereducer' , state.age);

        const Reducer = (state, action) => {
            switch (action.type) {
                case "incrementAge": return {
                    ...state, age: state.age + 1
                }
                case "decrementAge": return {
                    ...state, age: state.age - 1
                }
                case "incrementCount": return {
                    ...state, Data: state.count + 1
                }
                case "decrementCount": return {
                    ...state, Data: state.count - 1
                }
            }
        }

        
    return (
        <div>
            <h1>This is UseReducer Hook </h1>
            <p>Age: {state.age}</p>
            <p>Count : {state.count}</p>
            <button onClick={()=>dispatch('incrementAge')}>Age Increment</button>
            <button onClick={()=>dispatch('decrementAge')}>Age Decrement</button>
            <button onClick={()=>dispatch('incrementCount')}>count Increment</button>
            <button onClick={()=>dispatch('decrementCount')}>count Decrement</button>
        
        </div>
    )
    }

    export default UseReducer
