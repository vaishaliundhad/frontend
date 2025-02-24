import React from 'react'
import { useState } from 'react'

const Taskform1 = ({ addTask }) => {

  const [titlevalue, setTitlevalue] = useState('')
  const [descriptionvalue, setDescriptionvalue] = useState('')
  const [statusvalue, setStatusvalue] = useState("pending")

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask({ titlevalue, descriptionvalue, statusvalue })
    setTitlevalue("")
    setDescriptionvalue("")
    setStatusvalue("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="px-6 max-w-sm mx-auto bg-pink-400 rounded-xl shadow-slate-500 shadow-xl mt-4 bg-gradient-to-r from-indigo-500">
        <div className="pt-2">
          <h1 className="text-4xl text-center italic font-bold text-white mt-8">Task Form</h1>
        </div>
        <div className="space-y-8">
          <div>
            <label className="block">Title*</label>
            <input type="text" onChange={(e) => setTitlevalue(e.target.value)} placeholder="Enter the Title" className={`mt-1 rounded-md block w-full px-2 py-2 text-center bg-slate-100 `} />
          </div>
          <div>
            <label className="block">Description*</label>
            <textarea onChange={(e) => setDescriptionvalue(e.target.value)} placeholder="Enter the Description" className={`block p-2 rounded-md w-full text-center mt-1 bg-slate-100 `} />
          </div>
          <div>
            <label className="block">Status*</label>
            <select onChange={(e) => setStatusvalue(e.target.value)} className={`block w-full rounded-md px-2 py-2 text-center mt-1 bg-slate-100 `}>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="text-center">
            <button type="submit" className="w-28 h-10 rounded-3xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 border-black mb-4 border-2"> Submit</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Taskform1




