import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increment, setCounter, reset } from "../../features/counter/counterSlice";

const Layout = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.value);
    const counterStatus = useSelector(state => state.counter.counterStarted);
    const [intervalId, setIntervalId] = useState(null);

    const handleStart = () => {
        if (counterStatus || intervalId !== null) return;
        //console.log(counterStatus);
       const id =  setInterval(() => {
            dispatch(increment());
        }, 1000);
        setIntervalId(id);
        dispatch(setCounter());
    };
    const handleStop = () => {
        if (!intervalId) return null;
        clearInterval(intervalId);
        setIntervalId(null);
        dispatch(setCounter());
    };
    const handleReset = () => {
        dispatch(reset());
    };

    return (
        <div className="action-buttons flex gap-2 items-center">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleStart}>Start</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleStop}>Stop</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleReset}>Reset</button>
            <h3>Time: {count}</h3>
        </div>
    );
}

export default Layout;