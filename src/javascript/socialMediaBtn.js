export function initSocialMedia() {
    const mainBtn = document.getElementById('mainBtn');
    const container = document.getElementById('socialContainer');

    mainBtn.addEventListener('click', () => {
        container.classList.toggle('open');
    });

}