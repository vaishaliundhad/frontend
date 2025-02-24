import React, { useEffect, useState, useRef } from 'react';

const StopWatch = () => {
  const [time, setTime] = useState(0); 
  const [isRun, setIsRun] = useState(false);
  const timerRef = useRef(null); 

 
  useEffect(() => {
    if (isRun) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRun]);

  const handleInput = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setTime(value * 60); 
    }
  };

  const handlePause = () => {
    setIsRun(false);
  };

  const handleReset = () => {
    setIsRun(false);
    setTime(0);
  };


  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="text-center mt-10">
        <h1 className='heading text-xl'>Stop Watch</h1>
      {/* <input type="number" placeholder="Set Time in Minutes" className="border-2 p-2 w-full text-black text-center outline-none" onChange={handleInput} disabled={isRun}  /> */}
      <h1 className="text-2xl font-bold mt-4"> {time > 0 ? formatTime(time) : 'Time Up'}</h1>
      <div className="flex justify-center gap-4 align-center mt-4">
        <button onClick={()=> setIsRun(true)} className="bg-green-700 text-white h-10 w-20 rounded"> Start </button>
        <button onClick={handlePause} className="bg-yellow-500 text-white h-10 w-20 rounded">Pause </button>
        <button onClick={handleReset} className="bg-red-600 text-white h-10 w-20 rounded"> Reset </button>
      </div>
    </div>
  );
};

export default StopWatch;
