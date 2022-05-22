// const images = ["1.jpg","3.jpg","5.jpg"];
const images = ["https://cdn.pixabay.com/photo/2017/07/30/00/03/night-photograph-2553103_960_720.jpg","https://cdn.pixabay.com/photo/2016/09/08/12/00/stars-1654074_960_720.jpg","https://cdn.pixabay.com/photo/2017/03/27/13/38/canyon-2178786_960_720.jpg"];


// const quote = document.querySelector("#quote span:first-child");
// const author = document.querySelector("#quote span:last-child");

const chosenImage = images[Math.floor(Math.random()*images.length)];
console.log(chosenImage);

const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;
bgImage.src = chosenImage;
bgImage.classList.add("bgImage");
console.log(bgImage);


document.body.appendChild(bgImage);

