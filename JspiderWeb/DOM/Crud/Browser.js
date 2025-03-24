const browsers = [
    "Google Chrome",
    "Mozilla Firefox",
    "Microsoft Edge",
    "Safari",
    "Opera",
    "Brave",
    "Vivaldi",
    "Tor Browser",
    "Samsung Internet",
    "UC Browser"
];
const browserGradients = [
    "conic-gradient(red, yellow, green, blue)", // Google Chrome
    "conic-gradient(orange, blue)", // Mozilla Firefox
    "conic-gradient(blue, white)", // Microsoft Edge
    "conic-gradient(silver, white)", // Safari
    "conic-gradient(red, white)", // Opera
    "conic-gradient(orange, white)", // Brave
    "conic-gradient(red, black)", // Vivaldi
    "conic-gradient(purple, black)", // Tor Browser
    "conic-gradient(blue, white)", // Samsung Internet
    "conic-gradient(blue, orange)" // UC Browser
];
let ul=document.createElement('ul');
document.body.appendChild(ul);
browsers.forEach((el,i)=>{
    let li=document.createElement('li');
    li.innerText=el;
    ul.appendChild(li);
    li.style.backgroundImage=browserGradients[i];
    li.style.color="white";
    li.style.padding="20px";
    li.style.margin="20px";
    li.style.borderRadius="50%"
    li.style.width="50px"
})