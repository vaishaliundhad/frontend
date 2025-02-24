// import React from 'react'
// import './App.css'
// import { useState } from 'react'
// import TaskCard from './Pages/TaskCard'
// import TaskForm from './Components/TaskForm'
// import TaskList from './Components/TaskList'
// import FilterBar from './Components/FilterBar'


// function App() {
//   const[taskData , setTaskData] = useState([]);

//   console.log(taskData);

//   return (
//     <>
//         {/* <TaskCard/> */}
//         <TaskForm  addTask={setTaskData}/>
//         {/* <TaskList/> */}
//         {/* <FilterBar/> */}
//     </>
//   )
// }

// export default App

// import React from 'react'
// import { BrowserRouter, Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
// // import TaskCard from './Pages/TaskCard'
// import TaskForm from './Components/TaskForm'
// import TaskList from './Components/TaskList'
// // import FilterBar from './Components/FilterBar'


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//     <Route path="/" element={<TaskForm />}/>
//     <Route path="TaskList" element={<TaskList />}/>
//     </Route>
//   )
// )



// function App() {


//   return (
//   <>
//    <RouterProvider router={router}></RouterProvider>
//   </>

//   )
// }

// export default App

import { useState } from 'react'
import './App.css'
import FilterBar from './Components/FilterBar'
import TaskForm from './Components/Taskform1'
import TaskList from './Components/TaskList1'
import TaskCard from './Components/TaskCard'
import { useEffect } from 'react'

function App() {

  const [todo, setTodo] = useState([])
  console.log("todo", todo)

  // Add Task
  let addTask = (value) => {
    setTodo([...todo, value])
  }

  //edit 

  const [editItem, setEditItem] = useState(null)

  //search and filter
  const [newfilter, setnewfilter] = useState([]);
  const [FilterData, setFilterData] = useState({});
  const { searchdata, selectvalue } = FilterData;
  const [selectTask, setselectTask] = useState(null);

  //   useEffect(()=>{
  //     if (searchdata && (selectvalue === "All" || selectvalue === "pending" || selectvalue === "complated")) {

  //       let newData = todo.filter((item)=>{
  //         return item.titlevalue === searchdata
  //       })
  //       setnewfilter(newData);
  //     }

  //     else if(searchdata === '' && selectvalue === 'completed'){
  //       let newData = todo.filter ((item)=> item.statusvalue === 'complated')

  //     setnewfilter(newData);
  //     }
  //     else if(searchdata === '' && selectvalue === 'pending'){
  //       let newData = todo.filter ((item)=> item.statusvalue === 'pending')

  //     setnewfilter(newData);
  //     }
  //     else{
  //       setnewfilter(todo);
  //     }
  //   },[todo, searchdata , selectvalue]
  // );

  useEffect(() => {
    if (searchdata && (selectvalue === "All" || selectvalue === "pending" || selectvalue === "completed")) {
      let newData = todo.filter((item) => {
        return item.titlevalue && item.titlevalue.toLowerCase() === searchdata.toLowerCase();
      });
      setnewfilter(newData);
    } else if (searchdata === '' && selectvalue === 'completed') {
      let newData = todo.filter((item) => item.statusvalue === 'completed');
      setnewfilter(newData);
    } else if (searchdata === '' && selectvalue === 'pending') {
      let newData = todo.filter((item) => item.statusvalue === 'pending');
      setnewfilter(newData);
    } else {
      setnewfilter(todo);
    }
  }, [todo, searchdata, selectvalue]);

  console.log("todo:", todo)
  return (
    <>
      <TaskForm addTask={addTask} setTodo={setTodo} />
      <TaskList todo={todo} setTodo={setTodo} FilterData={FilterData} setselectTask={setselectTask} />
      <FilterBar setfilter={setFilterData} />
      <TaskCard selectTask={selectTask} setselectTask={setselectTask} />
    </>
  )
}

export default App