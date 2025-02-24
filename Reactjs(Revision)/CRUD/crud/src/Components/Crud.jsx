import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { CgCloseO } from "react-icons/cg";
import { PiExport } from "react-icons/pi";
import { useState, useEffect } from 'react'
import axios from 'axios';

// import PostRequest from '../Axios.jsx/PostRequest';
// // import './styles.css'
//start:- npm i json-server
// run mate :- npx json-server liveData.json

const Crud = () => {
    const [data, setdata] = useState([]);
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [contact, setcontact] = useState("")
    const [address, setaddress] = useState("")
    const [rename, setrename] = useState(false)

    // Pagination
    
    const [currentpage, setcurrentpage] = useState(1);
    const recordperpage = 10;
    const lastrecord = currentpage * recordperpage;
    const firstrecord = lastrecord - recordperpage;
    const currentrecord = data.slice(firstrecord, lastrecord)

    const nextpage = () => {
        if (currentpage < Math.ceil(data.length / recordperpage)) {
            setcurrentpage(currentpage + 1)
        }

    };


    const prevpage = () => {
        if (currentpage > 1) {
            setcurrentpage(currentpage - 1)
        }
    };

    const totalpage = Math.ceil(data.length / recordperpage);
    const handlepage = (pagenumber) => {
        setcurrentpage(pagenumber)
    }

    //post
    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            let response = axios.post('http://localhost:3000/profile', { name, email, contact, address })
            console.log(response.data);

        }
        catch (err) {
            console.log(err);

        }
    }
    const handleData = () => {

        let response = axios.get('http://localhost:3000/profile')
            .then((response) => {
                setdata(response.data)

            })
            .catch((err) => {
                console.log(err);

            })
        // console.log(response);
    }

    useEffect(() => {
        handleData()
    }, [])

    //delete user
    const deleteData = (id) => {
        axios.delete(`http://localhost:3000/profile/${id}`)
        // .then(()=> setUsers(users.filter(user => user.id !== id)))
        // .catch(err => console.error("Error deleting record:", err));
    }

    //edit user

    const handleEdit = (user) => {
        setrename(user)

    }

    const handleupdate = async () => {
        try {
            await axios.put(`http://localhost:3000/profile/${rename.id}`, rename)

        }
        catch (err) {
            console.log(err);

        }

    }
    return (
        <div className="overflow-x-auto overflow-y-scroll bg-gray-100">
            <div className="">
                <header className="bg-gradient-to-r from-sky-500 to-indigo-500">
                    <nav className="navbar flex ">
                        <div className="navdiv flex justify-between ">
                            <div className="logo">

                                <h1 className="font-awesome font-serif text-3xl mt-4 ml-6 ">Record</h1>

                            </div>
                            <ul className="flex gap-14 justify-between mt-4 ml-60 mb-6 item-center">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Contactus</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <div className="container mx-auto mt-10 ">
                    <div>
                        <h1 className="text-3xl font-bold text-center w-full  ">CRUD(create , Read , Update , Delete)</h1>
                        {/* <div className='ml-[490px]'>
                            <button className="bg-black text-white font-bold py-2 px-2 mt-4 rounded-md mb-8">Add User</button>

                        </div> */}

                    </div>

                    {/* edit */}
                    {
                        rename && (

                            // <div className="flex justify-center items-center min-h-screen bg-gray-900 inset-0 bg-opacity-50 transition-opacity">
                            <div className="fixed inset-0 flex item-center justify-center bg-black bg-opacity-50 mt-28 z-50 item-center">
                                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg  trasform scale-90 opacity-0 animate-zoomIn">
                                    <h2 className="text-3xl font-bold text-center mb-4">Update</h2>
                                    <form action="space-y-4 text-center item-center " >
                                        <div className='grid grid-cols-2 gap-4  mt-20'>

                                            <div className=''>
                                                <label>Name:</label>
                                                <input type="text" name="te" id="" value={rename.name} placeholder="Enter the name" className="w-full p-2 border border-gray-300 rounded text-center" onChange={(e) => setrename({ ...rename, name: e.target.value })} />
                                            </div>
                                            <div className=''>
                                                <label>Email:</label>
                                                <input type="email" name="" id="" value={rename.email} placeholder="Enter the email" className="w-full p-2 border border-gray-300 rounded text-center" onChange={(e) => setrename({ ...rename, email: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2 gap-4   '>

                                            <div className=''>
                                                <label>Contact:</label>
                                                <input type="number" name="" id="" value={rename.contact} placeholder="Enter the contact" className="w-full p-2 border border-gray-300 rounded text-center" onChange={(e) => setrename({ ...rename, contact: e.target.value })} />
                                            </div>
                                            <div className=''>
                                                <label>Address:</label>
                                                <input type="address" name="" id="" value={rename.address} placeholder="Enter the address" className="w-full p-2 border border-gray-300 rounded text-center" onChange={(e) => setrename({ ...rename, address: e.target.value })} />
                                            </div>
                                        </div>
                                        <button type='submit' className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600" onClick={handleupdate}>Update</button>
                                    </form>
                                </div>
                            </div>
                        )
                    }
                    <hr className='border-gray-300 mb-4' />
                    <div className="flex  mb-4">
                        <input type="text" placeholder="Type a name..." className="border border-gray-300 px-4 py-2 " />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4  rounded-r">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>

                    </div>


                    <div className="flex justify-end mb-4  z-10">
                        <button className="bg-red-500 hover:bg-red-700 z-10 text-white font-bold py-2 px-4 rounded-md relative">
                            <CgCloseO className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xl" />
                            <span className="pl-4"> Delete Selected</span>

                        </button>
                        <button className=" relative bg-cyan-500 z-10 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded-md mx-2">
                            <PiExport className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xl" />
                            <span className="pl-4">Export CSV</span>

                        </button>
                        <button className="bg-blue-700 z-10 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md relative">
                            <FaPlus className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                            <span className="pl-4">Create Record</span>
                        </button>
                    </div>

                    <table className="w-full border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2 text-left border border-gray-300">#</th>
                                <th className="px-4 py-2 text-left border border-gray-300">Name</th>
                                <th className="px-4 py-2 text-left border border-gray-300">Email</th>
                                <th className="px-4 py-2 text-left border border-gray-300">Contact</th>
                                <th className="px-4 py-2 text-left border border-gray-300">Address</th>
                                <th className="px-4 py-2 text-left border border-gray-300">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                currentrecord.map((item, index) => (
                                    <tr className="hover:bg-gray-100">

                                        <td className="px-4 py-2 text-left border border-gray-300">{index + 1}</td>
                                        <td className="px-4 py-2 text-left border border-gray-300">{item.name}</td>
                                        <td className="px-4 py-2 text-left border border-gray-300 ">{item.email}</td>
                                        <td className="px-4 py-2 text-left border border-gray-300">{item.contact}</td>
                                        <td className="px-4 py-2 text-left border border-gray-300">{item.address}</td>
                                        <td className="px-4 py-2 text-left border border-gray-300">
                                            <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-md relative mt-2 mr-2 pr-3" onClick={() => handleEdit(item)} >
                                                <FaRegEdit className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                                                <span className="pl-1">Edit</span>
                                            </button>
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md relative mt-2 mr-2 " onClick={() => deleteData(item.id)}>
                                                <IoClose className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl" />
                                                <span className="pl-6">Delete</span>

                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    <div className="flex  mt-4 justify-end mb-4">
                        <div className='mr-72'>
                            <p className=''>Showing 1 to 10  of 30  entries (filtered from 10 total entries )</p>
                        </div>
                        <div className="pagination  border border-gray-300">
                            <button className={`bg-gray-200 text-blue-500 hover:bg-blue-500 hover:text-white rounded-l  font-bold ml-0 py-2 px-4 ${currentpage === 1 ? 'cursor-not-allowed' : ""}`} onClick={prevpage} disabled={currentpage === 1}>
                                Previous
                            </button>
                            {
                                [...Array(totalpage)].map((_, index) => (

                                    <button className={`bg-white hover:bg-blue-500 text-blue-600 hover:text-white font-bold ml-0 py-2 px-4 ${currentpage === index + 1 ? "bg-blue-500 text-blue" : ""}`} onClick={() => handlepage(index + 1)}>
                                        {index + 1}
                                    </button>
                                ))
                            }

                            <button
                                className={`bg-gray-200 hover:bg-blue-500 text-blue-600 hover:text-white font-bold py-2 px-4 rounded-r ml-0  ${currentpage === totalpage ? "cursor-not-allowed " : ""}`} onClick={nextpage} disabled={currentpage === totalpage}>
                                Next
                            </button>
                        </div>
                    </div>



                </div>
            </div>


            {/* <PostRequest /> */}
            <div className="flex justify-center items-center min-h-screen bg-gray-100 space-y-2 ">
                <div className="bg-white shadow-lg rounded-lg p-6 w-96 space-y-4">
                    <h2 className="text-xl font-bold text-center mb-4">Submit Details</h2>
                    <form action="space-y-4" onSubmit={handleSubmit}>
                        <div className='flex flex-col'>
                            <label>Name:</label>
                            <input type="text" name="" id="" placeholder="Enter the name" className="w-full p-2 border border-gray-300 rounded text-center" onChange={(e) => setname(e.target.value)} />
                        </div>
                        <div className='flex flex-col'>
                            <label>Email:</label>
                            <input type="email" name="" id="" placeholder="Enter the email" className="w-full p-2 border border-gray-300 rounded text-center" onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div className='flex flex-col'>
                            <label>contact:</label>
                            <input type="number" name="" id="" placeholder="Enter the contact" className="w-full p-2 border border-gray-300 rounded text-center" onChange={(e) => setcontact(e.target.value)} />
                        </div>
                        <div className='flex flex-col'>
                            <label>Address:</label>
                            <input type="address" name="" id="" placeholder="Enter the address" className="w-full p-2 border border-gray-300 rounded text-center" onChange={(e) => setaddress(e.target.value)} />
                        </div>
                        {/* <button type='submit' className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">submit</button> */}
                        <div className='text-center'>
                            <button type='submit' className="bg-black text-white font-bold py-2 px-2 mt-4 rounded-md mb-8">Add User</button>

                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Crud

