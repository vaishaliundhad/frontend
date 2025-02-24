import React, { useState } from 'react'

        
const Form = ({handleFormSubmit , inputValue , setInputValue}) => {

    // On Input change
    function handleInputChange(value) {
        setInputValue(value)
    }

    function handleInputSubmit(e){
        e.preventDefault();
        handleFormSubmit()
        setInputValue('')
    }

    return (
        <div className='text-center ml-96'>
            <form className='center' onSubmit={handleInputSubmit}>
                <div className='bg-purple-300 rounded-md  p-2 m-2 w-64'>
                    <input type="text" className='border border-solid border-black bg-purple-200 w-52' value={inputValue} onChange={(e) => handleInputChange(e.target.value)} />
                    <button type='submit' className='m-2  h-10 w-20 rounded-md bg-purple-200'>Add Task</button>
                </div>
            </form>
        </div>
    )
}

export default Form