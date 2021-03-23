const prompt = require('prompt-sync')({sigint:true});
let number = prompt('enter the any number');
number = Number(number);
let factorial = 1;
let i;
for(i=1;i<=number;i++){
    console.log(i);
    console.log('*');
    factorial = (factorial*i);
}
console.log(factorial);