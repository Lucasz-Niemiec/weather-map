//
const myMap = document.getElementById("main-container");
const date = document.querySelector(".date");
const parent = myMap.parentNode;
const imgContainer = document.getElementById("img-container");
const img = document.createElement("img");

// setting the date
const changingName = () => {
	date.textContent = "today's gato";
};

changingName();
//adding style to image
img.classList.add("imgMAp");
//creating the canvas image
html2canvas(myMap).then(function (canvas) {
	img.src = canvas.toDataURL();
	imgContainer.appendChild(img);
});
//removing the html elements to avoid duplicates
parent.removeChild(myMap);
html2canvas(myMap).then(function (canvas) {
	parent.appendChild(myMap);
});

console.log(myMap, "here");
