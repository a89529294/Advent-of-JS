import { useState } from "react";

import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-full grid items-center px-10">
      <h1 className="font-mono text-center self-end">pick one</h1>
      <div className="grid grid-cols-layout grid-rows-[350px] gap-10">
        <ActionContainer imgURL={rock} alt="rock" />
        <ActionContainer imgURL={paper} alt="paper" />
        <ActionContainer imgURL={scissors} alt="scissors" />
      </div>
    </div>
  );
}

function ActionContainer({ imgURL, alt }: { imgURL: string; alt: string }) {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-solid border-gray-800">
      <img src={imgURL} alt={alt} className="w-9/12 h-4/5 object-contain" />
      <h2>{alt}</h2>
    </div>
  );
}

export default App;
