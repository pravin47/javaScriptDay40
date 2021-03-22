const prompt = require('prompt-sync')({sigint:true});
let number = prompt('enter the number between 1 to 7');
if(number == 1){
    console.log("monday");
}else if(number == 2){
    console.log('tuesday');
}else if(number == 3){
    console.log('wednesday');
}else if(number == 4){
    console.log('thursday');
}else if(number == 5){
    console.log('friday');
}else if(number == 6){
    console.log('saturday');
}else if(number == 7){
    console.log('sunday');
}else{
    console.log('invalid entry');
}