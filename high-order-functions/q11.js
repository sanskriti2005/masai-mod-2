let products = [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }];

let processProducts = (productsArr) => productsArr.forEach(({name, price}) => 
    console.log(`${name} is ${price > 50 ? "above" : "below"} $50`));


processProducts(products);