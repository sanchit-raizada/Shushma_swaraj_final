import "@fortawesome/fontawesome-free/css/all.min.css";
import './style.css'

import { initHeader } from './javascript/header.js'

import { headerChanged } from "./javascript/headerChanged.js";
import { initHeroSlider } from "./javascript/hero.js";
import { initCustomCursor } from "./javascript/customCursor.js";
import { initMarqueeParent } from "./javascript/marque.js";
import { initNightMode } from "./javascript/darkmode.js";
import { initSocialMedia } from "./javascript/socialMediaBtn.js";
import { initVideoGallery } from "./javascript/videoGallery.js";
import { initClientSwiper } from "./javascript/clientSwiper.js";

document.addEventListener('DOMContentLoaded', () => {
    //night Mode 
    // initNightMode()

    headerChanged();
    //Header sections
    // initHeader();

    initHeroSlider();
    //Hero Slider

    initVideoGallery()

    initClientSwiper()
    //custom cursor
    // initCustomCursor()

    //initmarqueeParent
    initMarqueeParent()


    //initSocialMediaButton
    // initSocialMedia()



});