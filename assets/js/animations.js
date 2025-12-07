import { animate, spring } from 'https://esm.sh/animejs@4';

document.addEventListener('DOMContentLoaded', () => {
    animate('nav', {
        y: [
            { to: '-100px', easing: 'easeInOutQuad', duration: 0 },
            { to: '0px', easing: 'easeInOutQuad', duration: 750 }
        ]
    });
});
