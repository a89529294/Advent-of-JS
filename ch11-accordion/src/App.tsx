import React, { forwardRef, useEffect, useRef, useState } from "react";
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
  const [show, setShow] = useState(false);
  const [summaryH, setSummaryH] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    !summaryH && setSummaryH(ref.current?.getBoundingClientRect().height ?? 0);
  }, []);

  return (
    <article
      ref={ref}
      className={`cursor-pointer w-9/12 relative z-0 group ${show ? "" : ""}`}
      onClick={() => setShow((s) => !s)}>
      <AccordionSummary img={img} title={title} />

      {/* the offset grey bg that changes color when hovered */}
      <div
        style={{
          top: -summaryH + 100 + "px",
          right: -48 + "px",
          //   height: summaryH + "px",
        }}
        className={`relative bg-gray-100 w-full transition-colors duration-500 ${
          show ? "bg-yellow" : "hover-hover:group-hover:bg-yellow"
        }`}>
        <img
          src={chevron}
          alt="chevron down"
          className="absolute right-7 translate-x-1/2 top-5 z-10"
        />
        <AccordionDetails show={show}>{children}</AccordionDetails>
      </div>
    </article>
  );
}

function AccordionSummary({ img, title }: { img: string; title: string }) {
  return (
    <div
      className={`relative z-10 flex border-4 bg-white border-black border-solid`}>
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
function AccordionDetails({
  children,
  show,
}: {
  children: React.ReactNode;
  show: boolean;
}) {
  return (
    <div
      className={`relative transition-all origin-top duration-500 p-10 bg-yellow text-xl leading-10 overflow-hidden ${
        show ? "opacity-100 max-h-[500px]" : " opacity-0 max-h-0"
      }`}>
      {children}
    </div>
  );
}

export default App;
