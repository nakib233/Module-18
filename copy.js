let price = 25;
let com_price = price;
price = 34;
com_price = 23;

// console.log(price);
// console.log(com_price);

const products = [25, 25, 25];
const comp_products = [];
// const comp_products = products;
for (const product of products) {
  comp_products.push(product);
}
comp_products[0] = 15;
products[1] = 55;
// changes the both array's first index value

// console.log(products);
// console.log(comp_products);

const numbers = [1, 2, 3, 4];
// const new_numbers = Array.from(numbers);
// const new_numbers = [].concat(numbers);
const new_numbers = [...numbers];

new_numbers[2] = 78;
new_numbers.push(23);
console.log(numbers);
console.log(new_numbers);
