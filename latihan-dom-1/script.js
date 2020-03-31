const btnChange = document.getElementById("btnChange");
btnChange.onclick = function() {
  //   document.body.style.backgroundColor = "pink";
  //   document.body.setAttribute("class", "pink");
  document.body.classList.toggle("pink");
};

const randomColor = document.createElement("button");
const btnTxt = document.createTextNode("Random Color");
randomColor.appendChild(btnTxt);
randomColor.setAttribute("type", "button");
btnChange.after(randomColor);

randomColor.addEventListener("click", function() {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const redSlider = document.querySelector("input[name=redSlider]");
const greenSlider = document.querySelector("input[name=greenSlider]");
const blueSlider = document.querySelector("input[name=blueSlider]");

redSlider.addEventListener("input", function() {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

greenSlider.addEventListener("input", function() {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

blueSlider.addEventListener("input", function() {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

document.body.addEventListener("mousemove", function(e) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = `rgb(${xPos},${yPos},100)`;
});
