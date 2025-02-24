import React from 'react'
import { useState } from 'react'

const Home = () => {
    const initialState = [{ value: 20 }, { data: 40 }]
    const [state, setState] = useState(initialState)

    const Increment =()=>{
        setState((prev)=>[
            {value:prev[0].value + 1},
            {data:prev[1].data}
        ])
    }
   
    const Decrement =()=>{
      setState((prev)=>[
        {value:prev[0].value-1},
        {data:prev[1].data}
      ])
    }
    
   const Increment1 =()=>{
     setState((prev)=>[
        {value:prev[0].value},
        {data:prev[1].data+1}
     ])
   }
  const Decrement2=()=>{
    setState((prev)=>[
        {value:prev[0].value},
        {data:prev[1].data-1}
    ])
  }
    return (

        <div className='text-center'>
            <h1 className='p-4 bg-blue-400 text-center'>This is App Components</h1>
            <p>value:{state[0].value}</p>
            <p>Data:{state[1].data}</p>
            <div className='m-4'>

                <button onClick={Increment} className='p-4 bg-red-500'>Increment</button>
                <button onClick={Decrement} className='p-4 bg-red-500 ml-4'>Decrement</button>
            </div>
            <div>

                <button onClick={Increment1} className='p-4 bg-yellow-500'>Increment</button>
                <button onClick={Decrement2} className='p-4 bg-yellow-500 ml-4'>Decrement</button>
            </div>

        </div>
    )
}

export default Home
