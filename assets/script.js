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

let bulletDivBlock = document.querySelector(".dots");
let bulletId = 0

for(let i = 1; i <= slides.length; i++) {
	let bullet = document.createElement("span")
	bullet.id = bulletId
	if(bulletId===0){
		bullet.classList=("dot dot_selected")
	}else{
		bullet.classList=("dot")
	}
	bulletDivBlock.appendChild(bullet);
	bulletId++
};


let leftArrow = document.querySelector(".arrow_left");
let image = document.querySelector(".banner-img");
let tagline = document.querySelector("#banner p");

let imageIndex = 0


leftArrow.addEventListener("click", () => {
	let bulletSelected = document.getElementById(`${imageIndex}`)
	bulletSelected.classList.remove("dot_selected")
	if(imageIndex>0){
		imageIndex--
	}else {
		imageIndex=(slides.length-1)
	}
	
	image.src=`./assets/images/slideshow/${slides[imageIndex].image}`
	let p = `<p>${slides[imageIndex].tagLine}</p>`
	tagline.innerHTML = p

	bulletSelected = document.getElementById(`${imageIndex}`)
	bulletSelected.classList.add("dot_selected")

});
 
let rightArrow = document.querySelector(".arrow_right");

rightArrow.addEventListener("click", () => {
	let bulletSelected = document.getElementById(`${imageIndex}`)
	bulletSelected.classList.remove("dot_selected")
	if(imageIndex<(slides.length-1)){
		imageIndex++
	}else {
		imageIndex=0
	}
	image.src=`./assets/images/slideshow/${slides[imageIndex].image}`
	let p = `<p>${slides[imageIndex].tagLine}</p>`
	tagline.innerHTML = p

	bulletSelected = document.getElementById(`${imageIndex}`)
	bulletSelected.classList.add("dot_selected")

});



