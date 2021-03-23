const prompt = require('prompt-sync')({sigint:true});
let number = prompt('enter the any number');
let power = 1;
for(let i=1;i<=number;i++){
    power = power*2;
}
console.log(power);
