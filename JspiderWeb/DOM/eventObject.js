
let box = document.querySelector('.box')
window.addEventListener('keypress' , (e)=>{
    console.log("hey")
    let left = parseInt(box.style.left)||0;

   if(e.key.toLowerCase() === "w"){
    console.log('i am moving to top')
    console.log(box.style)
     box.style.top = parseInt(box.style.getPropertyValue('top')) + 10 +'px' ;
    //  console.log(box.style.getPropertyValue('top'))
   }
   else if(e.key.toLowerCase() === "s"){
    console.log('i am  moving to bottom');
    box.style.top = parseInt(box.style.getPropertyValue('top')) - 10 +'px' ;
    // console.log(box.style.getPropertyValue('top'))

   }
//    else if(e.key.toLowerCase() === "l"){
//     console.log('i am goinf left');
//     box.style.left = parseInt(box.style.getPropertyValue('left')) + 10 +'px' ;
//     // console.log(box.style.getPropertyValue('left'))

//    }

else if (e.key.toLowerCase() === "a") {
    console.log('Moving left');
    box.style.left = (left - 10) + 'px';
} else if (e.key.toLowerCase() === "d") {
    console.log('Moving right');
    box.style.left = (left + 10) + 'px';
}


//    else if(e.key.toLowerCase() === "r"){
//     console.log('i am going right');
//     box.style.left = parseInt(box.style.getPropertyValue('right')) + 10 +'px' ;
//     console.log(box.style.getPropertyValue('right'))

//    }
})
// let btn = document.querySelector('button')
// btn.addEventListener('click'  , (e)=>{
//     console.log(e)
// })
// let inp = document.querySelector('input')
// inp.addEventListener('keypress' , (e)=>{
//     console.log(' i am keypress ')
//     console.log(e)
//     if(e.key.toLowerCase() === 'a'){
//         // console.log("Amitabh Bachchan")
//         inp.value="Amitabh Bachchan"
//     }
// })