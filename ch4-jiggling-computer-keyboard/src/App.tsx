import { firstRow, fourthRow, secondRow, thirdRow } from "./rows";

export type Size = "sm" | "md" | "mdl" | "lg" | "xl" | "xxl";

function App() {
  return (
    <div className="min-h-full grid place-items-center">
      <div className="bg-[#F6F6F6] w-10/12 py-5 px-4 lg:py-10 lg:px-9 grid gap-1 lg:gap-3">
        <KeyBoardRow>
          {firstRow.map((k, i) => (
            <Key key={i} size={k.size}>
              {k.key}
            </Key>
          ))}
        </KeyBoardRow>
        <KeyBoardRow>
          {secondRow.map((k, i) => (
            <Key key={i} size={k.size}>
              {k.key}
            </Key>
          ))}
        </KeyBoardRow>
        <KeyBoardRow>
          {thirdRow.map((k, i) => (
            <Key key={i} size={k.size}>
              {k.key}
            </Key>
          ))}
        </KeyBoardRow>
        <KeyBoardRow>
          {fourthRow.map((k, i) => (
            <Key key={i} size={k.size}>
              {k.key}
            </Key>
          ))}
        </KeyBoardRow>
      </div>
    </div>
  );
}

const KeyBoardRow = ({ children }: { children: React.ReactNode }) => (
  <ul className="flex gap-1 lg:gap-3">{children}</ul>
);

const Key = ({ children, size = "sm" }: { children: string; size?: Size }) => {
  const sizesAndColors = {
    sm: `flex-[3_3_0px] text-teal aspect-square rounded-[25%] `,
    md: `flex-[5_5_0px] text-grey aspect-[5/3] rounded-[15%]`,
    mdl: `flex-[5.5_5.5_0px] text-grey aspect-[5.5/3] rounded-[13.3%]`,
    lg: `flex-[6_6_0px] text-grey aspect-[6/3] rounded-[12.5%]`,
    xl: `flex-[7.5_7.5_0px] text-grey aspect-[7.5/3] rounded-[10%]`,
    xxl: `flex-[7.67_7.67_0px] text-grey aspect-[7.67/3] rounded-[10%]`,
  };

  return (
    <li className={`grid bg-white place-items-center ${sizesAndColors[size]} `}>
      {children}
    </li>
  );
};

export default App;
