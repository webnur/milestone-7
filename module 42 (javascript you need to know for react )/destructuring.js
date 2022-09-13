// 1. array destructuring
const numbers = [34, 64];
const x = numbers[0];
const y = numbers[1];

const [a, b] = numbers;
const [c, d] = [65, 69];

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = [90, 34]
const [first, second] = boxify(90, 34);

// console.log(boxify(90, 34));


const student = {
    name: 'sakib khan',
    age: 33,
    movies: ['king khan', 'dhakar mastan'],
}

const [fistMovie, secondMovie] = student.movies;
// console.log(fistMovie, secondMovie)


// object destructuring

const {name, age} = {name: 'Nurul Isalm', Id: 12, age: 26, wife: 'Amena sultana'};
// console.log(name, age);

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const {ide, machine} = employee;
// console.log(ide, machine);
const some = employee.specification;
// console.log(some)
const { brand } = employee?.specification?.watch;
// console.log(brand)
// const [first, second] = employee.languages;
// console.log(first, second)