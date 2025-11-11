import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Import Swiper modules
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

export function initHeroSlider() {
    console.log('Initializing hero slider...');
    
    const swiperContainer = document.querySelector('.mySwiper');
    if (!swiperContainer) {
        console.error('Swiper container not found');
        return;
    }

    // Thumbnail click functionality - pehle define karo
    const thumbnails = document.querySelectorAll('.thumbnail');
    console.log('Found thumbnails:', thumbnails.length);

    // Update active thumbnail function ko yahan define karo
    const updateActiveThumbnail = (index) => {
        console.log('Updating active thumbnail to index:', index);
        thumbnails.forEach(thumb => {
            thumb.classList.remove('active');
            thumb.classList.remove('border-white');
            thumb.classList.add('border-transparent');
        });

        if (thumbnails[index]) {
            thumbnails[index].classList.add('active');
            thumbnails[index].classList.add('border-white');
            thumbnails[index].classList.remove('border-transparent');
        }
    };

    const swiper = new Swiper('.mySwiper', {
        modules: [Navigation, Pagination, Autoplay, EffectFade],
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        on: {
            init: function () {
                console.log('Swiper initialized');
                updateActiveThumbnail(this.realIndex);
            },
            slideChange: function () {
                updateActiveThumbnail(this.realIndex);
            }
        }
    });

    // Thumbnail click functionality
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function () {
            const slideIndex = parseInt(this.getAttribute('data-index'));
            console.log('Thumbnail clicked, index:', slideIndex);
            swiper.slideTo(slideIndex);
        });
    });

    // Autoplay controls
    const pauseBtn = document.getElementById('pauseAutoplay');
    const playBtn = document.getElementById('playAutoplay');

    if (pauseBtn && playBtn) {
        pauseBtn.addEventListener('click', function () {
            swiper.autoplay.stop();
            pauseBtn.classList.add('opacity-50');
            playBtn.classList.remove('opacity-50');
        });

        playBtn.addEventListener('click', function () {
            swiper.autoplay.start();
            playBtn.classList.add('opacity-50');
            pauseBtn.classList.remove('opacity-50');
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
            swiper.slidePrev();
        } else if (e.key === 'ArrowRight') {
            swiper.slideNext();
        } else if (e.key === ' ') {
            // Spacebar toggles autoplay
            if (swiper.autoplay.running) {
                swiper.autoplay.stop();
                if (pauseBtn) pauseBtn.classList.add('opacity-50');
                if (playBtn) playBtn.classList.remove('opacity-50');
            } else {
                swiper.autoplay.start();
                if (playBtn) playBtn.classList.add('opacity-50');
                if (pauseBtn) pauseBtn.classList.remove('opacity-50');
            }
        }
    });

    return swiper;
}