const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let leftArrow = document.querySelector(".arrow_left");
leftArrow.addEventListener("click", (event) => {
	console.log(event.target)
});

let rightArrow = document.querySelector(".arrow_right");
rightArrow.addEventListener("click", (event) => {
	console.log(event.target)
});

let bulletDivBlock = document.querySelector(".dots");
let bulletId = 1

for(let i = 1; i <= slides.length; i++) {
	let bullet= document.createElement("span")
	bullet.id= bulletId
	if (bulletId === 1){
		bullet.classList=("dot dot_selected");
	} else {
		bullet.classList=("dot")
	}
	bulletDivBlock.appendChild(bullet);
	bulletId = bulletId+i
};



