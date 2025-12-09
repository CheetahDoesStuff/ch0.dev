import { animate, spring } from 'https://esm.sh/animejs@4';

document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('.animate-text').forEach(el => {
        el.innerHTML = el.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
    });

    animate('nav', {
        y: [
            { to: '-100px', duration: 0 },
            { to: '0px', easing: 'easeOutQuad', duration: 1000 }
        ]
    });

    animate('footer', {
        y: [
            { to: '200px', duration: 0 },
            { to: '0px', easing: 'easeOutQuad', duration: 1500 }
        ]
    });

    animate('.box', {
        opacity: [
            { to: '0', duration: 0 },
            { to: '1', easing: "easeInOutQuad", duration: 1000 }
        ],
        y: [
            { to: '40px', duration: 0 },
            { to: '0px', easing: 'easeOutQuad', duration: 750 }
        ],
        delay: (el, i) => i * 200,
        complete: () => {
            animate('.link-group', {
                opacity: [
                    { to: '0', duration: 0 },
                    { to: '1', easing: "easeInOutQuad", duration: 1000 }
                ],
                y: [
                    { to: '40px', duration: 0 },
                    { to: '0px', easing: 'easeOutQuad', duration: 750 }
                ],
                delay: (el, i) => i * 200 + 1000
            });
            animate('.skill', {
                opacity: [
                    { to: '0', duration: 0 },
                    { to: '1', easing: "easeInOutQuad", duration: 1000 }
                ],
                y: [
                    { to: '40px', duration: 0 },
                    { to: '0px', easing: 'easeOutQuad', duration: 750 }
                ],
                delay: (el, i) => i * 200 + 400
            });
            animate('.tech-section', {
                opacity: [
                    { to: '0', duration: 0 },
                    { to: '1', easing: "easeInOutQuad", duration: 1000 }
                ],
                y: [
                    { to: '40px', duration: 0 },
                    { to: '0px', easing: 'easeOutQuad', duration: 750 }
                ],
                delay: (el, i) => i * 200 + 400
            });
            animate('.tech-section img', {
                opacity: [
                    { to: '0', duration: 0 },
                    { to: '1', easing: "easeInOutQuad", duration: 1000 }
                ],
                y: [
                    { to: '40px', duration: 0 },
                    { to: '0px', easing: 'easeOutQuad', duration: 750 }
                ],
                delay: (el, i) => i * 50 + 400
            });
            animate('.letter', {
                opacity: [
                    { to: '0', duration: 0 },
                    { to: '1', easing: "easeInOutQuad", duration: 1000 }
                ],
                y: [
                    { to: '40px', duration: 0 },
                    { to: '0px', easing: 'easeOutQuad', duration: 750 }
                ],
                delay: (el, i) => i * 5 + 400
            });
        }
    });
});
