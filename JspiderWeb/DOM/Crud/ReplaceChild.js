// ! parent.replaceChild()

let body=document.body;
let h2=document.querySelector('#heading2')
console.log(h2);
let para=document.createElement('p');
para.innerHTML='hey i am paragraph';
body.replaceChild(para,h2);