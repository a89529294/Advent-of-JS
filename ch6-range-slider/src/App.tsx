import { useState, CSSProperties } from "react";
interface CSSPropertiesWithVars extends CSSProperties {
  "--occupied-track-length": string;
  "--adjustable-margin": string;
}

const CustomRange = ({
  value,
  setValue,
}: {
  value: number;
  setValue: (v: number) => void;
}) => {
  const [occupiedLength, setOccupiedLength] = useState(value);
  const styleObj: CSSPropertiesWithVars = {
    "--occupied-track-length": occupiedLength + "%",
    "--adjustable-margin": -12 + (occupiedLength / 100) * 24 + "px",
  };
  return (
    <input
      type="range"
      className="relative bg-transparent appearance-none cursor-pointer w-[700px] track thumb occupied-track focus:outline-none"
      value={value}
      onChange={(e) => {
        setValue(+e.target.value);
        setOccupiedLength(+e.target.value);
      }}
      style={styleObj}
      step={0.01}
    />
  );
};

function App() {
  const [sliderValue, setSliderValue] = useState(0);
  const getDisplayValue = () => {
    let copy = sliderValue.toFixed(2);
    copy = copy.length < 5 ? "0" + copy : copy;
    return copy;
  };
  return (
    <div className="min-h-full bg-[#262529] grid place-items-center font-source-sans-pro">
      <div className="rounded-[20px] shadow-[0_0_250px_0_#000] grid gap-16 pt-14 pb-16 px-20 justify-items-center">
        <h1 className="text-gold-primary text-[93px] leading-tight font-bold">
          <sup className="font-black text-[65px]">$</sup>
          {getDisplayValue()}
        </h1>
        <CustomRange value={sliderValue} setValue={setSliderValue} />
        <button className="text-white text-[30px] py-8 px-24 tracking-widest bg-[#333139] rounded-[100px] font-bold">
          BUY NOW
        </button>
      </div>
    </div>
  );
}

export default App;
