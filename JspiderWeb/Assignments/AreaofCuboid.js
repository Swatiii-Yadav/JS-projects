function calculateAreaOfCuboid(length, width,height) {
    return 2((length * width)+(width * height)+(height * length));
}

let  length = 5;
let width = 10;
let height = 15;
var area = calculateAreaOfCuboid(length, width,height);
console.log(area); 