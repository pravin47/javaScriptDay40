const prompt = require('prompt-sync')({sigint:true});
let number = prompt('enter the any number');
number = Number(number);
let i;
for( i = 2;i<=number;i++){

    if(number%i == 0){
        break;
    }
}
if(number == i){
    console.log('number is prime number');
}else{
    console.log('number is not prime number');
}