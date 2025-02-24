// import './App.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import TaskProvider from './Components/TaskProvider';
// import AddExpense from './Components/AddExpense';
// import EditExpense from './Components/EditExpense';
// import Navbar from './Components/Navbar';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navbar />, 
//     children: [
//       {
//         path: "/AddExpense",
//         element: <AddExpense />,
//       },
//       {
//         path: "/EditExpense", 
//         element: <EditExpense />,
//       }
//       // ,{
//       //   path:"*",
//       //   element={<h1>404 - </h1>/}
//       // }
//     ]
//   }
// ]);

// function App() {
//   return (
//     <TaskProvider>
//       <RouterProvider router={router} />
//     </TaskProvider>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AddExpense from './Components/AddExpense';
import EditExpense from './Components/EditExpense';
import TaskProvider from './Components/TaskProvider';
import ExpenseSummary from './Components/ExpenseSummary';

const App = () => {
    return (
        <TaskProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/AddExpense" element={<AddExpense />} />
                    <Route path="/EditExpense" element={<EditExpense />} />
                    <Route path="/ExpenseSummary" element={<ExpenseSummary/>} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </Router>
        </TaskProvider>
    );
};

export default App;
