import Swiper from "swiper";


export function initClientSwiper() {
    var swiper = new Swiper(".clientSwiper", {
        loop: true,
        speed: 700,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        slidesPerView: 6,
        spaceBetween: 20,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1280: { slidesPerView: 6, spaceBetween: 20 },
        },
    });

}