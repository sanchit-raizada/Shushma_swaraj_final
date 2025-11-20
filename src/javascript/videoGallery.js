export function initVideoGallery() {


    const modal = document.getElementById('videoModal');
    const player = document.getElementById('videoFrame');
    const closeBtn = document.getElementById('closeBtn');

    document.addEventListener('click', e => {
        const card = e.target.closest('[data-video]');
        if (!card) return;
        player.src = card.dataset.video;
        player.poster = card.dataset.poster;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        player.play();          
    });

    function closeModal() {
        player.pause();
        player.src = '';        // reset
        modal.classList.add('hidden');
    }
    modal.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => e.key === 'Escape' && closeModal());
}