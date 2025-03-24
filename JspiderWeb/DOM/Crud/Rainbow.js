let rainbow = ["violet" , "indigo" , "blue" , "green" , "yellow" , "orange" , "red"]
  let str = "rainbow";
  let arrRainbow = str.split("");
  console.log(arrRainbow)
  let h1 = document.createElement('h1')
  h1.style.fontSize = "50px"
  document.body.appendChild(h1)
 
  arrRainbow.forEach((el , i)=>{
    let span = document.createElement('span')
    span.innerText = el.toUpperCase();
    span.style.color = rainbow[i%rainbow.length]
    h1.appendChild(span);
  });