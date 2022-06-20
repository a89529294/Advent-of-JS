import React from "react";
import checkmark from "../assets/checkmark.svg";

function MenuItem({
  name,
  price,
  img,
  onClick,
  inCart = false,
}: {
  name: string;
  price: number;
  img: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  inCart?: boolean;
}) {
  return (
    <div className="flex gap-2 rounded-l-[20px] [&:nth-child(4n+1)]:bg-menu-item-1 [&:nth-child(4n+2)]:bg-menu-item-2 [&:nth-child(4n+3)]:bg-menu-item-3 [&:nth-child(4n+4)]:bg-menu-item-4">
      <img
        src={img}
        className="self-start -translate-x-3 -translate-y-4 w-36 aspect-square"
      />
      <div className="relative flex flex-col gap-4 pt-6 pb-10">
        <h4 className="text-lg">{name}</h4>
        <h3 className="text-3xl font-bold">${price}</h3>
        <button
          className={`w-32 absolute text-base font-bold px-4 py-1 rounded-[20px] text-white bottom-0 translate-y-1/2 ${
            inCart ? "bg-black" : "bg-primary"
          }`}
          onClick={onClick}
        >
          {inCart ? (
            <div className="flex justify-center gap-2">
              <img src={checkmark} className="w-5 aspect-square" />
              <span>In Cart</span>
            </div>
          ) : (
            "Add to Cart"
          )}
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
