import React, {
  Dispatch,
  forwardRef,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
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

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      className="w-full text-center bg-transparent outline-none"
      ref={ref}
      {...props}
    />
  )
);

const TimerDisplay = ({
  time,
  setTime,
  isRunning,
  setIsRunning,
  setIsEditing,
  isEditing,
}: {
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
  isRunning: boolean;
  isEditing: boolean;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}) => {
  const minRaw = Math.floor(time / 60);
  const secRaw = time % 60;
  const min = populateNumber(minRaw);
  const sec = populateNumber(secRaw);

  const [editMin, setEditMin] = useState(min);
  const [editSec, setEditSec] = useState(sec);

  const minInputRef = useRef<HTMLInputElement>(null);
  const secInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    isRunning && setEditMin(min);
    isRunning && setEditSec(sec);
  }, [min, sec, isRunning]);

  useEffect(() => {
    if (!isEditing) {
      minInputRef.current?.blur();
      secInputRef.current?.blur();
    }
  }, [isEditing]);

  function editTimer() {
    setIsRunning(false);
    setIsEditing(true);
  }

  return (
    <div className="flex justify-center w-2/3 text-white text-7xl h-fit font-bebas sm:text-[196px]">
      <Input
        value={isRunning ? min : editMin}
        onChange={(e) => {
          let value = sanitizeInput(e.target.value);
          if (Number.isNaN(value) || value > 99) return;
          setEditMin(value);
          setTime(+value * 60 + secRaw);
        }}
        onBlur={() => setEditMin(min)}
        onClick={editTimer}
        ref={minInputRef}
      />
      :
      <Input
        value={isRunning ? sec : editSec}
        onChange={(e) => {
          let value = sanitizeInput(e.target.value);
          if (Number.isNaN(value) || value > 59) return;
          setEditSec(value);
          setTime(+value + minRaw * 60);
        }}
        onBlur={() => setEditSec(sec)}
        onClick={editTimer}
        ref={secInputRef}
      />
    </div>
  );
};

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(3);
  const [isEditing, setIsEditing] = useState(false);
  const appRef = useRef<HTMLDivElement>(null);
  const isDone = time <= 0;

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
      !isEditing &&
        setTimeout(() => {
          alert("Time's up!");
        }, 100);
    }
  }, [time, isEditing]);

  useEffect(() => {
    const startTimer = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        setIsEditing(false);
        setIsRunning(true);
      }
    };
    isEditing &&
      appRef.current &&
      appRef.current.addEventListener("keydown", startTimer);
    return () => appRef.current?.removeEventListener("keydown", startTimer);
  }, [isEditing, appRef.current]);

  return (
    <div className="grid min-h-full bg-dark place-content-center" ref={appRef}>
      <div
        className={`grid rounded-full w-80 aspect-square place-content-center ${
          isDone ? "bg-red-600" : "bg-green-700"
        } shadow-outer-circle sm:w-[520px]`}
      >
        <div className="w-[19rem] bg-inner-circle-dark aspect-square rounded-full flex flex-col items-center shadow-inner-circle sm:w-[500px]">
          <div className="flex-1"></div>
          <TimerDisplay
            time={time}
            isRunning={isRunning}
            isEditing={isEditing}
            setTime={setTime}
            setIsRunning={setIsRunning}
            setIsEditing={setIsEditing}
          />
          <div className="flex flex-col items-center justify-center flex-1 gap-3 sm:justify-start">
            <h3
              className="text-3xl text-white opacity-50 cursor-pointer hover:opacity-100 font-montserrat"
              onClick={() => {
                setIsEditing(false);
                if (isDone) return;
                setIsRunning((r) => !r);
              }}
            >
              {isDone ? "DONE" : isRunning ? "PAUSE" : "START"}
            </h3>
            <img src={gear} className="cursor-pointer w-9 opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
