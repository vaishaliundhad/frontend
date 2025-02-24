import React, { useReducer } from 'react'
import { TaskContext } from './TaskProvider';
// import { TaskContext } from '../Context/ExpenseContext';
import {  useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AddReducer from '../Reducers/ExpenseReducers';
import image2 from '../assets/image2.webp'


const initalstate = {
    description: "",
    amount: "",
    category: ""
}



const AddExpense = () => {

    const navigate = useNavigate();
    const gotoDisplay = () => {
        navigate("/EditExpense")
    }
    // const [description, setdescription] = useState("");
    // const [amount, setamount] = useState("");
    // const [catogory, setcatogory] = useState("");
    const [state, dispatch] = useReducer(AddReducer, initalstate);

    // const { task, setTask } = useContext(TaskContext);
   const {task, setTask}=useContext(TaskContext)

    const handlesubmit = (e) => {
        e.preventDefault();
        const newTask = {
            description: state.description,
            amount: state.amount,
            catogory: state.category
        };

        // if (!description || !amount || !category) {
        //     alert("Please fill out all fields!");
        //     return;
        // }

        setTask((prev) => [...prev, newTask]);

        dispatch({ type: 'RESET_DATA' });

        // setdescription("");
        // setamount("");
        // setcatogory("");

        if (task.includes(newTask)) {

            dispatch({ type: 'RESET_DATA' });
            return;
        }


    }
    return (
        <>
            <div className=''>
                <div className='container w-screen '>
                  
                    <div className='justify-items-center '>
                        <form action="" onSubmit={handlesubmit} className=' bg-cover bg-center' >
                            <div className='border border-sky p-8 mt-8  rounded  bg-gradient-to-r from-cyan-200 to-blue-400 shadow-2xl shadow-sky-600 ' style={{backgroundImage: `url(${image2})`}}>
                                <div className='text-center mb-6'>

                                    <h1 className='font-bold text-2xl '>Expense Tracker</h1>
                                </div>
                                <div className='flex'>

                                    <div className='text-center'>Description:</div>
                                    <div><input type="text" className='p-2  bg-gray-50 ml-2 rounded-sm' placeholder='Enter the Description' value={state.description} onChange={(e) => dispatch({ type: 'SET_DESCRIPTION', payload: e.target.value })} /></div>
                                </div>
                                <div className='flex mt-4 ml-4'>
                                    <div className='mt-4'>Amount:</div>
                                    <div><input type="number" className='p-2 bg-gray-50 mt-2 ml-4 rounded-sm' placeholder='Enter the Amount' value={state.amount} onChange={(e) => dispatch({ type: 'SET_AMOUNT', payload: e.target.value })} /></div>
                                </div>
                                {/* <div className='flex mt-6'>
                                    <div><input type="text" className='p-2 bg-gray-50 ml-6 rounded-sm' placeholder='Enter the category ' value={state.catogory} onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: e.target.value })} /></div>
                                    </div> */}
                                <div className='flex mt-6'>

                                    <div className=''>Catogory:</div>
                                    <select name="" id="" value={state.catogory} className='p-2 px-14 bg-gray-50 ml-6 rounded-sm'  onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: e.target.value })}>
                                        <option value="food">Food</option>
                                        <option value="transport">Transport</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className='text-center'>

                                    <button className='p-2 px-8 rounded bg-blue-500 mt-6 text-center text-white ring-2 ring-offset-2 ring-offset-blue-200 hover:ring-offset-blue-300 ml-8 ' onClick={() => { gotoDisplay() }}>Add </button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>


            </div>
        </>



    )
}

export default AddExpense
