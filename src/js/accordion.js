export const initializeAccordion = () => {
    const acc = document.getElementsByClassName("accordion-button");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            const activeButton = document.querySelector('.accordion-button.active');
            if (activeButton && activeButton !== this) {
                activeButton.classList.remove("active");
                const activePanel = activeButton.parentElement.querySelector(".accordion-content");
                activePanel.classList.remove("expanded");
            }

            const panel = this.parentElement.querySelector(".accordion-content");
            this.classList.toggle("active");
            panel.classList.toggle("expanded");
        });
    }
};
