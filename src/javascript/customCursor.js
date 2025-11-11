export function initCustomCursor() {

    const cursor = document.getElementById('custom-cursor');
    const cursorCore = document.querySelector('.cursor-core');
    const cursorRing = document.querySelector('.cursor-ring');

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Immediate core movement
        cursorCore.style.left = mouseX + 'px';
        cursorCore.style.top = mouseY + 'px';
    });

    // Smooth ring animation
    function animateCursor() {
        // Smooth follow for ring
        ringX += (mouseX - ringX) * 0.1;
        ringY += (mouseY - ringY) * 0.1;

        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';

        requestAnimationFrame(animateCursor);
    }

    // Click effect
    document.addEventListener('mousedown', () => {
        cursorCore.style.transform = 'translate(-50%, -50%) scale(0.7)';
        cursorRing.style.transform = 'translate(-50%, -50%) scale(1.2)';
    });

    document.addEventListener('mouseup', () => {
        cursorCore.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .hover-effect , h2');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorCore.style.width = '40px';
            cursorCore.style.height = '40px';
            cursorCore.style.background = '#011637';

            cursorRing.style.width = '50px';
            cursorRing.style.height = '50px';
            cursorRing.style.borderColor = '#3b82f6';
        });

        element.addEventListener('mouseleave', () => {
            cursorCore.style.width = '20px';
            cursorCore.style.height = '20px';
            cursorCore.style.background = '#ffffff';

            cursorRing.style.width = '50px';
            cursorRing.style.height = '50px';
            cursorRing.style.borderColor = '#ffffff';
        });
    });

    // Start animation
    animateCursor();

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
}
