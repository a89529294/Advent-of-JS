import leftChevron from "./assets/chevron-left.svg";
import rightChevron from "./assets/chevron-right.svg";

function App() {
  return (
    <div className="min-h-full h-auto flex">
      <Sidebar dir="left" />
      <div className="flex-1"></div>
      <Sidebar dir="right" />
      <Slider />
    </div>
  );
}

function Sidebar({ dir }: { dir: "left" | "right" }) {
  return (
    <div className="bg-pink-primary/30 w-24 min-h-full h-auto grid place-items-center">
      <img
        src={dir === "left" ? leftChevron : rightChevron}
        alt="left chevron"
      />
    </div>
  );
}

function Slider() {
  return (
    <div className="absolute bottom-0  p-5">
      <div className="flex overflow-x-scroll no-scrollbar gap-7">
        {imgs.map((m, i) => (
          <img key={i} src={m} className="w-44 aspect-square object-cover" />
        ))}
      </div>
    </div>
  );
}

const imgs = [
  "/dave-hoefler-okUIdo6NxGo-unsplash.jpg",
  "eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg",
  "finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg",
  "jakob-owens-EwRM05V0VSI-unsplash.jpg",
  "jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg",
  "kellen-riggin-SIBOiXKg0Ds-unsplash.jpg",
  "rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg",
  "sherman-yang-VBBGigIuaDY-unsplash.jpg",
  "silas-baisch-Wn4ulyzVoD4-unsplash.jpg",
  "sonya-romanovska-wzdXhyi3AiM-unsplash.jpg",
  "vincentiu-solomon-ln5drpv_ImI-unsplash.jpg",
];

export default App;
