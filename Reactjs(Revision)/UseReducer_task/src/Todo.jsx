import React, { useEffect, useReducer, useState } from 'react';
import Form from './Form';
import List from './LIst';

import { getLocalStorageTodoData,  setLocalStorageTodoData } from './TodoLocalStorage';

const initialState = getLocalStorageTodoData();

// Reducer function
function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            if (!action.value || state.includes(action.value)) {
                return state; 
            }
            return [...state, action.value];

         case 'EDIT_TASK':
            return state.map((task,index)=>{
                index === action.index ?{...task, text:action.newValue , editMode:false}:task
            })  
        case 'DELETE_TASK':
            return state.filter((item) => item !== action.value);
        case 'CLEAR':
            return [];

        case 'SAVE_EDIT':
            return {
                ...state,
                task:state.task.map((task))
            }
        default:
            return state;
    }
}

const Todo = () => {
    const [task, dispatch] = useReducer(todoReducer, initialState);

    // Input Value
    const [inputValue, setInputValue] = useState('');

    // Save task data to local storage 
    useEffect(() => {
        setLocalStorageTodoData(task);
    }, [task]);

    // Form submit
    function handleFormSubmit() {
        dispatch({ type: 'ADD_TASK', value: inputValue });
        setInputValue('');
    }

    // Delete task
    function handleDeleteTask(value) {
        dispatch({ type: 'DELETE_TASK', value });
    }

    function handleEditItem(newValue , index){
        dispatch({ type: 'EDIT_TASK', index: 1, newValue: 'Updated Task Text' });

    }
    // Clear all task
    function handleClearTask() {
        dispatch({ type: 'CLEAR' });
    }

    return (
        <div className='text-center'>
            <div>
                <h1 className='center font-bold text-black text-2xl heading bg-purple-300'>To Do List App</h1>
              
                {/* Form */}
                <Form handleFormSubmit={handleFormSubmit} inputValue={inputValue} setInputValue={setInputValue} className="text-center" />
                {/* Add Task */}
                <div className='flex flex-col items-center'>
                    {task.map((item, index) => (
                        <div key={index} className='bg-purple-200 m-2 p-2 rounded-lg w-72 flex'>
                            <List item={item} handleDeleteTask={handleDeleteTask} handleEditItem={handleEditItem}/>
                        </div>
                    ))}
                </div>
                <div className='center'>
                    <button className='bg-purple-300 p-1.5 rounded-md' onClick={handleClearTask}>
                        Clear All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Todo;