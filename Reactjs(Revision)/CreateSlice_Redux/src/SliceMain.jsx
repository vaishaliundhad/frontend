import './App.css'
import connect from 'react-redux'
import { increment } from './Redux/ProductSlice'


function SliceMains({ increment, decrement, data }) {
    return (
        <>
            <h1>This is App comeponets</h1>
            <div>{data}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

const mapStateToProps = (state) => {
    {
        data: state
    }
}

const mapDispatchToProps =(dispatch)=>{
{
    increment:()=>dispatch({type:"INCREMENT"})
    decrement:()=>dispatch({type:"DECREMENT"})
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Mains)