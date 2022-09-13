// 1. JSON => stringify, parse

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const studentJSON = JSON.stringify(student);
// console.log(studentJSON)

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj)

// 2: fetch

// fetch('url')
//     .then(response => response.json())
//     .then(data => console.log(data))


// 3: key
const keys = Object.keys(student)
// 4: values
const values = Object.values(student);



// 4: for 
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in 


// add or remove from an array
const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];


const newProduct = {name: 'webcam', price: 4000, brand: 'canon', color: 'lal'};

// copy products array and then add newProduct 
const newProducts = [...products, newProduct];
console.log(newProducts)

// create a new array without one specific item 
// remove phone means create a new array without the phone

const remaining = products.filter(product => product.name !== 'phone');
// console.log(remaining)