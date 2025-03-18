function fun(){
    console.log(this)
}
fun()
// ! this inside a method will point to the parent object -->(obj in this example)
let obj = {
    pname:"Virat" , 
    team:"RCB",
    details:function(){
        console.log(`the name is ${this.pname} - ${this.team} `)
    }
}
console.log(obj)
obj.details()