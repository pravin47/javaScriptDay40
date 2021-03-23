const prompt = require('prompt-sync')({sigint:true});
console.log('1 feet to inch');
console.log('2 feet to meter');
console.log('3 inch to feet');
console.log('4 meter to feet');
let choice = prompt('Please Enter your choice');
choice = Number(choice);
switch(choice){

    case 1 :
        let feet = prompt('enter the feet which you want to convert in inch');
        let ans = feet*12;
        console.log(feet+ ' feet in inch is :' +ans);
        break;
        
    case 2 :
        let feet1 = prompt('enter the feet which you want to convert in meter');
        let ans1 = feet1*0.3048;
        console.log(feet1+ ' feet in metet is :' +ans1);
        break; 

    case 3 :
        let inch = prompt('enter the inch which you want to convert in feet');
        let ans2 = inch*0.083333;
        console.log(inch+ ' inch in feet is :' +ans2);
        break;
       
     case 4 :
        let meter = prompt('enter the meter which you want to convert in feet');
        let ans3 = meter*3.28084;
        console.log(meter+ ' meter in feet is :' +ans3);
        break;
}