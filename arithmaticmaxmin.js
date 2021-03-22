const prompt = require('prompt-sync')({sigint:true});
let num1 = prompt('enter the first number');
let num2 = prompt('enter the second number');
let num3 = prompt('enter the third number');
let a = num1;
let b = num2;
let c = num3;
let ans1 = (a+(b*c));
let ans2 = (a%b+c);
let ans3 = (c+(a/b));
let ans4 = ((a*b)+c);
console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(ans4);
if(ans1>ans2 && ans1>ans3 && ans1>ans4){
    console.log(+ans1+ 'is the largest value');
}else if(ans2>ans1 && ans2>ans3 && ans2>ans4){
    console.log(+ans2+ 'is the largest value');
}else if(ans3>ans1 && ans3>ans2 && ans3>ans4){
    console.log(+ans3+ 'is the largest values');
}else{
    console.log(+ans4+ 'is the largest value');
}
if(ans1<ans2 && ans1<ans3 && ans1<ans4){
    console.log(+ans1+ 'is the smallest value');
}else if(ans2<ans1 && ans2<ans3 && ans2<ans4){
    console.log(+ans2+ 'is the smallest value');
}else if(ans3<ans1 && ans3<ans2 && ans3<ans4){
    console.log(+ans3+ 'is the smallest values');
}else{
    console.log(+ans4+'is the smallest value');
}