export const initializeTextUpdate = () => {
    let elementsToUpdate = [
        { element: document.getElementById('daystext'), fullText: 'Days', shortText: 'DD' },
        { element: document.getElementById('hourstext'), fullText: 'Hours', shortText: 'HH' },
        { element: document.getElementById('minutestext'), fullText: 'Minutes', shortText: 'MM' },
        { element: document.getElementById('secondstext'), fullText: 'Seconds', shortText: 'SS' }
    ];

    const updateText = () => {
        let windowWidth = window.innerWidth;

        elementsToUpdate.forEach(function (elementToUpdate) {
            if (windowWidth < 768) {
                elementToUpdate.element.innerText = elementToUpdate.shortText;
            } else {
                elementToUpdate.element.innerText = elementToUpdate.fullText;
            }
        });
    }

    updateText();
    window.addEventListener('resize', updateText);
};
