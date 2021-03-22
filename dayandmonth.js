const prompt = require('prompt-sync')({sigint:true});
let date = prompt('enter the day');
let month = prompt('enter the month');
if( date>=20 && date<=30 && month>=3 && month<=6 ){
    console.log('true');
}else{
    console.log('false');
}