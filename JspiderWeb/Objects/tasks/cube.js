class Cube {
    constructor(a) {
      this.a=a;
    }
    area(){
      let res=6*this.a*this.a; 
    console.log(`${res}`);
    
    }
  
    perimeter(){
      let res=12*(this.a); 
      console.log(`${res}`);
    }
  }
  let r=new Cube(9);
  console.log(r.area());
  console.log(r.perimeter());
  