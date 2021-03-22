const prompt = require('prompt-sync')({sigint:true});
let year = prompt('enter the any year');
year = Number(year);
if(year%400 == 0){
    console.log(year+' is a leap year');
}else if(year%100 == 0){
    console.log(year+ ' is a not leap year');
}else if(year%4 ==0 ){
    console.log(year+ ' is the leap year');
}else{
    console.log(year+ ' is not a leap year');
}