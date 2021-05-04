// Static list of products
const products = [
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

// @param ar @type array
// remove spaces of product name and return all products names in lowercase
const rename = (ar) => {
  let arr = [...ar];
  let arr4 = arr.map(a => a.toLowerCase()).filter(a => a !== " ");
  return arr4.join('');
}

// Add unique id to every item in products array and export it
export const productsid = products.map(a => {
  return {
    ...a,
    id: rename(a.product)
  }
});
