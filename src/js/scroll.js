export const initializeScroll = () => {
    const isAtSecondSection = false;
    document.getElementById("scroll-button").addEventListener("click", function () {
        if (!isAtSecondSection) {
            document.getElementById("events").scrollIntoView({ behavior: 'smooth' });
            isAtSecondSection = true;
        } else {
            document.getElementById("header").scrollIntoView({ behavior: 'smooth' });
            isAtSecondSection = false;
        }
    });
};

export const rotateArrow = () => {
    const button = document.getElementById('scroll-button')
    button.classList.toggle('underline');
}




