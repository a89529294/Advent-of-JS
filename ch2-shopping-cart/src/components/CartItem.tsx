import React from "react";
import type { CartItemType } from "../App";
import products from "../products";
import chevron_left from "../assets/chevron-left.svg";
import chevron_right from "../assets/chevron-right.svg";
import { getValueFromArray, toFixedNumber } from "../utils";

// export const getProductValue = (
//   id: number,
//   key: keyof typeof products[number]
// ) => {
//   const foundProduct = products.find((p) => p.id === id);
//   return foundProduct ? foundProduct[key] : "";
// };

function CartItem({
  item,
  setCartItems,
  getItemQuantity,
}: {
  item: CartItemType;
  setCartItems: React.Dispatch<{
    type: string;
    payload: {
      id: number;
    };
  }>;
  getItemQuantity: (num: number) => number;
}) {
  const price = getValueFromArray(products, item.id, "price") as number;
  const quantity = getItemQuantity(item.id);

  return (
    <div
      className="flex gap-4 pb-11 border-b border-solid border-[#D7D7F9] pt-8 first:pt-0 last:border-b-[5px]"
      key={item.id}
    >
      <img
        src={getValueFromArray(products, item.id, "img") as string}
        className="self-start w-16 aspect-square"
      />
      <div className="flex flex-col flex-1 gap-4">
        <div>
          <h3 className="text-lg">
            {getValueFromArray(products, item.id, "name")}
          </h3>
          <h4 className="text-base font-bold leading-loose">${price}</h4>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="grid w-8 rounded-full aspect-square bg-primary place-content-center"
            onClick={() =>
              setCartItems({ type: "dec", payload: { id: item.id } })
            }
          >
            <img src={chevron_left} className="w-6" />
          </button>
          <span className="w-5 text-center min-w-min">
            {getItemQuantity(item.id)}
          </span>
          <button
            className="grid w-8 rounded-full aspect-square bg-primary place-content-center"
            onClick={() =>
              setCartItems({ type: "inc", payload: { id: item.id } })
            }
          >
            <img src={chevron_right} className="w-6" />
          </button>
          <span className="text-[32px] font-bold ml-auto">
            ${toFixedNumber(price * quantity)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
