let num=153;
let count=0,rem=0;
let temp=num;
let temp1=num;

while (temp>0){
    rem=temp%10;
    temp=parseInt(temp/10);
    count++;
}
let rem1=0,sum=0;
while (temp1>0){
    rem1=temp1%10;
    let pow=1;
    for (let i=1;i<=count;i++){
        pow*=rem1;
    }
    sum+=pow;
    temp1=parseInt(temp1/10);
}
if (sum==num){
    console.log("Armstrong number");
}
else{
    console.log("Not an Armstrong number");
}