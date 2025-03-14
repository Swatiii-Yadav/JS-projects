

class Student{
    constructor(name,phy,chem,maths,bio){
        this.name=name;
        this.phy=phy;
        this.chem=chem;
        this.maths=maths;
        this.bio=bio;
        this.grade="";
    }
    performance(){
        let avgMark=(this.phy+this.chem+this.maths+this.bio)/4;
      this.grade=this.grade(avgMark);
    }
    //details also will be stored inside the prototype object 
    details(){
        this.performance()
        console.log(`${this.name}-${this.age}`)
    }
}
  
function grade(avgMark){
    if(avgMark>=90){
        return "grade A"
    }

     else if(avgMark>=80){
        return "grade B"
    }

    else if(avgMark>=70){
        return "grade C"
    }
    else{
        return "grade D"
    }
}

let s1=new Student("swati",34,47,87,23);
console.log(s1);


///using class becouse whenever we create a method inside a class and calling it with ref var it will not allocate memory to it instead it share the address of that method whereeveer it is stored in a heap area.
///we do not use function keyword inside class for creating function