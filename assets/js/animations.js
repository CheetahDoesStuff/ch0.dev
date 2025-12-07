import { animate, spring } from 'https://esm.sh/animejs@4';

document.addEventListener('DOMContentLoaded', () => {
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
        delay: (el, i) => i * 200
    });
});
