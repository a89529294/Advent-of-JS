import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#E3E9F9] min-h-full grid place-items-center font-pro">
      <form className="bg-white rounded-lg pt-16 pb-7 px-8 grid gap-11 text-center">
        <h1 className="text-purple-primary font-black text-xl uppercase">
          Authorization CODE
        </h1>
        <h2 className="text-xl text-[#737580] -mt-8">
          Please enter the code that we sent to (***) *** - 2819.
        </h2>
        <div className="flex justify-center gap-5">
          <InputBox />
          <InputBox />
          <InputBox />
          <InputBox />
        </div>
      </form>
    </div>
  );
}

function InputBox() {
  return (
    <input
      type="number"
      className="w-20 aspect-square bg-[#F0F3FA] rounded-md shadow-[inset_0_0_4px_rgba(0,0,0,0.05)] text-purple-primary text-[60px] font-black text-center"
    />
  );
}

export default App;
