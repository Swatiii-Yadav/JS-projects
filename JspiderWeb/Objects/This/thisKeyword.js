let a = 20;
var b = 30;
const c = 40;
var pname = "akshay"
var team = "MI"
let obj = {
    pname:'Rohit Sharma',
    team:"India",
    details:function(){
        console.log(this.pname , this.team)
    },
    details1:()=>{
        console.log(this.pname , this.team)
    }
}
obj.details()
obj.details1()
console.log(this.b)