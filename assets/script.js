const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


// Fonction pour changer l'image et le titre
function changeImageAndTitle(index) {
	const banner = document.querySelector("#banner");
	let tagline = document.querySelector("#banner p");
	let image = document.querySelector(".banner-img");
	if (!tagline) {
		const p = document.createElement("p");
		banner.prepend(p)
		tagline = document.querySelector("#banner p");
	}
	if (!image) {
		const img = document.createElement("img");
		img.classList.add("banner-img");
		banner.prepend(img)
		image = document.querySelector(".banner-img");
	}

	image.src = `./assets/images/slideshow/${slides[index].image}`;
	image.alt = slides[index].tagLine;
	tagline.innerHTML = `<p>${slides[index].tagLine}</p>`;
	updateSelectedBullet(index);
}

// Fonction pour mettre à jour la bullet point sélectionnée
function updateSelectedBullet(newIndex) {
	const bullets = document.querySelectorAll('.dot');
	bullets.forEach(bullet => bullet.classList.remove('dot_selected'));

	const bulletSelected = document.getElementById(newIndex);
	bulletSelected.classList.add('dot_selected');
}

// Création des bullet points
const bulletDivBlock = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	const bullet = document.createElement("span");
	bullet.className = 'dot';
	bullet.id = i;
	if (i === 0) {
		bullet.classList.add('dot_selected');
	}
	bulletDivBlock.appendChild(bullet);

	bullet.addEventListener("click", () => {
		changeImageAndTitle(i);
	});
}

// Gestion des flèches de navigation
let imageIndex = 0;

changeImageAndTitle(imageIndex);

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

leftArrow.addEventListener("click", () => {
	if (imageIndex > 0) {
		imageIndex--
	} else {
		imageIndex = slides.length - 1
	};
	changeImageAndTitle(imageIndex);
});

rightArrow.addEventListener("click", () => {
	if (imageIndex < slides.length - 1) {
		imageIndex++
	} else {
		imageIndex = 0
	};
	changeImageAndTitle(imageIndex);
});

