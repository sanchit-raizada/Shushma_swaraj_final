export function headerChanged() {
    const mobileNavToggleBtn = document.querySelector('#mobile-nav-toggle');
    const mobileNavToggleCrossBtn = document.querySelector('#mobile-nav-toggle-cross')
    function mobileNavToggle() {
        const isActive = document.body.classList.toggle('mobile-nav-active');
        const icon = mobileNavToggleBtn.querySelector('i');
        
        
        if (isActive) {
            // When menu is active - X icon with blue background and white text
            icon.className = 'fa fa-times text-white';
            mobileNavToggleBtn.classList.remove('bg-white', 'text-black');
            mobileNavToggleBtn.classList.add('bg-primary', 'text-white');
            
        } else {
            // When menu is closed - bars icon with white background and black text
            icon.className = 'fa fa-bars text-black';
            mobileNavToggleBtn.classList.remove('bg-primary', 'text-white');
            mobileNavToggleBtn.classList.add('bg-white', 'text-black');
        }
    }

    if (mobileNavToggleBtn && mobileNavToggleCrossBtn) {
        mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
        mobileNavToggleCrossBtn.addEventListener('click',mobileNavToggle)
    }

    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            this.parentNode.classList.toggle('active');
            this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
            e.stopImmediatePropagation();
        });
    });
}