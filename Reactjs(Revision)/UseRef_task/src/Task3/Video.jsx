import React, { useState, useRef } from 'react';

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);
  const [ispause, setispause] = useState(false);


  const handleClick = async () => {
    const nextIsPlaying = !isPlaying;

    if (!ispause) {
      setispause(true);
      try {
        nextIsPlaying ? await ref.current.play() : ref.current.pause();
        setIsPlaying(nextIsPlaying); 
      } catch (error) {
        console.error("Error attempting to play:", error);
      } finally {
        setispause(false);
      }
    }
    };
    //     const handlestart = () => {
    //     setispause(false)
    // }


  return (
    <div className="text-center mt-8">
      <video width="400" ref={ref} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} controls muted className="mx-auto mb-4 rounded-lg shadow-lg"  >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />  </video>
      <button
        onClick={handleClick}
        className={`px-6 py-2 text-lg font-semibold rounded-lg mb-4 transition-colors duration-300 ${isPlaying ? 'bg-red-500' : 'bg-blue-500'
          }`}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>

    </div>
  );
};

export default Video;


// import React, { useEffect, useState, useRef } from 'react'


// const Counter = () => {

//     const [count, setcount] = useState(0)
//     const [isRun, setisRun] = useState(false)

//     const refInput = useRef()
//     console.log(refInput);

//     useEffect(() => {
//         if (isRun) {
//             refInput.current = setInterval(() => {
//                 setcount((count) => count + 1)
//             }, 1000)
//         }
//         else {
//             clearInterval(refInput.current)
//         }
//         return () => clearInterval(refInput.current)
//     }, [isRun])


//     const handlestart = () => {
//         setisRun(true)
//     }

//     const handlepause = () => {
//         setisRun(false)
//     }

//     const handlereset = () => {
//         setisRun(false)
//         setcount(0)
//     }

//     return (
//         <div className='text-center mt-10'>
//               <h1 className='heading text-xl'>Counter</h1>
//             <p>Count:{count}</p>
//             <div className='flex gap-4 align-center mt-4'>
//                 {/* <button onClick={() => clearInterval(refInput.current)} className=' bg-pink-200 p-2 ml-[30%]'>Counter</button> */}
//                 <button onClick={handlestart} className='bg-green-700 h-10 w-20 rounded ml-[35%]'>Start</button>
//                 <button onClick={handlepause} className='bg-yellow-500 h-10 w-20  rounded'>Pause</button>
//                 <button onClick={handlereset} className='bg-red-600 h-10 w-20  rounded'>Reset</button>
//             </div>


//         </div>
//     )
// }

// export default Counter
