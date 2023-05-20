import { initializeScroll, rotateArrow } from './scroll.js';
import { initializeTimer } from './timer.js';
import { initializeTextUpdate } from './textUpdate.js';
import { initializeRequest } from './request.js';
import { initializeAccordion } from './accordion.js';
import { initializeAnimation, initializeScrollAnimation } from './animation.js';

window.onload = () => {
    initializeTimer();
    initializeTextUpdate();
    initializeRequest();
    initializeScroll();
    initializeAccordion();
    initializeAnimation();
    initializeScrollAnimation();
};
document.getElementById('scroll-button').addEventListener('click', rotateArrow);
