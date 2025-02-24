import React, { useContext, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from './TaskProvider';
import { EditReducer } from '../Reducers/ExpenseReducers';
import ExpenseList from './ExpenseList';


const EditExpense = () => {
    const { task, setTask } = useContext(TaskContext);
    const [state, dispatch] = useReducer(EditReducer, task);


    //edit state
    const [isEditing, setisEditing] = useState(false);
    const [currnetTask, setCurrentTask] = useState(null);
    const [newTask, setnewTask] = useState({ description: "", amount: "", catogory: "" });

    //handle Edit
    const handleEdit = (curtask) => {
        setisEditing(true);
        setCurrentTask(curtask);
        setnewTask({...curtask});
    }

    //save Edit Task
    const handleEditSave = () => {
        const updatedState = state.map((curtask) => {
            curtask === currnetTask ? newTask : curtask
        });
        dispatch({ type: "EDIT_TASK", oldValue: currnetTask, newValue: newTask })
        setTask(updatedState);
        setisEditing(false);
    }

    //navigate
    const navigate = useNavigate();
    const gotoAdd = () => {
        navigate("/AddExpense")
    }

    const GoToTotal = () => {
        navigate("/ExpenseSummary")
    }
    const updateContext = (updatedState) => {
        setTask(updatedState);
    };


    //handle remove
    const handleRemove = (value) => {
        if (window.confirm("Are You Sure To delete This Item?")) {
            dispatch({ type: 'REMOVE_TASK', value });
        }
    };

    //handle clear All
    const handleClearAll = () => {
        if (window.confirm("Are You sure All Data Clear ?")) {
            dispatch({ type: 'CLEAR_ALL' });

        }
    };

    return (
        <>
            <ExpenseList task={state} handleEdit={handleEdit} handleRemove={handleRemove} handleClearAll={handleClearAll} GoToTotal={GoToTotal} gotoAdd={gotoAdd} />
            {
                isEditing && (
                    <div className='fixed inset-0 flex item-center justify-center bg-black bg-opacity-50 mt-28 border '>
                        <div className='bg-white p-6 rounded shadow-md  w-1/3 border border-black bordee-double-2'>
                            <h1 className='text-lg font-bold mb-4'>Edit Task</h1>
                            <div className='mb-4'>
                                <label className='block'>Dscription:</label>
                                <input type="text" value={newTask.description} onChange={(e) => setnewTask({ ...newTask, description: e.target.value })} className='w-full  border  px-3 py-2 rounded' />
                            </div>
                            <div className='mb-4'>
                                <label className='block'>Amount:</label>
                                <input type="text" value={newTask.amount} onChange={(e) => setnewTask({ ...newTask, amount: e.target.value })} className='w-full  border  px-3 py-2 rounded' />
                            </div>

                            <div className='mb-4 '>

                                <label className='block'>Catogory:</label>
                                <select name="" id="" className='w-full  text-center border  px-3 py-2 rounded' value={newTask.catogory} onChange={(e) => setnewTask({ ...newTask, catogory: e.target.value })} >
                                    <option value="food">Food</option>
                                    <option value="transport">Transport</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className='flex justify-center mb-4'>
                                <button onClick={handleEditSave} className=' px-4 py-2 rounded bg-blue-500 text-white '>Save</button>
                                <button onClick={() => setisEditing(false)} className='px-4 rounded bg-red-500 text-white ml-4 '>Cancle</button>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    );
};

export default EditExpense;
