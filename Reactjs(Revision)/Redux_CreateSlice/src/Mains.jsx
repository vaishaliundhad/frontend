import './App.css'
import { Connect } from 'react-redux'


function Mains({ increment, decrement ,data}) {
    return (
        <>

            <div>{data}</div>
            <button className='p-4 bg-red-500'>Increment</button>
            <button className='p-4 bg-red-500 ml-4'>Decrement</button>
        </>
    )
}

const mapStateToProps =(state)=>{
        {
            data:state
        }
}

const mapDispatchToProps = (dispatch)=>{
    {
        increment:()=>dispatch({type:"INCREMENT"})
        Decrement:()=>dispatch({type:"DECREMENT"})
    }
}

export default connect(mapDispatchToProps , mapStateToProps)(Mains)