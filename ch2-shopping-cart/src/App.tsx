import React, { useEffect, useReducer } from "react";
import bg_left from "./assets/bg__left.svg";
import bg_top_right from "./assets/bg__top-right.svg";
import bg_btm_right from "./assets/bg__btm-right.svg";
import products from "./products";
import Card from "./components/Card";
import MenuItem from "./components/MenuItem";
import CartItem from "./components/CartItem";
import { getValueFromArray, toFixedNumber } from "./utils";

export type CartItemType = {
  id: number;
  quantity: number;
};

const isInArray = (arr: { id: number }[], id: number) =>
  arr.some((item) => item.id === id);

function reducer(
  state: CartItemType[],
  action: { type: string; payload: { id: number } }
) {
  const itemId = action.payload.id;
  const isItemInCart = isInArray(state, itemId);
  if (action.type === "add") {
    if (isItemInCart) {
      return state;
    } else {
      return [...state, { id: itemId, quantity: 1 }];
    }
  } else if (action.type === "remove") {
    return state.filter((item) => item.id !== itemId);
  } else if (action.type === "inc" || action.type === "dec") {
    let newState = structuredClone(state) as CartItemType[];
    const foundItem = newState.find((item) => item.id === itemId);
    if (!foundItem) {
      throw new Error(
        "incrementing/decrementing an item not in cart, this should not be possible"
      );
    }
    action.type === "inc" && foundItem.quantity++;
    if (action.type === "dec") {
      if (foundItem.quantity > 1) foundItem.quantity--;
      else newState = newState.filter((i) => i.id !== itemId);
    }
    return newState;
  } else {
    return state;
  }
}

function App() {
  const [cartItems, setCartItems] = useReducer(reducer, []);
  const getItemQuantity = (id: number) =>
    cartItems.find((item) => item.id === id)!.quantity;
  const subTotal = toFixedNumber(
    cartItems.reduce((acc, item) => {
      return (
        acc +
        item.quantity *
          (getValueFromArray(products, item.id, "price") as number)
      );
    }, 0)
  );

  const tax = toFixedNumber(subTotal * 0.09);
  const total = toFixedNumber(subTotal + tax);

  return (
    <div className="h-full bg-[#EFF0F6] flex justify-center items-center gap-12 py-24 relative isolate">
      <Card title="To Go Menu">
        <div className="flex flex-col gap-8 pl-7">
          {products.map((p, i) => (
            <MenuItem
              name={p.name}
              img={p.img}
              price={p.price}
              key={i}
              onClick={() => {
                const foundItem = isInArray(cartItems, p.id);
                !foundItem &&
                  setCartItems({ type: "add", payload: { id: p.id } });
                foundItem &&
                  setCartItems({ type: "remove", payload: { id: p.id } });
              }}
              inCart={isInArray(cartItems, p.id)}
            />
          ))}
        </div>
      </Card>
      <Card title="Your Cart">
        {cartItems.length ? (
          <div className="px-6">
            {cartItems.map((item) => (
              <CartItem
                item={item}
                setCartItems={setCartItems}
                getItemQuantity={getItemQuantity}
                key={item.id}
              />
            ))}
            <div className="grid justify-end justify-items-end place-items-end grid-cols-[min-content_min(140px)] my-9 gap-6 font-bold leading-none">
              <h6 className="pb-1">Subtotal:</h6>
              <h5 className="text-[32px]">${subTotal}</h5>
              <h6 className="pb-1">Tax:</h6>
              <h5 className="text-[32px]">${tax}</h5>
              <h6 className="pb-1">Total:</h6>
              <h5 className="text-[32px] text-primary">${total}</h5>
            </div>
          </div>
        ) : (
          <span className="text-base ml-9">Your cart is empty.</span>
        )}
      </Card>
      <img src={bg_left} className="absolute left-0 bottom-28 -z-10 w-36" />
      <img src={bg_top_right} className="absolute top-0 right-0 w-56 -z-10" />
      <img
        src={bg_btm_right}
        className="absolute bottom-0 right-0 w-64 -z-10"
      />
    </div>
  );
}

export default App;
