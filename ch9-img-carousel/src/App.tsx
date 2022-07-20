import { useState } from "react";
import ReactMarkdown from "react-markdown";
import leftChevron from "./assets/chevron-left.svg";
import rightChevron from "./assets/chevron-right.svg";

function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <div className="min-h-full h-auto flex">
      <Sidebar dir="left" />
      {/* TODO WHY is figures width so wide!!??!! */}
      <div className="flex-1 flex items-center justify-center">
        <figure>
          <img
            src={imgs[selectedIdx].path}
            alt=""
            className="w-3/6 aspect-[4/3]"
          />
          <figcaption className="figcaption ">
            <ReactMarkdown className="text-center">
              {imgs[selectedIdx].caption}
            </ReactMarkdown>
          </figcaption>
        </figure>
      </div>
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
          <img
            key={i}
            src={m.path}
            className="w-44 aspect-square object-cover"
          />
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
