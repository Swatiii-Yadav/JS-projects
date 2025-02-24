let num=parseInt(prompt("Enter a number: "));
let rev=0;
let temp=num;
while(num>0){
    let rem=num%10;
    num=parseInt(num/10);
    rev=rev*10+rem;
}

if(temp==rev){
    console.log("Palindrome");
}   else{
    console.log("Not a Palindrome");
}