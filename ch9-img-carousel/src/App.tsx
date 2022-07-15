import leftChevron from "./assets/chevron-left.svg";
import rightChevron from "./assets/chevron-right.svg";

function App() {
  return (
    <div className="min-h-full h-auto flex">
      <Sidebar dir="left" />
      <div className="flex-1"></div>
      <Sidebar dir="right" />
    </div>
  );
}

function Sidebar({ dir }: { dir: "left" | "right" }) {
  return (
    <div className="bg-pink-primary/30 w-24 min-h-full h-auto grid place-items-center">
      <img
        src={dir === "left" ? leftChevron : rightChevron}
        alt="left chevron"
      ></img>
    </div>
  );
}

export default App;
