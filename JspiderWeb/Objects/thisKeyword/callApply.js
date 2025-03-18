// Call Apply, Bind
//  used to change the reference of this keyword

function details(place){
    console.log(`${this.pname} - ${this.page} - ${place}`)
}
let p1 = {
    pname:"rohit",
    page:40
}
let p2 = {
    pname:"virat",
    page:30
}
 details.call(p1 , 'Delhi')
 details.apply(p1 , ['Mumbai'])
let fun = details.bind(p2)
fun("Mumbai")
fun("Delhi")
fun("Kolkata")