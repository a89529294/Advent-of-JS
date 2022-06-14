import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./App.css";

import gear from "./images/gear.svg";

const Input = ({
  value,
  onChange,
}: {
  value: string | number;
  onChange: (arg: any) => void;
}) => (
  <input
    value={value}
    className="w-full text-center bg-transparent outline-none"
    onChange={onChange}
  />
);

const TimerDisplay = ({
  time,
  setTime,
}: {
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
}) => {
  const minRaw = Math.floor(time / 60);
  const secRaw = time % 60;
  const min = minRaw < 10 ? "0" + minRaw : minRaw;
  const sec = secRaw < 10 ? "0" + secRaw : secRaw;

  return (
    <div className="flex justify-center w-2/3 text-white text-7xl h-fit">
      <Input
        value={min}
        onChange={(e) => {
          const newMin = +e.target.value < 100 ? +e.target.value : 99;
          setTime(newMin * 60 + secRaw);
        }}
      />
      :
      <Input
        value={sec}
        onChange={(e) => {
          const newSec = +e.target.value < 60 ? +e.target.value : 59;
          setTime(minRaw * 60 + newSec);
        }}
      />
    </div>
  );
};

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(900);
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
          <TimerDisplay time={time} setTime={setTime} />
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
