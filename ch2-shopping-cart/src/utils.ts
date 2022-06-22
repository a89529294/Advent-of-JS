export function toFixedNumber(num: number, to = 2) {
  return +num.toFixed(to);
}

export function getValueFromArray<T extends { id: number }>(
  arr: Array<T>,
  id: number,
  key: keyof T
) {
  const foundItem = arr.find((p) => p.id === id);
  return foundItem ? foundItem[key] : "";
}

// export const getValueFromArray<T> = (
//     id: number,
//     arr:Array<T>,
//     key: keyof typeof T[number]
//   ) => {
//     const foundProduct = products.find((p) => p.id === id);
//     return foundProduct ? foundProduct[key] : "";
//   };
