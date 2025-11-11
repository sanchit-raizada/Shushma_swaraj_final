export function initPreloader() {

    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');

    setTimeout(function () {
        // Hide preloader
        preloader.classList.add('preloader-hidden');

        // Show main content
        document.body.classList.add('content-loaded');


        setTimeout(function () {
            preloader.remove()
        }, 500)

    }, 3000)

    // Fallback - if JavaScript takes too long, hide preloader after max time
    setTimeout(function () {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('preloader-hidden');
            document.body.classList.add('content-loaded');
            setTimeout(() => preloader.remove(), 500);
        }
    }, 5000); // Max 5 seconds fallback


}



