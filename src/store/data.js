export const products = [
  {
    product: "iphone 6s",
    price: 175,
    quantity: 201,
    discount: 0
  },
  {
    product: "iphone 7 plus",
    price: 225,
    quantity: 144,
    discount: 0
  },
  {
    product: "iphone x",
    price: 499,
    quantity: 75,
    discount: 0
  }
];

const rename = (ar) => {
  let arr = [...ar];
  let arr4 = arr.map(a => a.toLowerCase()).filter(a => a !== " ");
  return arr4.join('');
}
export let productsid = products.map(a => {
  return {
    ...a,
    id: rename(a.product)
  }
});
