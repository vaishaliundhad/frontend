import React, { useEffect, useState, useRef } from 'react'


const Counter = () => {

    const [count, setcount] = useState(0)
    const [isRun, setisRun] = useState(false)

    const refInput = useRef()
    console.log(refInput);

    useEffect(() => {
        if (isRun) {
            refInput.current = setInterval(() => {
                setcount((count) => count + 1)
            }, 1000)
        }
        else {
            clearInterval(refInput.current)
        }
        return () => clearInterval(refInput.current)
    }, [isRun])


    const handlestart = () => {
        setisRun(true)
    }

    const handlepause = () => {
        setisRun(false)
    }

    const handlereset = () => {
        setisRun(false)
        setcount(0)
    }

    return (
        <div className='text-center mt-10'>
              <h1 className='heading text-xl'>Counter</h1>
            <p>Count:{count}</p>
            <div className='flex gap-4 align-center mt-4'>
                {/* <button onClick={() => clearInterval(refInput.current)} className=' bg-pink-200 p-2 ml-[30%]'>Counter</button> */}
                <button onClick={handlestart} className='bg-green-700 h-10 w-20 rounded ml-[35%]'>Start</button>
                <button onClick={handlepause} className='bg-yellow-500 h-10 w-20  rounded'>Pause</button>
                <button onClick={handlereset} className='bg-red-600 h-10 w-20  rounded'>Reset</button>
            </div>


        </div>
    )
}

export default Counter
