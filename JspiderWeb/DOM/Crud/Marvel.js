const marvelColors = [
    "linear-gradient(to right, red, gold)",   // Iron Man
    "linear-gradient(to right, blue, red, white)",  // Captain America
    "linear-gradient(to right, silver, red)", // Thor
    "linear-gradient(to right, green, purple)", // Hulk
    "linear-gradient(to right, black, red)",  // Black Widow
    "linear-gradient(to right, blue, red)",  // Doctor Strange
    "linear-gradient(to right, black, silver)",  // Black Panther
    "linear-gradient(to right, red, silver)", // Ant-Man
    "linear-gradient(to right, purple, black)", // Hawkeye
    "linear-gradient(to right, green, yellow, red)", // Vision
    "linear-gradient(to right, green, gold)", // Loki
    "brown", // Groot
    "linear-gradient(to right, red, blue, gold)", // Captain Marvel
];

const marvelCharacters = [
    "Iron Man",
    "Spider-Man",
    "Thor",
    "Captain America",
    "Hulk",
    "Black Widow",
    "Doctor Strange",
    "Black Panther",
    "Ant-Man",
    "Hawkeye",
    "Vision",
    "Loki",
    "Groot",
    "Captain Marvel"
];

let ul=document.createElement('ul');
document.body.appendChild(ul);
marvelCharacters.forEach((ele,i)=>{
    let li=document.createElement('li');
    li.innerText=ele;
    ul.appendChild(li);
    li.style.backgroundImage = marvelColors[i];
 li.style.color="white";
    li.style.margin="20px"
    li.style.backgroundColor="purple"
    li.style.padding="30px"
    li.style.width="60px"
  

})