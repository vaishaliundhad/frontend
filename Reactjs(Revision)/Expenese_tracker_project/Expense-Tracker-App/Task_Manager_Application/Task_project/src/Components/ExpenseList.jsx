import React from 'react'
import { RiArrowGoBackFill } from 'react-icons/ri';
import { TaskContext } from './TaskProvider';

const ExpenseList = ({ task, handleEdit, handleClearAll, handleRemove, GoToTotal, gotoAdd }) => {

  // const { task, handleEdit, handleClearAll, handleRemove, GoToTotal, gotoAdd } = useContext(TaskContext);
  return (
    <div>
      <table className="table-auto border-collapse border border-gray-300 w-full mt-4 bg-white shadow-md rounded shadow-gray-700">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Amount</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>


          {task.map((curtask, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-center"> {index + 1} </td>
              <td className="border border-gray-300 px-4 py-2"> {curtask.description}</td>
              <td className="border border-gray-300 px-4 py-2 text-right"> {curtask.amount}</td>
              <td className="border border-gray-300 px-4 py-2"> {curtask.catogory}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button className="p-2 px-4 rounded bg-emerald-600 text-white mr-2 ring-4 ring-teal-400" onClick={() => handleEdit(curtask)}>Edit</button>
                <button className="p-2 px-4 rounded bg-red-500 text-white ring-4 ml-4 ring-red-400" onClick={() => handleRemove(curtask)} >Delete </button>

              </td>
            </tr>
          ))

          }
        </tbody>
      </table>
      <div className="text-center">
        <button className="p-2 rounded-md bg-red-500 mt-4 ring-4 ring-red-400 text-white" onClick={handleClearAll}>Clear All</button>
        <button className='p-2 px-4 rounded-md bg-teal-400 mt-4 ring-4 ring-teal-200 text-white ml-4' onClick={GoToTotal}>Total</button>
      </div>
      <div className='text-center'>
        <button className="p-2.5 ml-4 px-4 rounded-md bg-blue-500 mt-4 ring-4 ring-blue-400 text-white" onClick={gotoAdd}><RiArrowGoBackFill /></button>
      </div>
    </div>
  )
}

export default ExpenseList
