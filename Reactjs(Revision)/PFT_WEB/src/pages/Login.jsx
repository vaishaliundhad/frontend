
// import React, { useState } from 'react'
// // import { useTransactions } from './TaskProvider';


// const Login = () => {

//   const {setIsAuth , isAuth , user, setcuruser}=useTransactions();

//   const [formdata , setformdata]=useState({
//     username:"",
//     password:""
//   })

//   console.log('formdata' , formdata);

//   const handlesubmit =(e)=>{
//     e.preventDefault();
//     if(formdata.username === user.username && formdata.password === user.password){
//       setIsAuth(true);
//       setformdata({username:"", password:""})
//       setcuruser(formdata)
//     }
//     else{
//       alert("invalid username and password plz signup")
//     }
//   }
  
//   return (
//     <div className='overflow-auto'>
//       {/* <h1 className="heading text-xl">This is the Login Page</h1> */}
//       <form onSubmit={handlesubmit}>
//         <div className="px-6 max-w-sm mx-auto bg-pink-400 rounded-xl shadow-slate-500 shadow-xl mt-4 bg-gradient-to-r from-indigo-500">
//           <div className="space-y-8">
//             <div>
//               <h1 className="text-3xl font-bold text-center pt-4">Login Page</h1>
//             </div>
//             <div>
//               <label className="block">UserName*</label>
//               <input
//                 type="username"
//                 placeholder="Enter the UserName"
//                 className="mt-1 rounded-md block w-full px-2 py-2 text-center bg-slate-100"
//                value={formdata.username}
//                onChange={(e)=>setformdata ((prev)=>({...prev , username:e.target.value}))}
//               />
//             </div>
//             <div>
//               <label className="block">Password*</label>
//               <input
//                 type="password"
//                 placeholder="Enter the Password"
//                 className="mt-1 rounded-md block w-full px-2 py-2 text-center bg-slate-100"
//                 value={formdata.password}
//                 onChange={(e)=>setformdata((prev)=>({...prev , password:e.target.value}))}
//               />
//             </div>
//             <div className='text-center'>
//             <button className="w-28 h-10 rounded-3xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 border-black mb-4 border-2 ">Login </button>
//             {/* <button className="w-28 h-10 rounded-3xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 border-black mb-4 border-2 ">Signup </button> */}
//             </div>

          
//           </div>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Login

