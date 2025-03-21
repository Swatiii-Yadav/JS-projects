
const imageUrls = [
    "https://www.w3schools.com/w3images/fjords.jpg",
    "https://www.w3schools.com/w3images/lights.jpg",
    "https://www.w3schools.com/w3images/mountains.jpg",
    "https://www.w3schools.com/w3images/forest.jpg",
    "https://www.w3schools.com/w3images/nature.jpg",
    "https://www.w3schools.com/w3images/snow.jpg",
    "https://www.w3schools.com/w3images/rock.jpg",
    "https://www.w3schools.com/w3images/bridge.jpg"
  
  ];
  

  let container = document.createElement('section')
  document.body.appendChild(container);
  container.style.display = "flex";
  container.style.gap = "20px";
  container.style.flexWrap = "wrap";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";

  imageUrls.forEach((el , i)=>{
    let img = document.createElement('img')
    img.src = el;
    img.alt = `img${i}`;
    img.style.height = "200px"
    img.style.width = "200px"
    container.appendChild(img)
  })