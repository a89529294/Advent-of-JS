import React, { useEffect, useState } from "react";
import "./App.css";

import gear from "./images/gear.svg";

const TimerDisplay = ({ time }: { time: number }) => {
  const minRaw = Math.floor(time / 60);
  const secRaw = time % 60;
  const min = minRaw < 10 ? "0" + minRaw : minRaw;
  const sec = secRaw < 10 ? "0" + secRaw : secRaw;
  return (
    <div className="flex justify-center w-2/3 text-white text-7xl h-fit">
      <span>{min}</span>:<span>{sec}</span>
    </div>
  );
};

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(12);
  useEffect(() => {
    const id =
      isRunning &&
      setInterval(() => {
        setTime((t) => --t);
      }, 1000);
    return () => clearInterval(typeof id === "number" ? id : 0);
  }, [isRunning]);

  return (
    <div className="grid min-h-full bg-dark place-content-center">
      <div className="grid bg-green-700 rounded-full w-80 aspect-square place-content-center">
        <div className="w-[19rem] bg-dark aspect-square rounded-full flex flex-col items-center">
          <div className="flex-1"></div>
          <TimerDisplay time={time} />
          <div className="flex flex-col items-center justify-center flex-1 gap-3">
            <h3
              className="text-3xl text-white opacity-50 cursor-pointer"
              onClick={() => setIsRunning((r) => !r)}
            >
              {isRunning ? "PAUSE" : "START"}
            </h3>
            <img src={gear} className="cursor-pointer w-9 opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
