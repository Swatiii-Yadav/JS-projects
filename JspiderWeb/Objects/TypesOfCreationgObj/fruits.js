class Fruits{
    constructor(fname,fprice){
        this.fname=fname;
        this.fprice=fprice;
    }
    printFruits(){
        console.log(`${this.fname}-${this.fprice}`)
    }
}
//instantiation

let f1=new Fruits("mango",500);
//steps
//1 when we use this keyword it will allocate 