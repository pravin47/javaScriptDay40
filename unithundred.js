const prompt = require('prompt-sync')({sigint:true});
let unit = 0;
let tens = 0;
let hundreds = 0;
let thousands = 0;
let number = prompt('Enter The Any Four Digit Number');
unit = (number%10);
tens = (number/10)%10;
hundreds = (number/100%10);
thousands = (number/1000);
console.log('thousands : '+thousands+ ', hundred :'+hundreds+ ', tens :' +tens+ ', unit:'+unit);