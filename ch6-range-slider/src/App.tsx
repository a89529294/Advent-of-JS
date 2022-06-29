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
    />
  );
};

function App() {
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <div className="min-h-full bg-[#262529] grid place-items-center">
      <div className="rounded-[20px] shadow-[0_0_250px_0_#000] ">
        <CustomRange value={sliderValue} setValue={setSliderValue} />
      </div>
    </div>
  );
}

export default App;
