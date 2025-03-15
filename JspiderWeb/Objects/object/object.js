// //! OBJECTS
// //? Object is a programatic representation of a real world entity 
// //? object is the combination of multiple key and value pairs(properties)
// //? Key and value pair are seprated by colon(:)
// //? multiple properties are seprated by comma(,)

// let marker ={
//     color:"Black",
//     isMarried:true,
//     length:10,
//     7:"Dhoni",//? only number as a key is also possible
//     "leng*h":10,
//     "1marker":"hey" ,//? if u wan't to start with a number or want to use some other special characters we 
//                     //? must have to pass the key in double quotes("1key%y")
//     //! 1marker: "hey" can't start with a number

//     isMarried: false //? if we one key more than once it will take updated one
// }

// //! Accessing the properties of an object  
// //? we have 2 ways to access the properties of an object
// //! 1.  Dot notation
// console.log(marker.color);
// console.log(marker.isMarried)
// console.log(marker.length)

// //? whenever u have the key which is not following the rule of
// // ? idetifier we must use bracket notation
// //! 2.  braket notation
// console.log(marker["1marker"])
// console.log(marker[7])
// console.log(marker["isMarried"])
// console.log(marker["leng*h"])

// let player ={
// names:"Rohit",
// age:37,
// team:"MI",
// if:"yes", //! inside the object we can have keywords asa the key
// let:"what"
// }

// // let input = prompt("please enter input as names , age and team")
// // console.log(input)
// // console.log(player.input)// undefine //? it is trying to find the key as input inside the player
// // console.log(player[input]) //? it will evaluate the value of the input variable


// //! for adding values in object
// player.tites=5
// player["isMarried"]=true
// console.log(player)

// //! updating the properties
// player.names="Mohit"
// player["age"]=36
// console.log(player)

// //! deleting the properties from an object
// delete player.names
// delete player["age"]
// console.log(player)

// //!creating function inside the object
// let person ={
//     names:"mani",
//     age: 20,
//     //! 1st way of declaring function
//     isPlaying: function(){  //! function is an object is called method
//         console.log("yes still playing")
//     },
//      //! 2nd way of declaring function
//     isplay(){
//         console.log("hello ,I'm still playing")
//     }
// }

// console.log(person)
// console.log(person.isPlaying())
// console.log(person.isplay())

// let employee = [
//     {
//         names:"sunil",
//         sal:30000
//     },
// {
//     names:"aram",
//     sal:20000
// },
// {
//     names:"Rohit",
//     sal:46000
// },
// {
//     names:"atul",
//     sal:56000
// }
// ]
// let res=employee.map((el)=>{
//    if(['a','e','i','o','u'].includes(el.names.charAt(0).toLocaleLowerCase())){
//     return {name:el.names, sal:el.sal+= 5000}
//    }
//    return el;
// })
// console.log(res)
// //!-----using spread operator-------------------------------------------
// let res1=employee.map((el)=>{
//     if("aeiou".includes.names.charAt(0)){
//     return {...el,sal:el.sal+=2000}
//     }
//     return el
//  })
//  console.log(res1)

//  let result=employee.filter((el)=>{
    
//         return el.names.length>4
    
//  })
//
