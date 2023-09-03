// Variables
let Header = document.getElementById("header");
// Functions Declaration
function MultipleColor() {
  let charts = "1234567890abcdef";
  let ColorLength = 6;
  let color = "";
  for (i = 1; i <= ColorLength; i++) {
    let RandomColors = Math.floor(Math.random() * charts.length);
    color += charts.substring(RandomColors, RandomColors + 1);
  }
  return "#" + color;
}
//console.log(MultipleColor());
//Function Expression (Anonymous function)(Arrow Function)
// const ColorChange = () => {
// Header.style.color=MultipleColor()
// };
// Changes every 30seconds
setInterval(() => {
  Header.style.color = MultipleColor();
  Header.style.backgroundColor = MultipleColor();
}, 10000);
/* End Of Header Colors*/

// Variables
let Container = document.querySelector(".container");
// Create 60 Div Boxes using for_loop
for (i = 1; i <= 63; i++) {
  let Div = document.createElement("div");
  Div.classList.add("box");
  Container.appendChild(Div);
}

//Add and Remove a class (.active) during scrolling the window;
let AllBoxes = document.querySelectorAll(".box");
// console.log(AllBoxes);
// Functions Declaration
function ScrollBehaviour() {
  AllBoxes.forEach((item) => {
    if (item.offsetTop < scrollY) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", ScrollBehaviour);
// Set Colors to Background;
function Colors() {
  AllBoxes.forEach((c) => {
    if (c.offsetTop < window.screenY) {
    } else {
      c.style.backgroundColor = MultipleColor();
    }
  });
}
window.addEventListener("scroll", Colors);
// To Get Numbers inside Boxes
for (i = 1; i <= AllBoxes.length; i++) {
  AllBoxes.forEach((e) => {
    e.innerHTML = i++;
  });
}
