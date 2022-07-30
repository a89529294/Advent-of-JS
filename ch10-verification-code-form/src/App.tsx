import React from "react";
import { useReducer, useRef, useState } from "react";

// TODO implement copy & paste!
function App() {
  const [codes, setCodes] = useReducer(reducer, new Array(4).fill(""));
  const ref0 = useRef<HTMLInputElement>(null);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
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
          <InputBox
            pos={0}
            value={codes[0]}
            setValue={setCodes}
            ref={ref0}
            refs={[ref0, ref1, ref2, ref3]}
            setCodes={setCodes}
          />
          <InputBox
            pos={1}
            value={codes[1]}
            setValue={setCodes}
            ref={ref1}
            refs={[ref0, ref1, ref2, ref3]}
            setCodes={setCodes}
          />
          <InputBox
            pos={2}
            value={codes[2]}
            setValue={setCodes}
            ref={ref2}
            refs={[ref0, ref1, ref2, ref3]}
            setCodes={setCodes}
          />
          <InputBox
            pos={3}
            value={codes[3]}
            setValue={setCodes}
            ref={ref3}
            refs={[ref0, ref1, ref2, ref3]}
            setCodes={setCodes}
          />
        </div>
      </form>
    </div>
  );
}

const InputBox = React.forwardRef(
  (
    {
      pos,
      value,
      setValue,
      refs,
      setCodes,
    }: {
      pos: number;
      value: numOrVoidStr;
      setValue: React.Dispatch<Action>;
      refs: React.RefObject<HTMLInputElement>[];
      setCodes: React.Dispatch<Action>;
    },
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        type="number"
        className="w-20 aspect-square bg-[#F0F3FA] rounded-md shadow-[inset_0_0_4px_rgba(0,0,0,0.05)] text-purple-primary text-[60px] font-black text-center"
        value={value}
        onChange={(e) => {
          setValue({
            payload: e.target.value === "" ? e.target.value : +e.target.value,
            pos,
            refs,
            kind: "typedIn",
          });
        }}
        autoFocus={pos === 0}
        ref={ref}
        onPaste={(e) => {
          e.preventDefault();
          const contentArr: string[] = e.clipboardData
            .getData("text")
            .slice(0, 4)
            .split("");
          while (contentArr.length < 4) contentArr.push("");
          let validContent = true;
          const contentArrModified: (number | "")[] = [];
          for (let i = 0; i < contentArr.length; i++) {
            if (Number.isNaN(+contentArr[i])) {
              validContent = false;
              break;
            } else
              contentArrModified[i] =
                contentArr[i] === "" ? "" : +contentArr[i];
          }
          if (!validContent) return;
          else {
            setCodes({
              kind: "copyAndPaste",
              payload: contentArrModified,
              refs,
            });
          }
        }}
      />
    );
  }
);

function reducer(state: numOrVoidStr[], action: Action): numOrVoidStr[] {
  if (action.kind === "copyAndPaste") {
    action.refs[
      action.payload.indexOf("") === -1
        ? action.payload.length - 1
        : action.payload.indexOf("")
    ].current?.focus();
    return action.payload;
  } else {
    action.payload &&
      action.refs[
        action.pos + 1 < action.refs.length ? action.pos + 1 : action.pos
      ].current?.focus();
    const copy = state.slice();
    //   if (copy[action.pos]) return copy;
    copy.splice(action.pos, 1, action.payload);
    return copy;
  }
}

type numOrVoidStr = number | "";
type Action =
  | {
      kind: "typedIn";
      pos: number;
      payload: numOrVoidStr;
      refs: React.RefObject<HTMLInputElement>[];
    }
  | {
      kind: "copyAndPaste";
      payload: numOrVoidStr[];
      refs: React.RefObject<HTMLInputElement>[];
    };
export default App;
