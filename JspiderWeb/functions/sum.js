debugger;
function sum(p1,p2){
    console.log(p1+p2);
    return p1+p2;
}
let num1=parseInt(prompt("Enter first number"));
let num2=parseInt(prompt("Enter second number"));

sum(num1,num2);
let result=sum(2,5);
console.log(result);