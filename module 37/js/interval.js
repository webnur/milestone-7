// x++ vs ++x
//i++ vs ++i
console.log('first');
console.log('second')
let seconds = 0;
const intervalId = setInterval(() =>{
    // seconds++;
    console.log(++seconds);
    if(seconds === 10){
        clearInterval(intervalId)
    }

},1000)
console.log('forth')
console.log('fifth')