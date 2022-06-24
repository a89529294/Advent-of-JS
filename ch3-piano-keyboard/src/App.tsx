import { useState } from "react";
import Keyboard from "./components/Keyboard";

import key1 from "./audio/key-1.mp3";
import key2 from "./audio/key-2.mp3";
import key3 from "./audio/key-3.mp3";
import key4 from "./audio/key-4.mp3";
import key5 from "./audio/key-5.mp3";
import key6 from "./audio/key-6.mp3";
import key7 from "./audio/key-7.mp3";
import key8 from "./audio/key-8.mp3";
import key9 from "./audio/key-9.mp3";
import key10 from "./audio/key-10.mp3";
import key11 from "./audio/key-11.mp3";
import key12 from "./audio/key-12.mp3";
import key13 from "./audio/key-13.mp3";
import key14 from "./audio/key-14.mp3";
import key15 from "./audio/key-15.mp3";
import key16 from "./audio/key-16.mp3";
import key17 from "./audio/key-17.mp3";
import key18 from "./audio/key-18.mp3";
import key19 from "./audio/key-19.mp3";
import key20 from "./audio/key-20.mp3";
import key21 from "./audio/key-21.mp3";
import key22 from "./audio/key-22.mp3";
import key23 from "./audio/key-23.mp3";

const audioArray = [
  key1,
  key2,
  key3,
  key4,
  key5,
  key6,
  key7,
  key8,
  key9,
  key10,
  key11,
  key12,
  key13,
  key14,
  key15,
  key16,
  key17,
  key18,
  key19,
  key20,
  key21,
  key22,
  key23,
];

function produceRandomIndex<T>(length: number) {
  const arr = new Array(length).fill("");
  const indexArray = arr.map((item, i) => i);
  const result: number[] = [];
  arr.map(() => {
    const index = Math.floor(Math.random() * indexArray.length);
    result.push(indexArray.splice(index, 1)[0]);
  });
  return result;
}

function App() {
  const [arrayWithRandomNumber, setArrayWithRandomNumber] = useState(() =>
    produceRandomIndex(audioArray.length)
  );
  return (
    <div className="relative bg-[#37B2C3] min-h-full grid place-items-center">
      <Keyboard
        className="w-9/12"
        audioArray={audioArray}
        arrayWithRandomNumber={arrayWithRandomNumber}
      />
      <button
        className="absolute top-0 left-0 px-2 py-1 rounded-lg bg-slate-800 hover:opacity-80 text-yellow-50"
        onClick={() =>
          setArrayWithRandomNumber(produceRandomIndex(audioArray.length))
        }
      >
        Randomize Sound
      </button>
    </div>
  );
}

export default App;
