const products = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
let countOfEachProduct = products.reduce((acc, ele, i) => {
    acc[ele] ? acc[ele] += 1: acc[ele] = 1;
    return acc;
},{})
// console.log(countOfEachProduct);

// Extra challenge
let productCount = Object.entries(countOfEachProduct);
let sortedProductCount = productCount.sort((a,b) => b[1]-a[1])
console.log(sortedProductCount);