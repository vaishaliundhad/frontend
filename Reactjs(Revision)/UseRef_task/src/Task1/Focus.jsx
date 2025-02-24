


import React from 'react'
import { useRef } from 'react'

const Focus = () => {

    const inputref = useRef(null);

    const focusbtn = () => {
        inputref.current.focus();


    };

    return (
        <>
            <div className='text-center mt-6'>
                <div>
                    <input type="text" className='border-2 ' ref={inputref} />

                </div>
                <div className='mt-4 '>
                    <button className='bg-blue-400 w-16 rounded h-12' onClick={focusbtn}> Click</button>
                </div>
            </div>

        </>

    )
}

export default Focus