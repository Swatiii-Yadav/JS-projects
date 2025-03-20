// !BOM (Browser Object Model)
// BOM is used to interact with browser by using javascript
// BOM is the pat of the browser
// BOM is represented by window
// It consist of some object modals

// console.log(window)
//! properties ------------------------------------------------------------------>
// console.log(window.location)
// console.log(location)
// console.log(window.screen)
// console.log(window.history)
// console.log(window.navigator)
// console.log(window.document)

//? screen
// screen is a object modal present inside BOM(window)
// it will give the information about the viewport(screen)
// console.log(screen.width)
// console.log(screen.height)
// console.log(screen.availWidth)
// console.log(screen.availHeight)
// console.log(screen.orientation)

//? location
//? properties of location
// console.log(location)
// console.log(location.host)
// console.log(location.port)
// console.log(location.protocol)
// console.log(location.href)

//? methods of location
// location.reload() // it will reload the webpage
// location.assign("https://www.amazon.com")
// location.replace("https://www.pinterest.com") 

//? history
// console.log(history)
// console.log(history.length)
// history.forward() // move forward 1 page
// history.back() // move backward one page
// history.go(+numOfPages) --> forward with numOfPages
// history.go(-numOfPages) --> backward with numOfPages

//? navigator
// console.log(navigator);
// console.log(navigator.language);
// console.log(navigator.onLine);

//? innerHeight  outerHeight  innerwidth  outerWidth
// console.log(window.innerHeight);
// console.log(window.outerHeight);
// console.log(window.innerWidth);
// console.log(window.outerWidth);



//! Methods of window object(BOM)----------------------------------------------------------------------------------->
// prompt
// alert
// confirm

// let answer = confirm("Will you marry me");
// if(answer)
//     console.log("Yes babe");
// else
//     console.log("EWWWWWWW");

//? open(url)
// if you don't pass any argument, it will open in a new tab

//? close()
// close()------------> 

// if(navigator.onLine){
//     open("https://www.Amazon.com");
//     open("https://www.flipkart.com");
//     open("https://www.meesho.com");
//     open("https://www.pintrest.com");
// }
// else{
//     alert("Not connected to wifi");
// }





// ! setTimeout(callbackfunc...,delay)
// console.log("started");
// setTimeout(()=>{
//     console.log("I am timeout Function")
// },10000);
// console.log("ended");

// ! setinterval(callbackfunc...,delay)
// setInterval(()=>{
//     console.log("I am interval Function")
// },10000)


let myInterval = setInterval(()=>{
    let date = new Date();
    console.log(date.getSeconds());
}, 1000);


let mytimeout = setTimeout(()=>{
    let date = new Date();
    clearInterval(myInterval)
},1000 );

clearInterval(myInterval);
clearTimeout(mytimeout);