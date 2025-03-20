
let player ={
    names:"Rohit",
    age:37,
    team:"MI",
    if:"yes", 
    // ! inside the object we can have keywords asa the key
    let:"what"
    }
    
    let input = prompt("please enter input as names , age and team")
    console.log(input)
    console.log(player.input) 
    // undefine ? it is trying to find the key as input inside the player
    console.log(player[input]) 
    // ? it will evaluate the value of the input variable

    // ! for adding values in object
     player.tites=5
     player["isMarried"]=true
     console.log(player)
    //  ! updating the properties
     player.names="Mohit"
     player["age"]=36
     console.log(player)   
    //  ! deleting the properties from an object
     delete player.names
     delete player["age"]
     console.log(player)   