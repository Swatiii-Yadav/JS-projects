// this inside the method as arrow function
    //  ! arrow function doesn't have this keyword of its own so it will borrow this keyword from its parent ()
      let obj = {
          v:this,
            // here this is pointing to the window
          pname:"Virat" , 
          team:"RCB",
          details:()=>{
              console.log(this)
               console.log(`the name is ${this.pname} - ${this.team} `)
          },
          details1:function(){
              console.log(this)
                // here this is pointing to obj
               console.log(`the name is ${this.pname} - ${this.team} `)
          }
      }
      obj.details()
      obj.details1()