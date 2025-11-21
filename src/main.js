import "@fortawesome/fontawesome-free/css/all.min.css";
import './style.css'




/* =====  CUSTOM CURSOR – IIFE  ===== */
(function () {
  const core  = document.querySelector('.cursor-core');
  const ring  = document.querySelector('.cursor-ring');
  if (!core || !ring) return;

  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  /* mouse track */
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    core.style.left = mouseX + 'px';
    core.style.top  = mouseY + 'px';
  });

  /* smooth ring */
  function animate() {
    ringX += (mouseX - ringX) * 0.1;
    ringY += (mouseY - ringY) * 0.1;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  /* click pulse */
  document.addEventListener('mousedown', () => {
    core.style.transform = 'translate(-50%, -50%) scale(0.7)';
    ring.style.transform = 'translate(-50%, -50%) scale(1.2)';
  });
  document.addEventListener('mouseup', () => {
    core.style.transform = 'translate(-50%, -50%) scale(1)';
    ring.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  /* hover enlarge + colour */
  document.querySelectorAll('button, a, .hover-effect, h2').forEach(el => {
    el.addEventListener('mouseenter', () => {
      core.style.width = core.style.height = '40px';
      core.style.background = '#011637';
      ring.style.width = ring.style.height = '50px';
      ring.style.borderColor = '#3b82f6';
    });
    el.addEventListener('mouseleave', () => {
      core.style.width = core.style.height = '20px';
      core.style.background = '#ffffff';
      ring.style.width = ring.style.height = '50px';
      ring.style.borderColor = '#ffffff';
    });
  });

  /* window leave / enter */
  document.addEventListener('mouseleave', () => {
    document.getElementById('custom-cursor').style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    document.getElementById('custom-cursor').style.opacity = '1';
  });
})();



import { headerChanged } from "./javascript/headerChanged.js";
import { initHeroSlider } from "./javascript/hero.js";
import { initMarqueeParent } from "./javascript/marque.js";
import { initNightMode } from "./javascript/darkmode.js";
import { initSocialMedia } from "./javascript/socialMediaBtn.js";
import { initVideoGallery } from "./javascript/videoGallery.js";
import { initClientSwiper } from "./javascript/clientSwiper.js";

document.addEventListener('DOMContentLoaded', () => {
    //night Mode 
    initNightMode()

    headerChanged();

    initHeroSlider();
    //Hero Slider

    initVideoGallery()

    initClientSwiper()

    //initmarqueeParent
    initMarqueeParent()





});