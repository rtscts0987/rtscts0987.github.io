const button = document.querySelector("button")
const body = document.querySelector("body");

const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
function click() {
  const color_left = colors[Math.floor(Math.random() * colors.length)];
  const color_right = colors[Math.floor(Math.random() * colors.length)];
  
  body.style.backgroundImage  = `linear-gradient(90deg, ${color_left}, ${color_right})`;

}

click()
button.addEventListener("click", click);
