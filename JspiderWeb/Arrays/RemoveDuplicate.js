const a  = [1, 2, 3, 4, 5, 2, 3, 6];
let dupl = [];

for (let i in a) {
    for (let j in a) {
        if (i !== j && a[i] === a[j] && !dupl.includes(a[i])) {
            dupl.push(a[i]);
        }
    }
}

console.log(dupl); 
