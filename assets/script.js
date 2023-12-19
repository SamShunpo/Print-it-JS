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


// Fonction pour changer l'image et le titre
function changeImageAndTitle(index) {
    const tagline = document.querySelector("#banner p");
    const image = document.querySelector(".banner-img");

    image.src = `./assets/images/slideshow/${slides[index].image}`;
    tagline.innerHTML = `<p>${slides[index].tagLine}</p>`;
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
let bulletId = 0;

for (let i = 0; i < slides.length; i++) {
    const bullet = document.createElement("span");
    bullet.className = 'dot';
    bullet.id = bulletId;
    if (bulletId === 0) {
        bullet.classList.add('dot_selected');
    }
    bullet.addEventListener("click", () => {
        changeImageAndTitle(bullet.id);
        updateSelectedBullet(bullet.id);
    });
    bulletDivBlock.appendChild(bullet);
    bulletId++;
}

// Gestion des flèches de navigation
let leftArrow = document.querySelector(".arrow_left");
let imageIndex = 0;

leftArrow.addEventListener("click", () => {
	updateSelectedBullet(imageIndex);

	if(imageIndex>0){
		imageIndex--
	}else {
		imageIndex=(slides.length-1)
	};
	changeImageAndTitle(imageIndex);
	updateSelectedBullet(imageIndex)

});
 
let rightArrow = document.querySelector(".arrow_right");

rightArrow.addEventListener("click", () => {
	updateSelectedBullet(imageIndex)

	if(imageIndex<(slides.length-1)){
		imageIndex++
	}else {
		imageIndex=0
	};
	changeImageAndTitle(imageIndex);
	updateSelectedBullet(imageIndex)

});




