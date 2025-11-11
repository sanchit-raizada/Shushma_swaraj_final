export function initHeader() {
    var toggleOpen = document.getElementById('toggleOpen');
    var toggleClose = document.getElementById('toggleClose');
    var collapseMenu = document.getElementById('collapseMenu');

    // ✅ Initially, make sure menu and close button are hidden correctly
    // collapseMenu.style.display = 'none';
    toggleClose.classList.add('hidden');
    toggleOpen.classList.remove('hidden');

    function handleClick(e) {
        // when open (hamburger) is clicked
        if (e.currentTarget.id === 'toggleOpen') {
            collapseMenu.classList.add('flex')
            collapseMenu.classList.remove('hidden')
            toggleOpen.classList.add('hidden');
            toggleClose.classList.remove('hidden');
        }
        // when close (X) is clicked
        else if (e.currentTarget.id === 'toggleClose') {
            //   collapseMenu.style.display = 'none';

            collapseMenu.classList.add('hidden');
            collapseMenu.classList.remove('flex')
            collapseMenu.classList.add('hidden')
            toggleClose.classList.add('hidden');
            toggleOpen.classList.remove('hidden');
        }
    }

    toggleOpen.addEventListener('click', handleClick);
    toggleClose.addEventListener('click', handleClick);

    // ✅ Mega menu code — keep same
    const toggleMegaMenu = document.getElementById('toggle-mega-menu');
    const megaMenu = document.getElementById('mega-menu');

    megaMenu.classList.add('hidden');

    toggleMegaMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        megaMenu.classList.toggle('hidden');
        toggleMegaMenu.parentElement.classList.toggle('border-transparent');
        toggleMegaMenu.classList.toggle('text-slate-900');
        toggleMegaMenu.classList.toggle('text-slate-600');
    });

    document.addEventListener('click', (e) => {
        const isClickInsideMenu = megaMenu.contains(e.target);
        const isClickOnButton = toggleMegaMenu.contains(e.target);

        if (!isClickInsideMenu && !isClickOnButton) {
            megaMenu.classList.add('hidden');
            toggleMegaMenu.parentElement.classList.add('border-transparent');
            toggleMegaMenu.classList.add('text-slate-600');
            toggleMegaMenu.classList.remove('text-slate-900');
        }
    });
}


function toggleDropdown(id) {
    if (!id) return;
    const allDropdowns = document.querySelectorAll('[id^="dropdown-"]');
    const allArrows = document.querySelectorAll('[id^="arrow-"]');
    allDropdowns.forEach(drop => drop.classList.add('hidden'));
    allArrows.forEach(arr => arr.classList.remove('rotate-180'));


    const dropdown = document.getElementById(`dropdown-${id}`);
    const arrow = document.getElementById(`arrow-${id}`);

    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        arrow.classList.add('rotate-180');
    } else {
        dropdown.classList.add('hidden');
        arrow.classList.remove('rotate-180');
    }
}


document.querySelectorAll('[data-dropdown]').forEach(btn => {
    btn.addEventListener('click', () => toggleDropdown(btn.dataset.dropdown));
});