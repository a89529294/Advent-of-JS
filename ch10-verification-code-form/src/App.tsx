import React from "react";
import { useReducer, useRef } from "react";

function App() {
  const [codes, setCodes] = useReducer(reducer, new Array(4).fill(""));

  const ref0 = useRef<HTMLInputElement>(null);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const refs = [ref0, ref1, ref2, ref3];
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
          {new Array(NumberOfInputBoxes).fill("").map((v, i) => (
            <InputBox
              pos={i}
              value={codes[i]}
              setValue={setCodes}
              ref={refs[i]}
              refs={refs}
              setCodes={setCodes}
            />
          ))}
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
          const v = e.target.value;
          setValue({
            payload: v === "" ? v : +v,
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
          const contentArrModified: numOrVoidStr[] = [];
          for (let i = 0; i < contentArr.length; i++) {
            const char = contentArr[i];
            if (Number.isNaN(+char)) {
              validContent = false;
              break;
            } else contentArrModified[i] = char === "" ? "" : +char;
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
  const { kind, refs, payload } = action;
  if (kind === "copyAndPaste") {
    refs[
      payload.indexOf("") === -1 ? payload.length - 1 : payload.indexOf("")
    ].current?.focus();
    return payload;
  } else {
    const { pos } = action;
    payload && refs[pos + 1 < refs.length ? pos + 1 : pos].current?.focus();
    const copy = state.slice();
    copy.splice(pos, 1, payload);
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

const NumberOfInputBoxes = 4;

export default App;
