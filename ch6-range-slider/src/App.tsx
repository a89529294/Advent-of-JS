import { useState } from "react";
// border: 1px solid #053a5f;
//   outline: 3px solid #053a5f;
//   outline-offset: 0.125rem;
const CustomRange = () => {
  return (
    <input
      type="range"
      className="bg-transparent appearance-none cursor-pointer w-[700px] track thumb focus:outline-none focus-thumb-border focus-thumb-outline"
    />
  );
};

function App() {
  return (
    <div className="min-h-full bg-[#262529] grid place-items-center">
      <div className="rounded-[20px] shadow-[0_0_250px_0_#000] ">
        <CustomRange />
      </div>
    </div>
  );
}

export default App;
