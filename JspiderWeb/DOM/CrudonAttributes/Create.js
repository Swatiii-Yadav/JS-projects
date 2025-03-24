let div=document.querySelector('div');
//! div.setAttribute('attrName','attrValue');

div.setAttribute('id','demo');
//? read
let section=document.querySelector('section');
let attr=section.getAttribute('class');
console.log(attr);
console.log(section.getAttribute('id'));
//? update

let ar=document.querySelector('article');
ar.setAttribute('id','a2');

//! removeAttribute('attrName)
div.removeAttribute('title');