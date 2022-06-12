import "./App.css";

import gear from "./images/gear.svg";

const TimerDisplay = () => (
  <div className="flex w-2/3 justify-center text-white text-7xl h-fit">
    <span>15</span>:<span>00</span>
  </div>
);

function App() {
  return (
    <div className="bg-dark min-h-full grid place-content-center">
      <div className="w-80 aspect-square bg-green-700 rounded-full grid place-content-center">
        <div className="w-[19rem] bg-dark aspect-square rounded-full flex flex-col items-center">
          <div className="flex-1"></div>
          <TimerDisplay />
          <div className="flex-1 flex gap-3 flex-col">
            <h3 className="opacity-50 text-white ">START</h3>
            <img src={gear} className="opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
