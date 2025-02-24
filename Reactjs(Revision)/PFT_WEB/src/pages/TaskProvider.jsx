

import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [task, setTask] = useState([]);

    return (
        <TaskContext.Provider value={{ task, setTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;


// import React,{ createContext , useState} from 'react'

// export const TaskContext= createContext();

// const TaskProvider = ({children}) => {
//     const[task , setTask]=useState([]);
//   return (
//     <TaskContext.Provider value={{task , setTask}}>
//         {children}
//     </TaskContext.Provider>
//   )
// }

// export default TaskProvider


