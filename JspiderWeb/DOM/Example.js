//crud opr on html elements

//dom selector methods
//? I. Retrieve


// ! 1.document.getElementById('Id')
let p=document.getElementById("heading");
console.log(p);


// ! 2.document.getElementsByClassName('class')
let x=document.getElementsByClassName("listItems");
console.log(x);
let y=document.getElementsByClassName("listItems");
console.log(y);


// ! 3.document.getElementsByTagName('tag name')
let ul=document.getElementsByTagName('ul');
console.log(ul);
let n=document.getElementsByTagName('li');
console.log(n);
let o=document.getElementsByTagName('p');
console.log(o);
let ulc=document.getElementsByTagName('ul');
console.log(ul[0].children[3]);

//! 4. document.getElementsByName('name')
let name =document.getElementsByName('user');

console.log(name[0]);
let emails =document.getElementsByName('email');

console.log(emails)

//! 5. document.querySelector('selector')
//query selector is an adv method  where we can pass any css selector as the argument
//it will be select first matching element with that particular selector 
//it return single html 
let democlass=document.querySelector('.listItems');
console.log(democlass);
console.log(document.querySelector('ul'));

//! 6.  document.querySelectorAll('selector')
//it will select all matching  elements
console.log(document.querySelectorAll('.listItems'));

// ? II. update html  elements
let sec1=document.getElementById('sec');
console.log('Inner html');
console.log(sec1.innerHTML);
console.log('Inner text');
console.log(sec1.innerText);
console.log('text content');
console.log(sec1.textContent);

// ? III. create 
// document.CreateElement('tagName')
let img=document.createElement('img');
img.src="image4.png";

let body=document.body;
body.append(img);