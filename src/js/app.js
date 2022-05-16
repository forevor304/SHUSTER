import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

window.addEventListener('scroll',function(){
    var nav = this.document.querySelector("#nav");
    nav.classList.toggle('navigation_sticky', window.scrollY > 0);
    var nav_logo = this.document.querySelector("#nav_logo");
    nav_logo.classList.toggle('navigation__logo_sticky', window.scrollY > 0);

})

let swiper = new Swiper(".swiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector('.popup').classList.add("popup__active");
  });
  document.querySelector(".popup__close-btn").addEventListener("click", function(){
    document.querySelector('.popup').classList.remove("popup__active");
  });


  let galleryImages = document.querySelectorAll(".gallery-img");
  let getLatestOpendImg;
  let windowWidth = window.innerWidth;

if(galleryImages) {
    galleryImages.forEach(function(image , index) {
		image.onclick = function() {
			let getElementCss = window.getComputedStyle(image);	
			let getFullImgUrl = getElementCss.getPropertyValue("background-image");
			let getImgUrlPos = getFullImgUrl.split("/img/");
			let setNewImgUrl = getImgUrlPos[1].replace('")','');

			getLatestOpendImg = index + 1;

			let container = document.body;
			let newImgWindow = document.createElement("div");
			container.appendChild(newImgWindow);
			newImgWindow.setAttribute("class", "img-window");
			newImgWindow.setAttribute("onclick", "closeImg()");

			let newImg = document.createElement('img');
			newImgWindow.appendChild(newImg);
			newImg.setAttribute('src','img/' + setNewImgUrl);

			newImg.onload = function() {
				let imgWidth = this.width;
				let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

				let newNextBtn = document.createElement('a');
				let btnNextText = document.createTextNode('>');
				newNextBtn.appendChild(btnNextText);
				container.appendChild(newNextBtn);
				newNextBtn.setAttribute('class','img-btn-next');
				newNextBtn.setAttribute('onclick','changeImg()');
				newNextBtn.style.cssText = "right:" + calcImgToEdge + " px;";

				let newPrevBtn = document.createElement('a');
				let btnPrevText = document.createTextNode('<');
				newPrevBtn.appendChild(btnPrevText);
				container.appendChild(newPrevBtn);
				newPrevBtn.setAttribute('class','img-btn-prev');
				newPrevBtn.setAttribute('onclick','changeImg()');
				newPrevBtn.style.cssText = "left:" + calcImgToEdge + " px;";

			}	
		}
    });
}


function closeImg() {
	document.querySelector(".img-window").remove();
}