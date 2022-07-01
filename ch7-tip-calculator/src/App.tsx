import { useState } from "react";

import dollar from "./assets/dollar.svg";
import people from "./assets/people.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-full bg-[#F6F6F3] grid place-items-center ">
      <div className="w-[750px] rounded-[20px] overflow-hidden drop-shadow-[0_0px_44px_rgba(148,146,120,0.23)]">
        <Section amount={4.02} label="Tip Amount" borderBottom />
        <Section amount={12.02} label="Total Per Person" />
        <div className="bg-[#F7F7F7] ">
          <div className="grid grid-cols-[6fr_4fr]">
            <BottomSection img={dollar} amount={100.11} label="Bill Amount" />
            <BottomSection img={people} amount={2} label="Number of People" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomSection({
  img,
  amount,
  label,
}: {
  img: string;
  amount: number;
  label: string;
}) {
  return (
    <div className="px-12 pt-16 pb-12">
      <div className="flex border-b-[3px] border-dashed border-[#B3B3B3] gap-10">
        <img src={img} />
        <span className="text-black-primary text-[62px] leading-[75px] font-bold">
          {amount}
        </span>
      </div>
      <h3 className="mt-2 font-bold text-center font-roboto">{label}</h3>
    </div>
  );
}

function Section({
  amount,
  label,
  borderBottom = false,
}: {
  amount: number;
  label: string;
  borderBottom?: boolean;
}) {
  return (
    <div className="px-1 bg-white">
      <div
        className={`${
          borderBottom
            ? "first:border-b first:border-solid first:border-[#DEDEDE]"
            : ""
        } py-14 pb-9 flex items-center justify-center gap-8`}
      >
        <div className="text-sm font-roboto">{label}</div>
        <div className="flex text-black-primary font-inter">
          <sub className="font-extrabold text-[53px] translate-y-4">$</sub>
          <h2 className="text-[82px] leading-tight">{amount}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
