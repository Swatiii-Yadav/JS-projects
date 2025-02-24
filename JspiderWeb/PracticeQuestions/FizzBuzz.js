let num1=parseInt(prompt("Enter a number:"));
if(num1%3==0 && num1%5==0){
    console.log("FizzBuzz");
}
else if(num1%5==0){
    console.log("Fizz")
}
else if(num1%3==0){
    console.log("Buzz");
}
else{
    console.log("Please enter a valid number");
}