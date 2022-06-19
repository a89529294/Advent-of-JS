import React from "react";
import bg_left from "./assets/bg__left.svg";
import bg_top_right from "./assets/bg__top-right.svg";
import bg_btm_right from "./assets/bg__btm-right.svg";
import products from "./products";

function MenuItem({
  name,
  price,
  img,
}: {
  name: string;
  price: number;
  img: string;
}) {
  return (
    <div className="flex gap-2 rounded-l-[20px] [&:nth-child(4n+1)]:bg-menu-item-1 [&:nth-child(4n+2)]:bg-menu-item-2 [&:nth-child(4n+3)]:bg-menu-item-3 [&:nth-child(4n+4)]:bg-menu-item-4">
      <img
        src={img}
        className="w-36 -translate-x-3 -translate-y-4 aspect-square self-start"
      />
      <div className="relative pt-6 flex flex-col gap-4 pb-10">
        <h4 className="text-lg">{name}</h4>
        <h3 className="text-3xl font-bold">${price}</h3>
        <button className="absolute bg-primary text-base font-bold px-4 py-1 rounded-[20px] text-white bottom-0 translate-y-1/2">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="w-96 h-full bg-white rounded-3xl overflow-auto pt-12 pb-6">
      <h2 className="font-bold text-3xl ml-9 leading-[48px] mb-9">{title}</h2>
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="h-full bg-[#EFF0F6] flex justify-center items-center gap-12 py-24 relative isolate">
      <Card title="To Go Menu">
        <div className="flex flex-col gap-8 pl-7">
          {products.map((p, i) => (
            <MenuItem name={p.name} img={p.img} price={p.price} key={i} />
          ))}
        </div>
      </Card>
      <Card title="Your Cart"></Card>
      <img src={bg_left} className="absolute left-0 bottom-28 -z-10 w-36" />
      <img src={bg_top_right} className="absolute right-0 top-0 -z-10 w-56" />
      <img
        src={bg_btm_right}
        className="absolute right-0 bottom-0 -z-10 w-64"
      />
    </div>
  );
}

export default App;
