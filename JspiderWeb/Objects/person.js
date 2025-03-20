// creating function inside the object
     let person ={
         names:"mani",
         age: 20,
        //  ! 1st way of declaring function
         isPlaying: function(){  
            // ! function is an object is called method
             console.log("yes still playing")
         },
        //   ! 2nd way of declaring function
         isplay(){
             console.log("hello ,I'm still playing")
         }
     }  
     console.log(person)
     console.log(person.isPlaying())
     console.log(person.isplay())  