import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import leftChevron from "./assets/chevron-left.svg";
import rightChevron from "./assets/chevron-right.svg";

function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <div className="min-h-full h-auto grid grid-cols-[auto_1fr_auto] grid-rows-[1fr_auto]">
      <Sidebar
        dir="left"
        className="col-start-1 row-start-1 row-span-2"
        setSelectedIdx={setSelectedIdx}
      />
      <figure className="flex flex-col items-center justify-center col-start-2 row-span-1 row-start-1">
        <img
          src={imgs[selectedIdx].path}
          alt=""
          className="w-[calc(100vh_-_220px)] aspect-[4/3] block"
        />
        <figcaption className="figcaption ">
          <ReactMarkdown className="text-center">
            {imgs[selectedIdx].caption}
          </ReactMarkdown>
        </figcaption>
      </figure>
      <Sidebar
        dir="right"
        className="col-start-3 row-span-2 row-start-1"
        setSelectedIdx={setSelectedIdx}
      />
      <Slider
        className="col-start-1 col-span-3 row-start-2"
        selectedIdx={selectedIdx}
        setSelectedIdx={setSelectedIdx}
      />
    </div>
  );
}

function Sidebar({
  dir,
  className,
  setSelectedIdx,
}: {
  dir: "left" | "right";
  className: string;
  setSelectedIdx: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div
      className={`bg-pink-primary/30 w-24 min-h-full h-auto grid place-items-center ${className}`}>
      <button
        onClick={() =>
          setSelectedIdx((i) => {
            if (dir === "left") return i > 0 ? --i : 0;
            else return i < imgs.length - 1 ? ++i : imgs.length - 1;
          })
        }>
        <img
          src={dir === "left" ? leftChevron : rightChevron}
          alt="left chevron"
        />
      </button>
    </div>
  );
}

function Slider({
  className,
  selectedIdx,
  setSelectedIdx,
}: {
  className: string;
  selectedIdx: number;
  setSelectedIdx: (arg: number) => void;
}) {
  const imgsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const selectedImgLeft =
      imgsRef.current?.children[selectedIdx].getBoundingClientRect().left ?? 0;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;
    selectedImgLeft > windowWidth &&
      imgsRef.current?.children[selectedIdx].scrollIntoView();
  }, [selectedIdx]);

  return (
    <div className={`p-5 ${className}`}>
      <div className="flex overflow-x-scroll no-scrollbar gap-7" ref={imgsRef}>
        {imgs.map((m, i) => (
          <button
            className={`relative w-44 aspect-square shrink-0 border-solid border-pink-primary ${
              i === selectedIdx ? "border-[10px]" : ""
            }`}
            onClick={() => setSelectedIdx(i)}
            key={i}>
            <img
              key={i}
              src={m.path}
              className="absolute top-0 h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

const imgs = [
  {
    path: "/dave-hoefler-okUIdo6NxGo-unsplash.jpg",
    caption:
      "Photo by [Dave Hoefler](https://unsplash.com/@davehoefler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)",
  },
  {
    path: "eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg",
    caption:
      "Photo by [Eugene Golovesov](https://unsplash.com/@eugene_golovesov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)",
  },
  {
    path: "finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg",
    caption:
      "Photo by [Dan Grinwis](https://unsplash.com/@finding_dan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)",
  },
  {
    path: "jakob-owens-EwRM05V0VSI-unsplash.jpg",
    caption:
      "Photo by [Jakob Owens](https://unsplash.com/@jakobowens1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)",
  },
  {
    path: "jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg",
    caption:
      "Photo by [Jennifer reynolds](https://unsplash.com/@jenreyn0lds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)",
  },
  {
    path: "kellen-riggin-SIBOiXKg0Ds-unsplash.jpg",
    caption:
      "Photo by [Kellen Riggin](https://unsplash.com/@kalaniparker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)",
  },
  {
    path: "rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg",
    caption:
      "Photo by [Rafael Hoyos](https://unsplash.com/@rhweht?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)",
  },
  {
    path: "sherman-yang-VBBGigIuaDY-unsplash.jpg",
    caption:
      "Photo by [Sherman Yang](https://unsplash.com/@emp_creative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)",
  },
  {
    path: "silas-baisch-Wn4ulyzVoD4-unsplash.jpg",
    caption:
      "Photo by [Silas Baisch](https://unsplash.com/@silasbaisch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)",
  },
  {
    path: "sonya-romanovska-wzdXhyi3AiM-unsplash.jpg",
    caption:
      "Photo by [Sonya Romanovska](https://unsplash.com/@sonya_romanovska?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)",
  },
  {
    path: "vincentiu-solomon-ln5drpv_ImI-unsplash.jpg",
    caption:
      "Photo by [Vincentiu Solomon](https://unsplash.com/@vincentiu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)",
  },
];

export default App;
