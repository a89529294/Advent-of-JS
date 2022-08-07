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
  const [minH, setMinH] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMinH(ref.current?.getBoundingClientRect().height ?? 0);
  });

  return (
    <article
      style={{
        minHeight: minH + "px",
      }}
      className={`cursor-pointer w-9/12 relative z-0 group ${
        show ? "mb-36" : ""
      }`}
      onClick={() => setShow((s) => !s)}>
      <AccordionPlaque img={img} title={title} ref={ref} />

      {/* the offset grey bg that changes color when hovered */}
      <div
        className={`relative bg-gray-100 w-full h-full transition-colors duration-500  mt-10 ml-14 ${
          show ? "bg-yellow" : "hover-hover:group-hover:bg-yellow"
        }`}>
        <img
          src={chevron}
          alt="chevron down"
          className="absolute right-7 translate-x-1/2 top-5 z-10"
        />
        {/* the collapsible content  */}
        <div
          ref={ref2}
          className={`relative transition-all origin-top duration-300 p-10 bg-yellow text-xl leading-10 h-0 overflow-hidden ${
            show ? "opacity-100" : " opacity-0"
          }`}
          style={{
            height: show
              ? (ref3.current?.clientHeight ?? 0) + minH + "px"
              : 0 + "px",
            minHeight: minH + "px",
            top: minH + "px",
          }}>
          <div className="" ref={ref3}>
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}

const AccordionPlaque = forwardRef<
  HTMLDivElement,
  {
    img: string;
    title: string;
  }
>(function ({ img, title }, ref) {
  return (
    <div
      ref={ref}
      className={`absolute w-full z-10 flex border-4 bg-white border-black border-solid`}>
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
});

export default App;
