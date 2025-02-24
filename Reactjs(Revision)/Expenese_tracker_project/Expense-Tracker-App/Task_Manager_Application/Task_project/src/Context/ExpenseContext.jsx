// import   React,{ createContext , useState } from 'react'
// export const TaskContext = createContext();

// const ExpenseContext = ({children}) => {
//     const[task , setTask]=useState([]);
//   return (

//       <TaskContext.Provider value={{task, setTask}}>
//           {children}
//       </TaskContext.Provider>

//   )
// }

// export default ExpenseContext

import React, { createContext, useState } from 'react'

// export const TaskContext= createContext();

// const ExpenseContext = ({children}) => {
//     const[task , setTask]=useState([]);
//   return (
//     <TaskContext.Provider value={{task , setTask}}>
//         {children}
//     </TaskContext.Provider>
//   )
// }

export const TaskContext = createContext()
const ExpenseContext = ({ chidren }) => {
  const [task, setTask] = useState([]);
  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {chidren}
    </TaskContext.Provider>
  )
}

export default ExpenseContext
