import { initializeScroll, rotateArrow } from './scroll.js';
import { initializeTimer } from './timer.js';
import { initializeTextUpdate } from './textUpdate.js';
import { initializeForm } from './form.js';
import { initializeAccordion } from './accordion.js';
import { initializeAnimation } from './animation.js';

window.onload = () => {
    initializeTimer();
    initializeTextUpdate();
    initializeForm();
    initializeScroll();
    initializeAccordion();
    initializeAnimation();
};
document.getElementById('scroll-button').addEventListener('click', rotateArrow);
