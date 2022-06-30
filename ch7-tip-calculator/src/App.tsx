import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-full bg-[#F6F6F3] grid place-items-center">
      <Section amount={4.02} label="Tip Amount" />
      <Section amount={12.02} label="Total Per Person" />
    </div>
  );
}

function Section({ amount, label }: { amount: number; label: string }) {
  return (
    <div className="flex items-center gap-8 first:border-b first:border-solid first:border-[#DEDEDE]">
      <div className="text-sm font-roboto">{label}</div>
      <div className="flex text-black-primary font-inter">
        <sub className="font-extrabold text-[53px] translate-y-4">$</sub>
        <h2 className="text-[82px] leading-tight">{amount}</h2>
      </div>
    </div>
  );
}

export default App;
