const products = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
let countOfEachProduct = products.reduce((acc, ele, i) => {
    acc[ele] ? acc[ele] += 1: acc[ele] = 1;
    return acc;
},{})
console.log(countOfEachProduct);