// import React, { useState } from 'react'
// // import { useTransactions } from './TaskProvider';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {

//     const { user, setuser, setcuruser } =  useAuth();

//     const navigate = useNavigate()
//     console.log("navigate", navigate);

//     const [formdata, setformdata] = useState({
//         username: "",
//         email: "",
//         password: ""
//     })


//     console.log("formdata", formdata);
//     console.log("user", user);

//     const handlesubmit = (e) => {
//         e.preventDefault();
//         setuser(formdata)
//         navigate("/login");
//         setcuruser(user);
//         setformdata({ username: "", email: "", password: "" })

//     }

//     return (
//         <div className=''>

//             <form className='mt-4 ' onSubmit={handlesubmit}>
//                 <div className="px-6 max-w-sm mx-auto bg-pink-400 rounded-xl shadow-slate-500 shadow-xl mt-4 bg-gradient-to-r from-indigo-500">
//                     <div className="pt-2">
//                         <h1 className="text-4xl text-center italic font-bold text-black mt-8 mb-4">SignUp</h1>
//                     </div>
//                     <div className="space-y-8">
//                         <div>
//                             <label className="block">UserName*</label>
//                             {/* <input type="text"  placeholder="Enter the Title" className={`mt-1 rounded-md block w-full px-2 py-2 text-center bg-slate-100 `} /> */}
//                             <input type="text" name="username" id="username" placeholder="Enter the username" className='mt-1 rounded-md block w-full px-2 py-2 text-center bg-slate-100' value={formdata.username} onChange={(e) => setformdata((prev => ({ ...prev, username: e.target.value })))} required />
//                         </div>
//                         <div>
//                             <label className='block'>Email*</label>
//                             <input type="email" name="email" id="email" placeholder="Enter the Email" className='mt-1 rounded-md block w-full px-2 py-2 text-center bg-slate-100' value={formdata.email} onChange={(e) => setformdata((prev) => ({ ...prev, email: e.target.value }))} required />
//                         </div>
//                         <div>
//                             <label className='block'>PassWord*</label>
//                             <input type="password" name="password" id="password" placeholder="Enter the password" className='mt-1 rounded-md block w-full px-2 py-2 text-center bg-slate-100' value={formdata.password} onChange={(e) => setformdata((prev) => ({ ...prev, password: e.target.value }))} required />
//                         </div>


//                         <div className="text-center">
//                             <button type="submit" className="w-28 h-10 rounded-3xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 border-black mb-4 border-2"> SignUp</button>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default SignUp
