import "@fortawesome/fontawesome-free/css/all.min.css";
import './style.css'

import { initHeader } from './javascript/header.js'
import { initHeroSlider } from "./javascript/hero.js";
import { initCustomCursor } from "./javascript/customCursor.js";
import { initMarqueeParent } from "./javascript/marque.js";
import { initNightMode } from "./javascript/darkmode.js";
import { initSocialMedia } from "./javascript/socialMediaBtn.js";

document.addEventListener('DOMContentLoaded', () => {
    //night Mode 
    initNightMode()


    //Header sections
    initHeader();

    initHeroSlider();
    //Hero Slider

    //custom cursor
    initCustomCursor()

    //initmarqueeParent
    initMarqueeParent()


    //initSocialMediaButton
    initSocialMedia()

});