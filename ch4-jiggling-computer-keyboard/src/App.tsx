import { useEffect, useRef, useState } from "react";
import { firstRow, fourthRow, secondRow, thirdRow } from "./rows";

export type Size = "sm" | "md" | "mdl" | "lg" | "xl" | "xxl";

// const rows = [firstRow, secondRow, thirdRow, fourthRow];
const rows = [firstRow, secondRow, thirdRow, fourthRow];

function pickRandomNum(limit: number) {
  return Math.floor(Math.random() * limit);
}

function pickRandomKey(arg: { row: number; col: number }) {
  let rowIdx = -1,
    row,
    colIdx = -1;
  function helper() {
    rowIdx = pickRandomNum(rows.length);
    row = rows[rowIdx];
    colIdx = pickRandomNum(row.length);
  }
  helper();
  while (arg.row === rowIdx && arg.col === colIdx) {
    helper();
  }
  return { row: rowIdx, col: colIdx };
}

function App() {
  const [rowCol, setRowCol] = useState(() => {
    return pickRandomKey({ row: -1, col: -1 });
  });
  const [keyPressed, setKeyPressed] = useState("");
  const keyboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => keyboardRef.current?.focus(), []);
  useEffect(() => {
    rows[rowCol.row][rowCol.col].code === keyPressed &&
      setRowCol(pickRandomKey(rowCol));
  }, [keyPressed, rowCol]);

  return (
    <div
      ref={keyboardRef}
      className="grid min-h-full place-items-center"
      tabIndex={0}
      onKeyDown={(e) => {
        console.log(e.code);
        setKeyPressed(e.code);
        if (e.code === "Tab") e.preventDefault();
      }}
    >
      <div className="bg-[#F6F6F6] w-10/12 py-5 px-4 lg:py-10 lg:px-9 grid gap-1 lg:gap-3">
        {rows.map((row, i) => (
          <KeyBoardRow key={i}>
            {row.map((k, j) => {
              const jiggle =
                i === rowCol.row && j === rowCol.col && keyPressed !== k.code;
              return (
                <Key key={j} size={k.size} jiggle={jiggle}>
                  {k.key}
                </Key>
              );
            })}
          </KeyBoardRow>
        ))}
      </div>
    </div>
  );
}

const KeyBoardRow = ({ children }: { children: React.ReactNode }) => (
  <ul className="flex gap-1 text-2xl lg:gap-3 font-inter">{children}</ul>
);

const Key = ({
  children,
  size = "sm",
  jiggle = false,
}: {
  children: string;
  size?: Size;
  jiggle?: boolean;
}) => {
  const sizesAndColors = {
    sm: `flex-[3_3_0px] text-teal aspect-square rounded-[25%] `,
    md: `flex-[5_5_0px] text-grey aspect-[5/3] rounded-[15%]`,
    mdl: `flex-[5.5_5.5_0px] text-grey aspect-[5.5/3] rounded-[13.3%]`,
    lg: `flex-[6_6_0px] text-grey aspect-[6/3] rounded-[12.5%]`,
    xl: `flex-[7.5_7.5_0px] text-grey aspect-[7.5/3] rounded-[10%]`,
    xxl: `flex-[7.67_7.67_0px] text-grey aspect-[7.67/3] rounded-[10%]`,
  };

  return (
    <li
      className={`grid cursor-pointer hover:bg-[#ffd200] hover:text-black bg-white place-items-center ${
        sizesAndColors[size]
      } ${jiggle ? "animate-jiggle bg-teal text-white" : ""}`}
    >
      {children}
    </li>
  );
};

export default App;
