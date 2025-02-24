import React from 'react';

const TaskCard = ({ selectTask, setselectTask }) => {
  console.log("selectTask:", selectTask); 

  return (
    <div className="px-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg mt-4 bg-gradient-to-r from-cyan-500 to-blue-500">
     
      <div className="pt-4">
        <h1 className="text-4xl text-center italic font-bold text-white">Task Card</h1>
      </div>

      {/* Task Details */}
      <div className="border-2 border-solid border-gray-600 bg-gray-200 rounded-md mt-4 p-4">
        {selectTask ? (
          <>
            <p className="border border-solid border-gray-500 m-2 p-2 bg-gray-300">
              <strong>Title:</strong> {selectTask.titlevalue}
            </p>
            <p className="border border-solid border-gray-500 m-2 p-2 bg-gray-300">
              <strong>Description:</strong> {selectTask.descriptionvalue}
            </p>
            <p className="border border-solid border-gray-500 m-2 p-2 bg-gray-300">
              <strong>Status:</strong> {selectTask.statusvalue}
            </p>
          </>
        ) : (
          <p className="border border-solid border-gray-500 m-2 p-2 bg-gray-300">
            No task selected
          </p>
        )}
      </div>

    
      <div className="text-center mt-4">
        <button  onClick={() => {    setselectTask(null); }}   className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none">  Close</button>
      </div>
    </div>
  );
};

export default TaskCard;
