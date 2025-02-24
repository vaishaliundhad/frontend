// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Login = () => {
//   const { isAuth, setIsAuth } = useAuth();
//   const navigate = useNavigate();



//   const [username, setusername] = useState("");
//   const [password, setpassword] = useState("");
//   // const [error, seterror] = useState("");


//   const validusername = "bansi";
//   const validpassword = "admin@12345";


//   //handle login
//   const handlelogin = (e) => {
//     e.preventDefault();
//     if (username === validusername && password === validpassword) {

//       setIsAuth(true);
//       navigate("/");
//     }

//     //alert show error
//     else {
//       alert("Invalid Username or Password........!!!")
//     }
//   };

//   // Handle logout 
//   const handleLogout = () => {
//     setIsAuth(false);
//     navigate("/login");
//   };

//   return (
//     <div>
//       <h1 className="heading text-xl">This is the Login Page</h1>
//       <form onSubmit={handlelogin}>
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
//                 onChange={(e) => setusername(e.target.value)}
//                 value={username}
//               />
//             </div>
//             <div>
//               <label className="block">Password*</label>
//               <input
//                 type="password"
//                 placeholder="Enter the Password"
//                 className="mt-1 rounded-md block w-full px-2 py-2 text-center bg-slate-100"
//                 onChange={(e) => setpassword(e.target.value)}
//                 value={password}
//               />
//             </div>

//             <div className="text-center">
//               {isAuth ? (
//                 <button
//                   className="w-28 h-10 rounded-3xl bg-red-500 hover:bg-red-700 text-white"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <button
//                   className="w-28 h-10 rounded-3xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 border-black mb-4 border-2 "

//                 >
//                   Login
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'


const Login = () => {

  const { setIsAuth, isAuth, user, setcuruser } = useAuth();

  const [formdata, setformdata] = useState({
    username: "",
    password: ""
  })

  console.log('formdata', formdata);

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    try {
      const response = await axios.post("http://127.0.0.1:8888/login", formdata, {
          headers: {
              "Content-Type": "application/json"
             
          }
      });

      console.log("Response:", response.data);
  } catch (err) {
      console.error("Errors:", err);
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(formdata);

    // try {
    //     const response = await axios.post("http://127.0.0.1:8888/login", formdata, {
    //         headers: {
    //             "Content-Type": "application/json",
    //             "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    //         }
    //     });

    //     console.log("Response:", response.data);
    // } catch (err) {
    //     console.error("Error:", err);
    // }

    if (formdata.username === user.username && formdata.password === user.password) {
      setIsAuth(true);
      setformdata({ username: "", password: "" })
      setcuruser(formdata)

    }
    else {
      alert("invalid username and password plz signup")
    }
  }

  return (
    <div>
      <h1 className="heading text-xl">This is the Login Page</h1>
      <form onSubmit={handlesubmit}>
        <div className="px-6 max-w-sm mx-auto bg-pink-400 rounded-xl shadow-slate-500 shadow-xl mt-4 bg-gradient-to-r from-indigo-500">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-center pt-4">Login Page</h1>
            </div>
            <div>
              <label className="block">UserName*</label>
              <input
                type="username"
                placeholder="Enter the UserName"
                className="mt-1 rounded-md block w-full px-2 py-2 text-center bg-slate-100"
                value={formdata.username}
                onChange={(e) => setformdata((prev) => ({ ...prev, username: e.target.value }))}
              />
            </div>
            <div>
              <label className="block">Password*</label>
              <input
                type="password"
                placeholder="Enter the Password"
                className="mt-1 rounded-md block w-full px-2 py-2 text-center bg-slate-100"
                value={formdata.password}
                onChange={(e) => setformdata((prev) => ({ ...prev, password: e.target.value }))}
              />
            </div>
            <div className='text-center'>
              <button
                className="w-28 h-10 rounded-3xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 border-black mb-4 border-2 "

              >
                Login
              </button>
            </div>

            {/* <div className="text-center">
              {isAuth ? (
                <button
                  className="w-28 h-10 rounded-3xl bg-red-500 hover:bg-red-700 text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="w-28 h-10 rounded-3xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 border-black mb-4 border-2 "

                >
                  Login
                </button>
              )}
            </div> */}
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
