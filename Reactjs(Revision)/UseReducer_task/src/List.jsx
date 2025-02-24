// import React, { useState } from 'react'
// import { MdDelete } from "react-icons/md";
// import { FaEdit } from "react-icons/fa";


// const List = ({ item, index, handleDeleteTask, handleEditItem }) => {
//     const [newValue, setnewValue] = useState(item);
//     const [isediting , setediting]=useState(false);

//     // const handleEditItem = (item) => {
//     //     setTodo((prev) =>
//     //         prev.map((item, idx) => (idx === index ? { ...item, editMode: true } : item))
//     //     );
//     // };
//     const handleSave = () => {
//         handleEditItem(index, newValue);
//         setediting(false);
//     };
//     return (
//         <div className='flex items-center'>
//             <div className='w-40'>
//                 {isediting ?(

//                     <input
//                         type="text"
//                         value={newValue}
//                         onChange={(e) => setnewValue(e.target.value)}
//                         className=""
//                     />

//                 ):(

//                 <span>{item}</span>
//                 )}

//                 {isediting ? (
//                   <button onClick={()=> handleSave} className='text-black h-10 w-16 bg-green-500'>save</button>
//                 ):(
                    
//                     <button className='text-xl text-blue-600 pl-2 ' onClick={() => setediting(true)}><FaEdit /></button>
//                 )}
//             </div>
//             {/* <button className='text-xl text-green-600'>< FaCheckCircle /></button> */}
//             {/* Delete Task */}
//             <button className='text-xl text-red-600 pl-2 ' onClick={() => handleDeleteTask(item)}><MdDelete /></button>
//         </div>
//     )
// }

// export default List


import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const List = ({ item, index, handleDeleteTask, handleEditItem }) => {
    const [isEditing, setIsEditing] = useState(false); 
    const [newValue, setNewValue] = useState(item);

    const handleSave = () => {
        handleEditItem(index, newValue); 
        setIsEditing(false); 
    };

    return (
        <div className="flex items-center">
            {isEditing ? (
                <input
                    type="text"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                />
            ) : (
                <span className="w-40">{item}</span>
            )}

            {isEditing ? (
                <button
                    onClick={handleSave}
                    className="text-black pl-2 h-10 w-16 rounded-md bg-green-500"
                >
                    Save
                </button>
                // <button onClick={()=> handleSave} className='text-black h-10 w-16 bg-green-500'>save</button>
            ) : (
                <button
                    onClick={() => setIsEditing(true)}
                    className="text-blue-600 pl-2"
                >
                    <FaEdit />
                </button>
            )}

            <button
                onClick={() => handleDeleteTask(index)}
                className="text-red-600 pl-2"
            >
                <MdDelete />
            </button>
        </div>
    );
};

export default List;
