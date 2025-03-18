let marker ={
    color:"Black",
    isMarried:true,
    length:10,
    7:"Dhoni",
    // ? only number as a key is also possible
    "leng*h":10,
    "1marker":"hey" ,
    // ? if u wan't to start with a number or want to use some other special characters we 
                    // ? must have to pass the key in double quotes("1key%y")
//    ! 1marker: "hey" can't start with a number
       isMarried: false 
    //    ? if we one key more than once it will take updated one
   } 

//    ! Accessing the properties of an object  
//    ? we have 2 ways to access the properties of an object
//    ! 1.  Dot notation
   console.log(marker.color);
   console.log(marker.isMarried)
   console.log(marker.length)   
//    ? whenever u have the key which is not following the rule of
//     ? idetifier we must use bracket notation
//    ! 2.  braket notation
   console.log(marker["1marker"])
   console.log(marker[7])
   console.log(marker["isMarried"])
   console.log(marker["leng*h"])   