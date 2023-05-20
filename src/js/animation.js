export const initializeAnimation = () => {
    window.onload = () => {
        const anim_logo = document.getElementById('anim-logo');
        const vec1 = document.getElementById('vec1');
        const vec2 = document.getElementById('vec2');
        const intro_title = document.getElementById('intro-title');
        const timer = document.getElementById('timer');
        const link = document.getElementById('link-container')
        intro_title, anim_logo, vec1, vec2, link, timer.animationPlayState = 'running';
    };
};
