// import React, { useState } from 'react';
// import { IoSearch } from "react-icons/io5";

// const FilterBar = ({ setfilter ,selectTask }) => {
//   const [searchdata, setsearchdata] = useState('');
//   const [selectvalue, setselectvalue] = useState('All');


//   const handlesearch = () => {
//     setfilter({ searchdata, selectvalue }); 
//     setsearchdata('');  
//   };

//   return (

//     <div className='px-6 mt-28 rounded-md h-52 max-w-sm mx-auto bg-gradient-to-r from-yellow-400 via-indigo-400 to-orange-400'>
//       <div className='pt-2'>
//         <h1 className='text-4xl text-center italic font-bold text-white mt-4 mb-7'>FilterBar</h1>
//       </div>
      
//       {/* Search Input */}
//       <div className='bg-purple-400 m-2 p-2'>
//         <input type="search" onChange={(e) => setsearchdata(e.target.value)} value={searchdata} className='w-64 p-0.5' placeholder="Search by title..."/>
//         <button className='p-3 -mt-1' onClick={handlesearch}>  <IoSearch /></button>
//       </div>

    
//       {/* <select 
//         onChange={(e) => setselectvalue(e.target.value)} 
//         value={selectvalue} 
//         className='ml-2'>
//         <option value="All">All</option>
//         <option value="Pending">Pending</option>
//         <option value="Completed">Completed</option>
//       </select> */}
//     </div>
//   );
// };

// export default FilterBar;


// import React, { useState } from 'react';
// import { IoSearch } from "react-icons/io5";

// const FilterBar = ({ setfilter, selectTask }) => {
//   const [searchdata, setsearchdata] = useState('');
//   const [selectvalue, setselectvalue] = useState('All');

//   const handlesearch = () => {
//     // setfilter({ searchdata, selectvalue });
//     // setsearchdata('');

//     const filteredData = data.filter((item) =>
//       item.title.toLowerCase().includes(searchdata.toLowerCase())
//     );
//     setfilter(filteredData);
    
//   };

//   if (selectTask) {
//     return null; 
//   }

//   return (
//     <div className='px-6 mt-28 rounded-md h-52 max-w-sm mx-auto bg-gradient-to-r from-yellow-400 via-indigo-400 to-orange-400'>
//       <div className='pt-2'>
//         <h1 className='text-4xl text-center italic font-bold text-white mt-4 mb-7'>FilterBar</h1>
//       </div>
      
//       {/* Search Input */}
//       <div className='bg-purple-400 m-2 p-2'>
//         <input
//           type="search"
//           onChange={(e) => setsearchdata(e.target.value)}
//           value={searchdata}
//           className='w-64 p-0.5'
//           placeholder="Search by title..."
//         />
//         <button className='p-3 -mt-1' onClick={handlesearch}>
//           <IoSearch />
//         </button>
//       </div>

//     </div>
//   );
// };

// export default FilterBar;


import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const FilterBar = ({ setfilter, selectTask, data }) => {
  const [searchdata, setsearchdata] = useState("");

  const handlesearch = () => {
    // Filter the data array based on the search term
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchdata.toLowerCase())
    );

    // Pass the filtered data to the parent via setfilter
    setfilter(filteredData);
  };

  if (selectTask) {
    return null; // Hide filter bar if a task is selected
  }

  return (
    <div className="px-6 mt-28 rounded-md h-52 max-w-sm mx-auto bg-gradient-to-r from-yellow-400 via-indigo-400 to-orange-400">
      <div className="pt-2">
        <h1 className="text-4xl text-center italic font-bold text-white mt-4 mb-7">
          FilterBar
        </h1>
      </div>

      {/* Search Input */}
      <div className="bg-purple-400 m-2 p-2 flex items-center">
        <input
          type="search"
          onChange={(e) => setsearchdata(e.target.value)}
          value={searchdata}
          className="w-64 p-0.5 rounded"
          placeholder="Search by title..."
        />
        <button
          className="p-3 ml-2 bg-white rounded hover:bg-gray-200"
          onClick={handlesearch}
        >
          <IoSearch />
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
