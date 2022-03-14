//Accordion Menu

document.querySelectorAll(".menu").forEach((menu) =>
	menu.addEventListener("click", () => {
		if (menu.parentNode.classList.contains("active")) {
			menu.parentNode.classList.toggle("active");
		} else {
			document.querySelectorAll(".menu").forEach((menu) => menu.parentNode.classList.remove("active"));

			menu.parentNode.classList.add("active");
		}
	})
);

// Function to show navbar

const hamMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");
const nav = document.querySelector("nav");
// hamMenu.addEventListener("click", displayNav);
// closeMenu.addEventListener('click', displayNav);

// function displayNav() {
// 	if (nav.classList.contains("active-nav")) {
// 		hamMenu.style.display = "block";
// 		closeMenu.style.display = "none";
// 		nav.style.display = "none";
// 		nav.classList.remove("active-nav");
// 	} else {
// 		hamMenu.style.display = "none";
// 		closeMenu.style.display = "block";
// 		nav.style.display = "flex";
// 		nav.classList.add("active-nav");
// 	}
// }

hamMenu.addEventListener("click", () => {
	nav.classList.add("active-nav");
	closeMenu.classList.add("menu-show");
	hamMenu.classList.add("menu-hide");
	closeMenu.classList.remove("menu-hide");
	hamMenu.classList.remove("menu-show");
});
closeMenu.addEventListener("click", () => {
	nav.classList.remove("active-nav");
	closeMenu.classList.add("menu-hide");
	hamMenu.classList.add("menu-show");
	closeMenu.classList.remove("menu-show");
	hamMenu.classList.remove("menu-hide");
});
