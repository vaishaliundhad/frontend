import React from "react";
import { toggleTheme } from "./Action";
import { BiSolidMoon } from "react-icons/bi";
import { IoSunny } from "react-icons/io5";

import { useSelector, useDispatch } from "react-redux";


const ThemeToggle = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.darkMode);

    return (
        <div className="text-center">

            <button
                onClick={() => dispatch(toggleTheme())}
                className={`px-4 py-2 mt-4 border-black border-2 rounded-lg transition mb-4
            ${darkMode ? "bg-blue-800 text-white border-gray-600" : " bg-yellow-400 text-black border-gray-300"}`}>
                {darkMode ? <BiSolidMoon/> : <IoSunny/>}
            </button>
        </div>
    );
}


export default ThemeToggle