
let body = document.body;

for (i = 0; i < 100; i++) {
    let button = document.createElement('button');
    button.innerText = 'Button-' + (i + 1);
    button.style.padding = '10px';
    button.style.margin = '10px';
    button.addEventListener('click', () => {
        button.style.backgroundColor = randomColor();
        button.style.color = randomColor();
    })
    body.appendChild(button);

}

function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() *255);

    return `rgb(${r},${g},${b})`;
}


