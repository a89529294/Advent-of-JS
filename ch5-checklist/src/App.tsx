import { useState } from "react";
import cover from "/podcast-cover.png";

const topics = [
  "1  ||  Trailer",
  "2  ||  James Q Quick Origin Story",
  "3  ||  Amy Dutton’s Origin Story",
  "4  ||  Tech Behind the Podcast",
  "5 || Tech Behind SelfTeach.me",
  "6 || Freelancing (Part 1)",
];

function App() {
  const [checkedBoxes, setCheckedBoxes] = useState(
    new Array(topics.length).fill(false)
  );

  function toggleCheckBox(i: number) {
    setCheckedBoxes((cbs) => {
      const copy = cbs.slice();
      copy.splice(i, 1, !cbs[i]);
      return [...copy];
    });
  }

  return (
    <div className="min-h-full bg-[#F3F3F3] flex items-center justify-center isolate">
      <img
        src={cover}
        className="w-[550px] aspect-square drop-shadow-primary relative z-10"
      />
      <div className="bg-white w-[600px] aspect-[1.2/1] rounded-r-3xl drop-shadow-secondary pt-14 pl-10 grid gap-8 content-start font-primary">
        <h1 className="text-xl text-[#A7A7A7] font-black tracking-wider">
          LISTEN TO ALL THE COMPRESSED.FM EPISODES
        </h1>
        <ul className="text-3xl text-[#4E4E4E] grid gap-6">
          {topics.map((topic, i) => (
            <li
              key={i}
              className="flex items-center gap-5"
              onKeyDown={(e) => {
                if (
                  e.code === "Space" ||
                  (e.code === "Enter" && e.target instanceof HTMLLabelElement)
                ) {
                  e.preventDefault();
                  toggleCheckBox(i);
                }
              }}
            >
              <input
                type="checkbox"
                className="hidden peer"
                id={`box-${i}`}
                checked={checkedBoxes[i]}
                onChange={() => {}}
              />
              <label
                className="inline-block w-10 bg-[length:90%_90%] bg-no-repeat bg-center aspect-square bg-unchecked-checkbox peer-checked:bg-checked-checkbox focus-visible:outline-none focus-visible:shadow-[inset_1px_1px_2px_3px_rgba(25_29_50_/_0.2)] rounded-2xl"
                htmlFor={`box-${i}`}
                tabIndex={i + 1}
                data-id={i}
                onClick={() => toggleCheckBox(i)}
              />
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
