class Circle {
    constructor( radius) {
      this.radius = radius;
      
    }
    area(){
      let res=(22/7)*this.radius*this.radius; 
    console.log(`${res}`);
    
    }
  
    circumference(){
      let res=2*(22/7)*this.radius; 
      console.log(`${res}`);
    }
  }
  let r=new Circle(5);
  console.log(r.area());
  console.log(r.circumference());
  