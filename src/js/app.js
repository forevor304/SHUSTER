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