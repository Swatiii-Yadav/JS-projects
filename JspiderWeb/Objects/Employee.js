let employee = [
    {
        names:"sunil",
        sal:30000
    },
{
    names:"aram",
    sal:20000
},
{
    names:"Rohit",
    sal:46000
},
{
    names:"atul",
    sal:56000
}
]
let res=employee.map((el)=>{
   if(['a','e','i','o','u'].includes(el.names.charAt(0).toLocaleLowerCase())){
    return {name:el.names, sal:el.sal+= 5000}
   }
   return el;
})
console.log(res)
// !-----using spread operator-------------------------------------------
let res1=employee.map((el)=>{
    if("aeiou".includes.names.charAt(0)){
    return {...el,sal:el.sal+=2000}
    }
    return el
 })
 console.log(res1)   
 let result=employee.filter((el)=>{    
        return el.names.length>4     
 })
 console.log(result)