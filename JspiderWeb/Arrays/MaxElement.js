let a = [22, 65, 1, 39];
let i;
let max = a[0];

for (i = 1; i < a.length; i++) {
    if (a[i] > max)
        max = a[i];
}

console.log(max);
