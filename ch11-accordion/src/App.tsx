import React, { useRef, useState } from "react";
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
        <p>
          Aliquip ipsum id excepteur minim occaecat cillum ad reprehenderit
          minim magna proident ea sint.Officia consequat id adipisicing id in
          occaecat nostrud non eu minim.
        </p>
        <p>
          Consequat excepteur incididunt reprehenderit ex eu eiusmod eu ex elit
          ipsum in elit reprehenderit irure. Laboris sunt in anim ad est nostrud
          in ea id qui officia consequat sint. Tempor enim ut id consectetur in.
        </p>
      </Accordion>
      {/* <Accordion title="Do you provide a certificate of completion?" img={q2}>
        Reprehenderit laboris ipsum elit ex est elit ullamco. Aliqua non
        deserunt reprehenderit adipisicing voluptate aliqua et ullamco
        cupidatat. Culpa aute Lorem officia labore non fugiat pariatur eu esse.
      </Accordion> */}
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
  const [show, setShow] = useState(false);
  const articleRef = useRef<HTMLElement>(null);

  return (
    <article
      ref={articleRef}
      className="cursor-pointer border-4 border-black border-solid w-9/12 relative z-0 bg-white group"
      style={{ transformStyle: "preserve-3d" }}
      onClick={() => setShow((s) => !s)}>
      <AccordionPlaque img={img} title={title} />
      <AccordionPlaque img={img} title={title} invisible />
      {/* the offset grey bg that changes color when hovered */}
      <div
        className="bg-gray-100  w-full h-full  -z-10 transition-colors duration-500 hover-hover:group-hover:bg-yellow"
        style={{
          transform: "translateZ(-10px)",
        }}>
        <img
          src={chevron}
          alt="chevron down"
          className="absolute right-7 translate-x-1/2 top-5 "
        />
        {/* the collapsible content  */}
        <div
          className={`transition origin-top duration-300 absolute top-full p-10 bg-yellow text-xl leading-10  ${
            show ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}>
          {children}
        </div>
      </div>
    </article>
  );
}

function AccordionPlaque({
  img,
  title,
  invisible = false,
}: {
  img: string;
  title: string;
  invisible?: boolean;
}) {
  return (
    <div className={`flex ${invisible ? "invisible" : "absolute"}`}>
      <div className="bg-black w-24 relative">
        <img
          src={img}
          alt="question mark"
          className="absolute -top-14 left-1/2 -translate-x-1/2"
        />
      </div>
      <div className="flex-1 p-6 font-extrabold text-2xl">{title}</div>
    </div>
  );
}

export default App;
