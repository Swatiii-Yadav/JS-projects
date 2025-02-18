
//Data type
let a=20;
console.log(typeof a);
let s="Str";
console.log(typeof s);
let c=true;
console.log(typeof c);
let d=undefined;
console.log(typeof d);
let n=null;
console.log(n);
let b=1n;
console.log(b);
let g=Symbol("id");
console.log(typeof g);

//tye coercion
//the explicit typeof conversion from mone data type to another is known as type coercion,it is done internally by js engine
console.log("Answer: ")
console.log('5'-2);
console.log('60'*true);
//first it will check 1<3 i.e true now true>2 ie true=1 ,so 1>2=false so answer will be false;
console.log(1<3>2);

//type 
console.log('1234a'*true);//output NaN not a number
console.log('1000'-'5000'+'0');


//explicit type conversion
console.log("explicit type conversion");
console.log(typeof NaN);
let x=Number('30');
console.log(typeof x);
let y=Number('30c');
console.log(typeof y);
let z=Number(true);
console.log(z); 



//Truthy and falsy values
//whenever we use the  values at the place of any condition or any boolean value
//than the value will be converted to true or false based on it truthy or falsy 
//? Falsy values-> 0,false,"",null,undefined,NaN
//? truthy values-> other than falsy whatever is there is evaluate as true

console.log("Truthy and falsy values");
console.log(null*80-'56'+765-0+'56');


