// const modal = document.querySelector(".hero");
// const shoePrice = document.getElementById("price");
// const addToCart = document.querySelector("#addtocart");
// const btnCloseModal = document.querySelector(".close");
// const controls = document.querySelector(".previous");
// const overlay = document.querySelector(".overlay");

const counter = document.querySelector(".counter");
const count = document.querySelector(".count");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
let mainPhoto = document.querySelector(".mainImage");
let images = document.querySelectorAll(".image");

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close");

// modalBtn.addEventListener("click", function () {
// 	modal.classList.toggle("open-modal");
// });

// closeBtn.addEventListener("click", function () {
// 	modal.classList.remove("open-modal");
// });

// let images = Array.from(document.getElementsByClassName("image"));

// function updateImage(e) {
// 	let currentImage = e.currentTarget;

// 	mainPhoto.src = currentImage.src;
// }

// images.forEach(function (image) {
// 	image.addEventListener("click", updateImage);
// });

function addToCart(e) {
	if ((e.currentTarget.classList = "plus")) {
		count.value = +1;
	} else {
		count.value = -1;
	}
	return count;
}

counter.forEach(function (counter) {
	counter.addEventListener("click", addToCart);
});

// plus.addEventListener("click", function () {});

// plus.addEventListener("click", function () {

// });
