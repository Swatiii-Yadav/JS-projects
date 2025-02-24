let num=parseINt(prompt("Enter a number: "));
for(let i=2;i<=num/2;i++){
    if(num%2==0){
        console.log("Not a prime number");

    }
    else{
        console.log(`Prime number`);
    }
}