import { useState } from "react";
import cover from "/podcast-cover.png";

const topics = [
  "1  ||  Trailer",
  "2  ||  James Q Quick Origin Story",
  "3  ||  Amy Dutton’s Origin Story",
  "4  ||  Tech Behind the Podcast",
  "5 || Tech Behind SelfTeach.me",
  "6 || Freelancing (Part 1)",
  "7 || Freelancing (Part 2)",
  "8 || The Tech Behind jamesqquick.com",
  "9 || The Tech Behind SelfTeach.me",
  "10 || Tech Behind SelfTeach.me",
];

function App() {
  const [checkedBoxes, setCheckedBoxes] = useState(
    new Array(topics.length).fill(false)
  );
  const [lastCheckBoxIndexSetToTrue, setLastCheckBoxIndexSetToTrue] =
    useState(-1);

  function toggleCheckBox(i: number, isShiftPressed: boolean) {
    setCheckedBoxes((cbs) => {
      let copy = cbs.slice();
      !cbs[i] && setLastCheckBoxIndexSetToTrue(i);
      cbs[i] && setLastCheckBoxIndexSetToTrue(-1);
      if (!isShiftPressed) {
        copy.splice(i, 1, !cbs[i]);
      } else {
        copy = copy.map((bool, j) =>
          i > lastCheckBoxIndexSetToTrue
            ? j > lastCheckBoxIndexSetToTrue && j <= i
              ? !bool
              : bool
            : j >= i && j < lastCheckBoxIndexSetToTrue
            ? !bool
            : bool
        );
      }

      return [...copy];
    });
  }

  return (
    <div className="min-h-full bg-[#F3F3F3] flex items-center justify-center isolate">
      <img
        src={cover}
        className="w-[550px] aspect-square drop-shadow-primary relative z-10"
      />
      <div className="bg-white w-[600px] aspect-[1.2/1] rounded-r-3xl drop-shadow-secondary py-14 pl-10 grid gap-8 content-start font-primary overflow-auto">
        <h1 className="text-xl text-[#A7A7A7] font-black tracking-wider">
          LISTEN TO ALL THE COMPRESSED.FM EPISODES
        </h1>
        <ul className="text-2xl text-[#4E4E4E] grid gap-6">
          {topics.map((topic, i) => (
            <li
              key={i}
              className={`flex cursor-pointer items-center gap-5 ${
                checkedBoxes[i] ? "line-through" : ""
              }`}
              onKeyDown={(e) => {
                if (
                  e.code === "Space" ||
                  (e.code === "Enter" && e.target instanceof HTMLLabelElement)
                ) {
                  e.preventDefault();
                  toggleCheckBox(i, e.shiftKey);
                }
              }}
              onClick={(e) => toggleCheckBox(i, e.shiftKey)}
            >
              <input
                type="checkbox"
                className="hidden peer"
                id={`box-${i}`}
                checked={checkedBoxes[i]}
                onChange={() => {}}
              />
              <label
                className="cursor-pointer inline-block w-10 bg-[length:90%_90%] bg-no-repeat bg-center aspect-square bg-unchecked-checkbox peer-checked:bg-checked-checkbox focus-visible:outline-none focus-visible:shadow-[inset_1px_1px_2px_3px_rgba(25_29_50_/_0.2)] rounded-2xl"
                htmlFor={`box-${i}`}
                tabIndex={i + 1}
                data-id={i}
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
