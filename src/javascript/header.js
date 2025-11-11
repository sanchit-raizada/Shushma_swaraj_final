// export function initHeader() {
//     var toggleOpen = document.getElementById('toggleOpen');
//     var toggleClose = document.getElementById('toggleClose');
//     var collapseMenu = document.getElementById('collapseMenu');

//     function handleClick() {
//         if (collapseMenu.style.display === 'flex') {
//             // collapseMenu.style.display = 'none';
//             // toggleOpen.style.display="flex";
//             toggleClose.style.display="none";

//         } else {
//             // collapseMenu.style.display = 'flex';
//             // toggleOpen.style.display="none"
//             toggleClose.style.display="flex"

//         }
//     }



//     toggleOpen.addEventListener('click', handleClick);
//     toggleClose.addEventListener('click', handleClick);

//     // for mega menu
//     const toggleMegaMenu = document.getElementById('toggle-mega-menu');
//     const megaMenu = document.getElementById('mega-menu');

//     // Pehle se mega menu ko hidden karo
//     megaMenu.classList.add('hidden');

//     toggleMegaMenu.addEventListener('click', (e) => {
//         e.stopPropagation();
//         megaMenu.classList.toggle('hidden');
//         toggleMegaMenu.parentElement.classList.toggle('border-transparent');
//         toggleMegaMenu.classList.toggle('text-slate-900');
//         toggleMegaMenu.classList.toggle('text-slate-600');
//     });

//     // Close on outside click
//     document.addEventListener('click', (e) => {
//         const isClickInsideMenu = megaMenu.contains(e.target);
//         const isClickOnButton = toggleMegaMenu.contains(e.target);

//         if (!isClickInsideMenu && !isClickOnButton) {
//             megaMenu.classList.add('hidden');
//             toggleMegaMenu.parentElement.classList.add('border-transparent');
//             toggleMegaMenu.classList.add('text-slate-600');
//             toggleMegaMenu.classList.remove('text-slate-900');
//         }
//     });
// }


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
