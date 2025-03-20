
// ! DOM (Document Object Modal)
console.log(window)
console.log(document)
console.dir(document)
// console.dir(document.all) // [HTML Collection] all the elements prsent inside document
// console.log(document.body)
// console.log(document.links)
// console.log(document.images)

let allChilds = document.body.children;
for(let child of allChilds){
    console.log(child)
}

let li2 = document.body.children[2].children[0].children[1];
console.log(li2)

console.log(document.body.children[2].children[0].children[3]);
