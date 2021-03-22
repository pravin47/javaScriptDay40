let num1;
let num2;
let num3;
let num4;
let num5;
num1 = Math.floor(Math.random()*100+100);
num2 = Math.floor(Math.random()*100+100);
num3 = Math.floor(Math.random()*100+100);
num4 = Math.floor(Math.random()*100+100);
num5 = Math.floor(Math.random()*100+100);
console.log(+num1+ ',' +num2+ ',' +num3+ ',' +num4+ ',' +num5)
if(num1>num2 && num1>num3 && num1>num4 && num1>num5){
    console.log (+num1+ " is the largest number");
}else if (num2>num1 && num2>num3 && num2>num4 && num2>num5){
    console.log (+num2+ ' is the largest number');    
}else if (num3>num1 && num3>num2 && num3>num4 && num3>num5){
    console.log (+num3+ ' is the largest number');
}else if (num4>num1 && num4>num2 && num4>num3 && num4>num5){
    console.log (+num4+ 'is the the largest number')
}else{
    console.log(+num5+ ' is the largest number');
}
if(num1<num2 && num1<num3 && num1<num4 && num1<num5){
    console.log (+num1+ " is the smallest number");
}else if (num2<num1 && num2<num3 && num2<num4 && num2<num5){
    console.log (+num2+ ' is the smallest number');    
}else if (num3<num1 && num3<num2 && num3<num4 && num3<num5){
    console.log (+num3+ ' is the smallest number');
}else if (num4<num1 && num4<num2 && num4<num3 && num4<num5){
    console.log (+num4+ 'is the the smallest number')
}else{
    console.log(+num5+ ' is the smallest number');
}
