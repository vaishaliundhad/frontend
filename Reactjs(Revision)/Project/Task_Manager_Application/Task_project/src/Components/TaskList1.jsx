import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TaskList = ({ todo, setTodo, FilterData , setselectTask}) => {
    const { searchdata, selectValue } = FilterData;
    const [filterData, setFilterData] = useState([]);


    function DeleteTask(ind) {
        const removeTask = todo.filter((item, index) => index !== ind)
        setTodo(removeTask);
    }


    //  Edit Mode

    const handleEditItem = (index) => {
        setTodo((prev) =>
            prev.map((item, idx) => (idx === index ? { ...item, editMode: true } : item))
        );
    };

    //save
    const SaveEditData = (index, updatedTask, updatedDescription, updatedStatus) => {
        setTodo((prev) =>
            prev.map((item, idx) =>
                idx === index
                    ? { ...item, titlevalue: updatedTask, descriptionvalue: updatedDescription, statusvalue: updatedStatus, editMode: false }
                    : item
            )
        );
    };

    // Toggle Task Status
    const toggleStatus = (index) => {
        setTodo((prev) =>
            prev.map((item, idx) =>
                idx === index
                    ? {
                        ...item,
                        statusvalue:
                            item.statusvalue === "Pending" ? "Completed" : "Pending",
                    }
                    : item
            )
        );
    };

    // Filter Tasks
    useEffect(() => {
        const filteredTasks =
            selectValue === "All"
                ? todo.filter((item) =>
                    item.titlevalue.toLowerCase().includes(searchdata.toLowerCase())
                )
                : todo.filter(
                    (item) =>
                        item.statusvalue === selectValue &&
                        item.titlevalue.toLowerCase().includes(searchdata.toLowerCase())
                );

        setFilterData(filteredTasks.length > 0 ? filteredTasks : todo);
    }, [todo, searchdata, selectValue]);

    return (
        <div className="px-6 mt-36 rounded-md max-w-sm mx-auto bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
            <h1 className="text-4xl text-center italic font-bold text-white mt-4 mb-7">  Task List  </h1>
            <div className="w-full text-center rounded-md p-2 m-2">
                {filterData.length === 0 ? (
                    <p>No Data Available</p>
                ) : (
                    filterData.map((item, index) => (
                        <div key={index} className="mb-4 text-center">
                            {item.editMode ? (
                                <div>
                                    <input type="text" className="text-center block mb-2" defaultValue={item.titlevalue} onChange={(e) => (item.titlevalue = e.target.value)} />
                                    <input type="text" className="text-center block mb-2" defaultValue={item.descriptionvalue} onChange={(e) => (item.descriptionvalue = e.target.value)} />
                                    <select defaultValue={item.statusvalue} onChange={(e) => (item.statusvalue = e.target.value)}
                                        className="text-center block mb-2 p-2 border rounded">
                                        <option value="Pending">Pending</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                    <button className="w-28 h-10 rounded-3xl bg-gradient-to-r from-teal-400 to-blue-500 mt-4 text-white border-black mb-4 border-2" onClick={() => SaveEditData(index, item.titlevalue, item.descriptionvalue, item.statusvalue)} > Save    </button>
                                </div>
                            ) : (
                                <div>
                                    <table className="w-full mb-4 text-center">
                                        <thead>
                                            <tr>
                                                <th className="border p-2">Title</th>
                                                <th className="border p-2">Description</th>
                                                <th className="border p-2">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border p-2">{item.titlevalue}</td>
                                                <td className="border p-2">{item.descriptionvalue}</td>
                                                <td className="border p-2">{item.statusvalue}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="flex justify-center gap-2">
                                        <button onClick={() => toggleStatus(index)} className={`p-2 rounded-md ${item.statusvalue === "Pending" ? "bg-yellow-300" : "bg-green-500"}`}  >{item.statusvalue} </button>
                                        <button className="bg-blue-400 rounded-md p-2" onClick={() => handleEditItem(index)}>  <FaEdit /></button>
                                        <button className="bg-red-400 rounded-md p-2" onClick={() => DeleteTask(index)} >   <MdDelete /></button>
                                        {/* <button className=" rounded-md p-2" onClick={() => setselectTask(item)} > view Details</button> */}
                                        <button className="rounded-md p-2 bg-blue-600" onClick={() => setselectTask(item)}>
                                            View Details
                                        </button>

                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TaskList;

