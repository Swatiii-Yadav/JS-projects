console.log(Math.round(16.5))//17
console.log(Math.round(16.9))//17


 console.log(Math.trunc(16.7)) // 16
 console.log(Math.trunc(16.1) )// 16

 
 let randomValue = Math.floor(Math.random()*10);
 console.log(randomValue);

 

 function getOtp(){  
    let otp = Math.floor(Math.random()*8999)+1000;
    return otp;
    }
    console.log(getOtp())