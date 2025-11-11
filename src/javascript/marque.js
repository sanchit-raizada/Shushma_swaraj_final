import gsap from "gsap";


export function initMarqueeParent() {

    initMarquee('marqueeTop', -1); // Left to right
    initMarquee('marqueeBottom', 1); // Right to left

    function initMarquee(marqueeId, direction) {
        const marquee = document.getElementById(marqueeId);
        const items = marquee.querySelectorAll('.marquee-item');
        const itemWidth = items[0].offsetWidth + 32; // width + gap
        const totalWidth = itemWidth * items.length;

        // Set initial position
        gsap.set(marquee, { x: direction > 0 ? -totalWidth / 2 : 0 });

        // Create animation timeline
        const tl = gsap.timeline({ repeat: -1 });

        tl.to(marquee, {
            x: direction > 0 ? 0 : -totalWidth / 2,
            duration: 40,
            ease: "none",
            modifiers: {
                x: gsap.utils.unitize(gsap.utils.wrap(-totalWidth / 2, 0))
            }
        });

        // Hover interactions for individual items
        items.forEach(item => {
            // Store the original timeline
            item.originalTimeline = tl;

            item.addEventListener('mouseenter', () => {
                // Pause the timeline
                tl.pause();

                // Add glow effect to current item
                gsap.to(item, {
                    duration: 0.3,
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
                    borderColor: "rgba(59, 130, 246, 0.8)"
                });
            });

            item.addEventListener('mouseleave', () => {
                // Resume the timeline
                tl.resume();

                // Remove glow effect
                gsap.to(item, {
                    duration: 0.3,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                    borderColor: "transparent"
                });
            });
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            tl.kill();
            initMarquee(marqueeId, direction);
        });
    }


}