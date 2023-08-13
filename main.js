// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const hamburgerButton = document.querySelector(".mobile-hamburger");
const primaryHeader = document.querySelector(".primary-header");
const primaryNavigation = document.querySelector(".primary-navigation");
const body = document.querySelector("body");
const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");

hamburgerButton.addEventListener("click", () => {
	primaryNavigation.toggleAttribute("data-visible");
	hamburgerButton.setAttribute(
		"aria-expanded",
		primaryNavigation.hasAttribute("data-visible")
	);
	primaryHeader.toggleAttribute("data-overlay");
	if (primaryNavigation.hasAttribute("data-visible")) {
		body.style.height = "100%";
		body.style.overflowY = "hidden";
		iconClose.style.display = "block";
		iconHamburger.style.display = "none";
	} else {
		body.style.overflowY = "auto";
		iconClose.style.display = "none";
		iconHamburger.style.display = "block";
	}
});

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	direction: "horizontal",
	initialSlide: 1,
	centeredSlides: true,
	rewind: true,
	autoHeight: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		780: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		925: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});
