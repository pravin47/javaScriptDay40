const prompt = require('prompt-sync')({sigint:true});
let choice = prompt("enter the number between 1 to 9");
choice = Number(choice);
switch(choice){

    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
    case 4:
        console.log('four');
        break;
    case 5:
        console.log('five');
        break;
    case 6:
        console.log('six');
        break;
    case 7:
        console.log('seven');
    case 8:
        console.log('eight');
    case 9:
        console.log('nine');
        break;
    default:
        console.log('invalid entry');
        break;
    }