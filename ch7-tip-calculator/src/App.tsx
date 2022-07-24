import { useState } from "react";

import dollar from "./assets/dollar.svg";
import people from "./assets/people.svg";

type TipPercentage = 5 | 10 | 15 | 20;

function formatDollar(num: number) {
  return num.toFixed(2);
}

function App() {
  const [preTipTotal, setPreTipTotal] = useState("0.00");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedTipPercentage, setSelectedTipPercentage] =
    useState<TipPercentage>(5);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  function calculate() {
    const tipAmount = +preTipTotal * (selectedTipPercentage / 100);
    const total = +preTipTotal + tipAmount;
    const totalPerPerson = total / numberOfPeople;
    setTipAmount(tipAmount);
    setTotalPerPerson(totalPerPerson);
  }

  return (
    <div className="min-h-full bg-[#F6F6F3] grid place-items-center py-10">
      <div className="w-[750px] rounded-[20px] overflow-hidden drop-shadow-[0_0_44px_rgba(148,146,120,0.23)]">
        <Section amount={tipAmount} label="Tip Amount" borderBottom />
        <Section amount={totalPerPerson} label="Total Per Person" />
        <div className="bg-[#F7F7F7] ">
          <div className="grid grid-cols-[6fr_4fr]">
            <InputSection
              img={dollar}
              amount={preTipTotal}
              onChange={(arg) => {
                const indexOfDot = arg.indexOf(".");
                if (Number.isNaN(+arg)) return;
                if (indexOfDot !== -1 && arg.slice(indexOfDot + 1).length > 2)
                  return;
                setPreTipTotal(arg);
              }}
              onBlur={() => {
                setPreTipTotal(formatDollar(+preTipTotal));
              }}
              label="Bill Amount"
            />
            <InputSection
              img={people}
              amount={numberOfPeople}
              onChange={(arg) => {
                if (Number.isNaN(+arg)) return;
                setNumberOfPeople(+arg);
              }}
              label="Number of People"
            />
          </div>
          <div className="bg-[#EEEEEE] flex justify-between px-9 py-5 border-t border-b border-solid border-[#DEDEDE]">
            <TipPercentButton
              percent={5}
              selectedTipPercentage={selectedTipPercentage}
              setSelectedTipPercentage={setSelectedTipPercentage}
            />
            <TipPercentButton
              percent={10}
              selectedTipPercentage={selectedTipPercentage}
              setSelectedTipPercentage={setSelectedTipPercentage}
            />
            <TipPercentButton
              percent={15}
              selectedTipPercentage={selectedTipPercentage}
              setSelectedTipPercentage={setSelectedTipPercentage}
            />
            <TipPercentButton
              percent={20}
              selectedTipPercentage={selectedTipPercentage}
              setSelectedTipPercentage={setSelectedTipPercentage}
            />
          </div>
          <div className="flex justify-end px-9 pt-9 pb-7">
            <CalculateButton
              onClick={calculate}
              disabled={numberOfPeople === 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CalculateButton({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      className={`py-[18px] px-24 bg-[#ED7861] drop-shadow-button rounded-2xl text-white text-2xl font-bold ${
        disabled ? "grayscale" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      Calculate
    </button>
  );
}

function TipPercentButton({
  percent,
  selectedTipPercentage,
  setSelectedTipPercentage,
}: {
  percent: TipPercentage;
  selectedTipPercentage: TipPercentage;
  setSelectedTipPercentage: (arg: TipPercentage) => void;
}) {
  const selected = percent === selectedTipPercentage;
  return (
    <button
      className={`font-roboto text-2xl font-bold py-4 px-14 drop-shadow-button rounded-2xl ${
        selected
          ? "bg-indigo-primary text-white"
          : "text-indigo-primary bg-white"
      }`}
      onClick={() => setSelectedTipPercentage(percent)}
    >
      {percent}%
    </button>
  );
}

function InputSection({
  img,
  amount,
  label,
  onChange,
  onBlur,
}: {
  img: string;
  amount: number | string;
  onBlur?: () => void;
  label: string;
  onChange: (arg: string) => void;
}) {
  return (
    <div className="px-12 pt-16 pb-12">
      <div className="flex border-b-[3px] border-dashed border-[#B3B3B3] gap-10">
        <img src={img} />
        <input
          className="text-black-primary text-[62px] leading-[75px] font-bold w-full bg-transparent focus-visible:outline-none"
          value={amount}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
        />
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
          <h2 className="text-[82px] leading-tight">{formatDollar(amount)}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
