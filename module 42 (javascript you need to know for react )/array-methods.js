const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
]

// 1: map
const brands = products.map(product => product.brand);
const price = products.map(product => product.price);

// console.log(brands);
// console.log(price);

// 2: forEach
// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color));
products.forEach(product => {

});

// 3: filter

const cheap = products.filter(product => product.price < 5000);
// console.log(cheap)

const specificNam = products.filter(product => product.name.includes('n'));
// console.log(specificNam);

const special = products.find(product => product.name.includes('n'));
console.log(special);