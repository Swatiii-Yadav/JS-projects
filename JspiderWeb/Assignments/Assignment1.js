let uname=prompt("Enter a name:");
if(uname){
    let age=prompt("Enter age:");
    if(age>18 && age<40){
        console.log( uname +"is partial eligible")
    }
    else if(age>40){
        console.log(uname +" is fully eleigible ")
    }
}