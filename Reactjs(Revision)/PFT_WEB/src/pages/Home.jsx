import React from 'react'
import image2 from '../assets/image2.webp'
import { useNavigate , Outlet , NavLink} from 'react-router'
const Home = () => {
    const navigate = useNavigate()
    const start = () => {
        navigate("/financeTracker");
    }
    return (
        <>
        <div className='overflow-x-auto'>

            <div className="fixed mt-[-30px] ml-[-25px]">
                <img src={image2} className="w-screen  h-screen object-cover" alt="Background" />
                <button className="absolute top-[415px] left-3/4 shadow-md hover:bg-blue-600 shadow-gray-400 p-2 px-4 bg-blue-800 text-white rounded-lg" onClick={start}>Get Start</button>
                {/* <div>
                <nav>
                    <ul className="flex flex-col gap-4">
                        
                        <NavLink to="/login" className="py-2 px-4 rounded mt-[-100px]  text-right">Login</NavLink>
                        <NavLink to="/signup" className="py-2 px-4 rounded hover:bg-gray-700">Signup</NavLink>
                    </ul>
                </nav>
                </div> */}
            <div className="p-6">
                <Outlet />
            </div>

            </div>
        </div>
        </>
    )
}

export default Home
