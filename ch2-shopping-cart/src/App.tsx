import React, { useReducer } from "react";
import bg_left from "./assets/bg__left.svg";
import bg_top_right from "./assets/bg__top-right.svg";
import bg_btm_right from "./assets/bg__btm-right.svg";
import chevron_left from "./assets/chevron-left.svg";
import chevron_right from "./assets/chevron-right.svg";
import products from "./products";
import Card from "./components/Card";
import MenuItem from "./components/MenuItem";

type CartItem = {
  id: number;
  quantity: number;
};

const getProductValue = (id: number, key: keyof typeof products[number]) => {
  const foundProduct = products.find((p) => p.id === id);
  return foundProduct ? foundProduct[key] : "";
};

const isInArray = (arr: { id: number }[], id: number) =>
  arr.some((item) => item.id === id);

function reducer(
  state: CartItem[],
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
  } else if (action.type === "inc") {
    const newState = structuredClone(state) as CartItem[];
    const foundItem = newState.find((item) => item.id === newItemId);
    const foundItemInState = state.find((item) => item.id === newItemId);
    foundItem!.quantity = foundItemInState!.quantity + 1;
    return newState;
  } else if (action.type === "dec") {
    return state;
  } else {
    return state;
  }
}

function App() {
  const [cartItems, setCartItems] = useReducer(reducer, []);
  const getItemQuantity = (id: number) =>
    cartItems.find((item) => item.id === id)?.quantity;
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
              <div
                className="flex gap-4 pb-11 border-b border-solid border-[#D7D7F9] pt-8 first:pt-0 last:border-b-[5px]"
                key={item.id}
              >
                <img
                  src={getProductValue(item.id, "img") as string}
                  className="self-start w-16 aspect-square"
                />
                <div className="flex flex-col flex-1 gap-4">
                  <div>
                    <h3 className="text-lg">
                      {getProductValue(item.id, "name")}
                    </h3>
                    <h4 className="text-base font-bold leading-loose">
                      ${getProductValue(item.id, "price")}
                    </h4>
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
                    <span>{getItemQuantity(item.id)}</span>
                    <button
                      className="grid w-8 rounded-full aspect-square bg-primary place-content-center"
                      onClick={() =>
                        setCartItems({ type: "inc", payload: { id: item.id } })
                      }
                    >
                      <img src={chevron_right} className="w-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
