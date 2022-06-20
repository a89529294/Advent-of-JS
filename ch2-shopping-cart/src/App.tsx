import React, { useReducer } from "react";
import bg_left from "./assets/bg__left.svg";
import bg_top_right from "./assets/bg__top-right.svg";
import bg_btm_right from "./assets/bg__btm-right.svg";
import products from "./products";
import Card from "./components/Card";
import MenuItem from "./components/MenuItem";

const getProductName = (id: number) => {
  const foundProduct = products.find((p) => p.id === id);
  return foundProduct ? foundProduct.name : "";
};

const isInArray = (arr: { id: number }[], id: number) =>
  arr.some((item) => item.id === id);

function reducer(
  state: { id: number; quantity: number }[],
  action: { type: string; payload: { id: number } }
) {
  const newItemId = action.payload.id;
  const isItemInCart = isInArray(state, newItemId);
  if (action.type === "add") {
    if (isItemInCart) {
      return state;
    } else {
      return [...state, { id: newItemId, quantity: 1 }];
    }
  } else if (action.type === "remove") {
    return state.filter((item) => item.id !== newItemId);
  }
  return state;
}

function App() {
  const [cartItems, setCartItems] = useReducer(reducer, []);

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
          cartItems.map((item) => (
            <div className="px-6" key={item.id}>
              {getProductName(item.id)}
            </div>
          ))
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
