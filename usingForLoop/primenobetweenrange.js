const prompt = require('prompt-sync')({sigint:true});
let start = prompt('enter the start values of range');
let end = prompt('enter the end values of range');
start = Number(start);
end= Number(end);
let i;
let j;
for(i=start;i<=end;i++){

    for(j=2;j<=end;j++){

        if(i%j ==0){

            break;
        }
    }
    if(i==j){
        console.log(i);
    }
}