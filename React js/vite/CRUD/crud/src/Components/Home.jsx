import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { CgCloseO } from "react-icons/cg";
import { PiExport } from "react-icons/pi";

// import './styles.css'

const Home = () => {
    return (
        <div class="overflow-x-auto overflow-y-scroll bg-gray-100 ">
            <div class="">
                <header class="bg-gradient-to-r from-sky-500 to-indigo-500">
                    <nav class="navbar flex ">
                        <div class="navdiv flex justify-between ">
                            <div class="logo">

                                <h1 class="font-awesome font-serif text-3xl mt-4 ml-6 sm:text-center">Record</h1>

                            </div>
                            <ul className=" gap-14 justify-between hidden md:flex mt-4 ml-60 mb-6 item-center">
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
                        <div className='flex justify-center'>
                            <button className="bg-black text-white font-bold py-2 px-2 mt-4 rounded-md mb-8 ">Add User</button>

                        </div>

                    </div>
                    <hr className='border-gray-300 mb-4 ' />
                    <div className="flex flex-row  mb-4 w-full text-center sm:items-center">
                        <input type="text" placeholder="Type a name..." className="border border-gray-300 px-4 py-2 " />
                        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4  rounded-r">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>

                    </div>

                    <div className="flex flex-wrap flex-col sm:flex-row  gap-2 justify-end mb-4">
                        <button className="bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 rounded-md relative">
                            <CgCloseO className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xl" />
                            <span className="pl-4"> Delete Selected</span>

                        </button>
                        <button className=" relative bg-cyan-500  hover:bg-cyan-400  text-white font-bold py-2 px-4 rounded-md mx-2">
                            <PiExport className="absolute left-2 top-1/2 transform sm:w-auto -translate-y-1/2 text-xl" />
                            <span className="pl-4">Export CSV</span>

                        </button>
                        <button className="bg-blue-700 hover:bg-blue-800 text-white   font-bold py-2 px-4 rounded-md relative">
                            <FaPlus className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                            <span className="pl-4">Create Record</span>
                        </button>
                    </div>
                    <div className='overflow-x-auto'>


                        <table class="w-full border border-gray-300 min-w-max">
                            <thead>
                                <tr class="bg-gray-100">
                                    <th class="px-4 py-2 text-left border border-gray-300">#</th>
                                    <th class="px-4 py-2 text-left border border-gray-300">Name</th>
                                    <th class="px-4 py-2 text-left border border-gray-300">Email</th>
                                    <th class="px-4 py-2 text-left border border-gray-300">Contact</th>
                                    <th class="px-4 py-2 text-left border border-gray-300">Address</th>
                                    <th class="px-4 py-2 text-left border border-gray-300">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="hover:bg-gray-100">

                                    <td class="px-4 py-2 text-left border border-gray-300">30</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">Liam</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">Liam@emaple.com</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">9999998765</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">San francisco</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">

                                        <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-md relative mt-2 mr-2 pr-3">
                                            <FaRegEdit className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                                            <span className="pl-1">Edit</span>
                                        </button>

                                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md relative mt-2 mr-2 mr-3">
                                            <IoClose className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl" />
                                            <span className="pl-6">Delete</span>

                                        </button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-gray-100">

                                    <td class="px-4 py-2 text-left border border-gray-300">29</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">Ethan</td>
                                    <td class="px-4 py-2 text-left border border-gray-300 ">Ethan@gmail.com
                                    </td>
                                    <td class="px-4 py-2 text-left border border-gray-300">5554443333</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">Miami</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">
                                        <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-md relative mt-2 mr-2 pr-3">
                                            <FaRegEdit className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                                            <span className="pl-1">Edit</span>
                                        </button>
                                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md relative mt-2 mr-2 mr-3">
                                            <IoClose className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl" />
                                            <span className="pl-6">Delete</span>

                                        </button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-gray-100">
                                    <td class="px-4 py-2 text-left border border-gray-300">28</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">Sofia</td>
                                    <td class="px-4 py-2 text-left border border-gray-300 ">Sofia@example.com
                                        computer.</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">3332221111</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">Houston</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">
                                        <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-md relative mt-2 mr-2 pr-3">
                                            <FaRegEdit className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                                            <span className="pl-1">Edit</span>
                                        </button>
                                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md relative mt-2 mr-2 mr-3">
                                            <IoClose className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl" />
                                            <span className="pl-6">Delete</span>

                                        </button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-gray-100">

                                    <td class="px-4 py-2 text-left border border-gray-300">27</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">Logan</td>
                                    <td class="px-4 py-2 text-left border border-gray-300 ">Logan#example.com
                                        cleanliness.</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">9998887777</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">Dallas</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">
                                        <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-md relative mt-2 mr-2 pr-3">
                                            <FaRegEdit className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                                            <span className="pl-1">Edit</span>
                                        </button>
                                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md relative mt-2 mr-2 mr-3">
                                            <IoClose className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl" />
                                            <span className="pl-6">Delete</span>

                                        </button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-gray-100">

                                    <td class="px-4 py-2 text-left border border-gray-300">26</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">Grace</td>
                                    <td class="px-4 py-2 text-left border border-gray-300 ">Grace@exmaple.com</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">6667778888</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">Los Angles</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">
                                        <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-md relative mt-2 mr-2 pr-3">
                                            <FaRegEdit className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                                            <span className="pl-1">Edit</span>
                                        </button>
                                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md relative mt-2 mr-2 mr-3">
                                            <IoClose className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl" />
                                            <span className="pl-6">Delete</span>

                                        </button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-gray-100">

                                    <td class="px-4 py-2 text-left border border-gray-300">25</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">Noah</td>
                                    <td class="px-4 py-2 text-left border border-gray-300 ">Noah@exmaple.com</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">7778889999</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">Los Angles</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">
                                        <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-md relative mt-2 mr-2 pr-3">
                                            <FaRegEdit className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                                            <span className="pl-1">Edit</span>
                                        </button>
                                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md relative mt-2 mr-2 mr-3">
                                            <IoClose className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl" />
                                            <span className="pl-6">Delete</span>

                                        </button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-gray-100">

                                    <td class="px-4 py-2 text-left border border-gray-300">24</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">Madison</td>
                                    <td class="px-4 py-2 text-left border border-gray-300 ">Madison@example.com</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">4445556666</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">Seattle</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">
                                        <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-md relative mt-2 mr-2 pr-3">
                                            <FaRegEdit className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                                            <span className="pl-1">Edit</span>
                                        </button>
                                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md relative mt-2 mr-2 mr-3">
                                            <IoClose className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl" />
                                            <span className="pl-6">Delete</span>

                                        </button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-gray-100">

                                    <td class="px-4 py-2 text-left border border-gray-300">23</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">jack</td>
                                    <td class="px-4 py-2 text-left border border-gray-300 ">jack@example.com</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">1112223333</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">Nashville</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">
                                        <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-md relative mt-2 mr-2 pr-3">
                                            <FaRegEdit className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                                            <span className="pl-1">Edit</span>
                                        </button>
                                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md relative mt-2 mr-2 mr-3">
                                            <IoClose className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl" />
                                            <span className="pl-6">Delete</span>

                                        </button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-gray-100">

                                    <td class="px-4 py-2 text-left border border-gray-300">22</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">Emily</td>
                                    <td class="px-4 py-2 text-left border border-gray-300 ">Emily@example.com</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">6667778888</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">Orlando</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">
                                        <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-md relative mt-2 mr-2 pr-3">
                                            <FaRegEdit className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                                            <span className="pl-1">Edit</span>
                                        </button>
                                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md relative mt-2 mr-2 mr-3">
                                            <IoClose className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl" />
                                            <span className="pl-6">Delete</span>

                                        </button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-gray-100">

                                    <td class="px-4 py-2 text-left border border-gray-300">21</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">Daniel</td>
                                    <td class="px-4 py-2 text-left border border-gray-300 ">Danial@example.com</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">8887776666</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">New Orleans</td>
                                    <td class="px-4 py-2 text-left border border-gray-300">
                                        <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-md relative mt-2 mr-2 pr-3">
                                            <FaRegEdit className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                                            <span className="pl-1">Edit</span>
                                        </button>
                                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md relative mt-2 mr-2 mr-3">
                                            <IoClose className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl" />
                                            <span className="pl-6">Delete</span>

                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="flex flex-col  mt-4 justify-end items-end  mb-4  gap-2 w-full">
                        <div className='w-full text-center sm:text-start '>
                            <p className=''>Showing 1 to 10  of 30  entries (filtered from 10 total entries )</p>
                        </div>
                        <div class="pagination  border border-gray-300">
                            <button class="bg-white-400 text-gray-400 hover:bg-blue-500 hover:text-white rounded-l  font-bold ml-0 py-2 px-4  ">
                                Previous
                            </button>
                            <button class="bg-white hover:bg-blue-500 text-blue-600 hover:text-white font-bold ml-0 py-2 px-4  ">
                                1
                            </button>
                            <button class="bg-white hover:bg-blue-500 text-blue-600 hover:text-white font-bold py-2 ml-0 px-4 ">
                                2
                            </button>
                            <button class="bg-white hover:bg-blue-500 text-blue-600 hover:text-white font-bold py-2 ml-0 px-4 ">
                                3
                            </button>
                            <button
                                class="bg-gray-200 hover:bg-blue-500 text-blue-600 hover:text-white font-bold py-2 px-4 rounded-r ml-0  ">
                                Next
                            </button>
                        </div>
                    </div>


                    {/* <div class="flex justify-end mb-4">
                        <input type="text" placeholder="Type page number..." class="border border-gray-300 px-4 py-2 " />
                        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4  rounded-r">
                            Go
                        </button>
                    </div> */}
                </div>
            </div>


        </div >

    )
}

export default Home