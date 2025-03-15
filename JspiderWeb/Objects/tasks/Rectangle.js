class Rectangle {
  constructor(leng, width) {
    this.leng = leng;
    this.width=width;
  }
  area(){
    let res=this.leng*this.width; 
  console.log(`${res}`);
  
  }

  perimeter(){
    let res=2*(this.leng+this.width); 
    console.log(`${res}`);
  }
}
let r=new Rectangle(5,7);
console.log(r.area());
console.log(r.perimeter());

