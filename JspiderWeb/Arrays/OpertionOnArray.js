
// insert At the Beginning
let a = [10, 20, 30, 40];
let i= 50;
a.unshift(i);
console.log(a);

//insert At the End
let arr = [10, 20, 30, 40];
let e = 50;
a.push(e);
console.log(arr);

// insert at speciifc position
let arr1 = [10, 20, 30, 40];
let pos = 2;
let ind = 50;
a.splice(pos, 0, ind);
console.log(arr1);


// delete from the beginning

let arr2= [10, 20, 30, 40];
let res = arr2.shift();
console.log(res); 


// delete from specific  position
let arr3 = [10, 20, 30, 40];
let idx = 2;
let res1 = a.splice(idx, 1);
console.log(res1);


//Delete an Element from the End of a JS Array
let arr4 = [10, 20, 30, 40];
let res2 = arr4.pop();
console.log(res2);


//Delete First Occurrence from a JS Array


let arr5 = [10, 20, 30, 20, 40];
let x = 20;
let idx1 = a.indexOf(x);
if (idx1 !== -1) {
  a.splice(idx1, 1);
}
console.log(arr5);

//Delete last Occurrence from a JS Array

let arr6 = [10, 20, 30, 20, 40];
let x2 = 20;
let idx3 = a.lastIndexOf(x);
if (idx3 !== -1) {
  a.splice(idx3, 1);
}
console.log(arr6);


//Delete all Occurrences in a JS Array
let arr7 = [10, 20, 30, 20, 40];
let x3 = 20;
let res3 = arr7.filter(e => e !== x);
console.log(res3); 
