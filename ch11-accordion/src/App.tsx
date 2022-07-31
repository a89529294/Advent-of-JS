import React from "react";
import q1 from "./assets/question-1.svg";
import q2 from "./assets/question-2.svg";
import chevron from "./assets/chevron.svg";

function App() {
  return (
    <div className="min-h-full flex flex-col justify-center items-center gap-16 font-openSans">
      <Accordion
        title="Technically, Svelte is a library and SvelteKit is a framework. What's
        the difference?"
        img={q1}>
        Aliquip ipsum id excepteur minim occaecat cillum ad reprehenderit minim
        magna proident ea sint.Officia consequat id adipisicing id in occaecat
        nostrud non eu minim. Consequat excepteur incididunt reprehenderit ex eu
        eiusmod eu ex elit ipsum in elit reprehenderit irure. Laboris sunt in
        anim ad est nostrud in ea id qui officia consequat sint. Tempor enim ut
        id consectetur in.
      </Accordion>
      <Accordion title="Do you provide a certificate of completion?" img={q2}>
        Reprehenderit laboris ipsum elit ex est elit ullamco. Aliqua non
        deserunt reprehenderit adipisicing voluptate aliqua et ullamco
        cupidatat. Culpa aute Lorem officia labore non fugiat pariatur eu esse.
      </Accordion>
    </div>
  );
}

function Accordion({
  title,
  children,
  img,
}: {
  title: string;
  children: React.ReactNode;
  img: string;
}) {
  return (
    <article
      className="border-4 border-black border-solid w-9/12 flex relative z-0 bg-white"
      style={{ transformStyle: "preserve-3d" }}>
      <div className="bg-black w-24 relative">
        <img
          src={img}
          alt="question mark"
          className="absolute -top-14 left-1/2 -translate-x-1/2"
        />
      </div>
      <div className="flex-1 p-6 font-extrabold text-2xl">{title}</div>
      <div
        className="bg-gray-100 absolute w-full h-full left-14 top-6 -z-10"
        style={{
          transform: "translateZ(-10px)",
        }}>
        <img
          src={chevron}
          alt="chevron down"
          className="absolute right-7 translate-x-1/2 top-5"
        />
      </div>
    </article>
  );
}

export default App;
