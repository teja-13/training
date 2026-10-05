//for-of loop

let arr = [4, 624, 25, 245, 3, 36, 355, 72, 84, 58];

for (const ele of arr) {
  console.log(ele);
}

//for-in loop

var str = "kjbeflkneglknjerglkjrvlkn";

for (var ind in str) {
  console.log(str[ind]);
}

//forEach loop

arr.forEach((val, ind, a) => {
  console.log(val, " -> ", ind, "->", a);
});

let prices = [
  999, 899, 899, 799, 1299, 1399, 1499, 999, 899, 799, 599, 499, 199, 899, 699,
  399,
];

let discountedPrices = prices.map((x) => {
  return x - x / 10;
});

console.log(discountedPrices);

let addedExtraAmount = prices.map((z) => {
  return z + 250;
});

console.log(addedExtraAmount);

let filteredPrice = discountedPrices.filter((x) => {
  return x >= 500 && x <= 1000;
});

console.log(filteredPrice);

var totalPrice = filteredPrice.reduce((acl, val) => {
  return acl + val;
}, 500);

console.log(totalPrice);
