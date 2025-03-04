let a = [22, 65, 1, 39];
let i;
let min = a[0];

for (i = 1; i < a.length; i++) {
    if (a[i] <min)
        min = a[i];
}

console.log(min);
