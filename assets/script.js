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
];

function removeBulletClass(index) {
	let bulletSelected = document.getElementById(`${index}`);
	bulletSelected.classList.remove("dot_selected");
};

function addBulletClass(index) {
	bulletSelected = document.getElementById(`${index}`);
	bulletSelected.classList.add("dot_selected");
};

function changeImageAndTitle(index) {
	let tagline = document.querySelector("#banner p");
	let image = document.querySelector(".banner-img");

	image.src=`./assets/images/slideshow/${slides[index].image}`;
	let p = `<p>${slides[index].tagLine}</p>`;
	tagline.innerHTML = p;
};

let bulletDivBlock = document.querySelector(".dots");
let bulletId = 0;

for(let i = 1; i <= slides.length; i++) {
	let bullet = document.createElement("span");
	bullet.id = bulletId;
	if(bulletId===0){
		bullet.classList=("dot dot_selected")
	}else{
		bullet.classList=("dot")
	};
	bulletDivBlock.appendChild(bullet);
	bulletId++;
};


let leftArrow = document.querySelector(".arrow_left");
let imageIndex = 0;

leftArrow.addEventListener("click", () => {
	removeBulletClass(imageIndex);

	if(imageIndex>0){
		imageIndex--
	}else {
		imageIndex=(slides.length-1)
	};
	changeImageAndTitle(imageIndex);
	addBulletClass(imageIndex);

});
 
let rightArrow = document.querySelector(".arrow_right");

rightArrow.addEventListener("click", () => {
	removeBulletClass(imageIndex);

	if(imageIndex<(slides.length-1)){
		imageIndex++
	}else {
		imageIndex=0
	};
	changeImageAndTitle(imageIndex);
	addBulletClass(imageIndex);

});



