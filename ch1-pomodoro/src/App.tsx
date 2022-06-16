import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./App.css";

import gear from "./images/gear.svg";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const populateNumber = (num: number) => (num < 10 ? "0" + num : num);
const sanitizeInput = (value: string) => {
  return value === "" || (value.startsWith("0") && !Number.isNaN(+value))
    ? value.substring(0, 2)
    : parseInt(value);
};

const Input = ({ value, onChange, onClick }: InputProps) => (
  <input
    value={value}
    className="w-full text-center bg-transparent outline-none"
    onChange={onChange}
    onClick={onClick}
  />
);

const TimerDisplay = ({
  time,
  setTime,
  isRunning,
  setIsRunning,
  setIsEditing,
}: {
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
  isRunning: boolean;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}) => {
  const minRaw = Math.floor(time / 60);
  const secRaw = time % 60;
  const min = populateNumber(minRaw);
  const sec = populateNumber(secRaw);

  console.log(secRaw, sec);

  const [editMin, setEditMin] = useState(min);
  const [editSec, setEditSec] = useState(sec);

  useEffect(() => {
    isRunning && setEditMin(min);
    isRunning && setEditSec(sec);
  }, [min, sec, isRunning]);

  function editTimer() {
    setIsRunning(false);
    setIsEditing(true);
  }

  return (
    <div className="flex justify-center w-2/3 text-white text-7xl h-fit">
      <Input
        value={isRunning ? min : editMin}
        onChange={(e) => {
          let value = sanitizeInput(e.target.value);
          if (Number.isNaN(value) || value > 99) return;
          setEditMin(value);
          setTime(+value * 60 + secRaw);
        }}
        onClick={editTimer}
      />
      :
      <Input
        value={isRunning ? sec : editSec}
        onChange={(e) => {
          let value = sanitizeInput(e.target.value);
          if (Number.isNaN(value) || value > 99) return;
          setEditSec(value);
          setTime(+value + minRaw * 60);
        }}
        onClick={editTimer}
      />
    </div>
  );
};

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(3);
  const [isDone, setIsDone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const id =
      isRunning &&
      setInterval(() => {
        setTime((t) => (t > 0 ? --t : 0));
      }, 1000);
    return () => clearInterval(typeof id === "number" ? id : 0);
  }, [isRunning]);

  useEffect(() => {
    if (time === 0) {
      setIsRunning(false);
      setIsDone(true);
      !isEditing &&
        setTimeout(() => {
          alert("Time's up!");
        }, 100);
    } else setIsDone(false);
  }, [time, isEditing]);

  return (
    <div className="grid min-h-full bg-dark place-content-center">
      <div
        className={`grid rounded-full w-80 aspect-square place-content-center ${
          isDone ? "bg-red-600" : "bg-green-700"
        }`}
      >
        <div className="w-[19rem] bg-dark aspect-square rounded-full flex flex-col items-center">
          <div className="flex-1"></div>
          <TimerDisplay
            time={time}
            setTime={setTime}
            isRunning={isRunning}
            setIsRunning={setIsRunning}
            setIsEditing={setIsEditing}
          />
          <div className="flex flex-col items-center justify-center flex-1 gap-3">
            <h3
              className="text-3xl text-white opacity-50 cursor-pointer"
              onClick={() => {
                setIsRunning((r) => !r);
                setIsEditing(false);
              }}
            >
              {isRunning || isDone ? "PAUSE" : "START"}
            </h3>
            <img src={gear} className="cursor-pointer w-9 opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
