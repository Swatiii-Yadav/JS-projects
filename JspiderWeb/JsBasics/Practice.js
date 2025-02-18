let num=prompt("Enter a number");
let num1=parseInt(num);
console.log( num1);
if(num1>2000){
    console.log("after discount " +(num1+(num1*0.2)));
}
else{
    console.log(num1+(num1*0.1));
}