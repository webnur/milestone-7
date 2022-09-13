const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};


// 1. template string
const about = `${student.name} age of ${student.age}, his feforit movie is ${student.movies[0]}`
console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator
const numbers = [32, 53, 54]
// create a new array from an older array and add an element
const newNumbers = [...numbers, 596,65];
// console.log(newNumbers)

numbers.push(99);
numbers.push(99);
numbers.push(99);