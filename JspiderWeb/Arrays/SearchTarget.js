
const array1 = [13, 23, 33, 43, 53];


let p = false;

for (let i = 0; i < array1.length; i++) {
    if (array1[i] === 53) {
        p = true;
        break;
    }
}

if (p) {
    console.log("53 is present in the array.");
} else {
    console.log("53 is not present in the array.");
}
