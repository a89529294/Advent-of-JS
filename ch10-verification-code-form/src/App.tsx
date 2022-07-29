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
          />
          <InputBox
            pos={2}
            value={codes[2]}
            setValue={setCodes}
            ref={ref2}
            refs={[ref0, ref1, ref2, ref3]}
          />
          <InputBox
            pos={3}
            value={codes[3]}
            setValue={setCodes}
            ref={ref3}
            refs={[ref0, ref1, ref2, ref3]}
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
      value: numOrEmptyString;
      setValue: React.Dispatch<Action>;
      refs: React.RefObject<HTMLInputElement>[];
      setCodes?: React.Dispatch<Action>;
    },
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        type="number"
        className="w-20 aspect-square bg-[#F0F3FA] rounded-md shadow-[inset_0_0_4px_rgba(0,0,0,0.05)] text-purple-primary text-[60px] font-black text-center"
        value={value}
        onChange={(e) =>
          setValue({
            payload: e.target.value === "" ? e.target.value : +e.target.value,
            pos,
            refs,
            kind: "typedIn",
          })
        }
        autoFocus={pos === 0}
        ref={ref}
        onKeyDown={(e) => {
          if (
            !setCodes ||
            (!(e.ctrlKey && e.key === "v") && !(e.metaKey && e.key === "v"))
          )
            return;
          navigator.clipboard.readText().then((r) => {
            const code = r.slice(0, 4);
            // TODO handle cases where not all 4 are convertable to numbers
            setCodes({
              kind: "copyAndPaste",
              payload: [
                +code.charAt(0),
                +code.charAt(1),
                +code.charAt(2),
                +code.charAt(3),
              ],
              refs,
            });
          });
        }}
      />
    );
  }
);

function reducer(
  state: numOrEmptyString[],
  action: Action
): numOrEmptyString[] {
  if (action.kind === "copyAndPaste") {
    action.refs[3].current?.focus();
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

type numOrEmptyString = number | "";
type Action =
  | {
      kind: "typedIn";
      pos: number;
      payload: number | "";
      refs: React.RefObject<HTMLInputElement>[];
    }
  | {
      kind: "copyAndPaste";
      payload: number[];
      refs: React.RefObject<HTMLInputElement>[];
    };
export default App;
