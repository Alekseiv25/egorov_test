//timer
let countDownDate = new Date("May 31, 2023 00:00:00").getTime();

let x = setInterval(function () {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerText = "";
        document.getElementById("hours").innerText = "";
        document.getElementById("minutes").innerText = "";
        document.getElementById("seconds").innerText = "";
    }
}, 1000);



//Updates text
let elementsToUpdate = [
    { element: document.getElementById('daystext'), fullText: 'Days', shortText: 'DD' },
    { element: document.getElementById('hourstext'), fullText: 'Hours', shortText: 'HH' },
    { element: document.getElementById('minutestext'), fullText: 'Minutes', shortText: 'MM' },
    { element: document.getElementById('secondstext'), fullText: 'Seconds', shortText: 'SS' }
];

function updateText() {
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

//ajax
document.getElementById('subscribeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.getElementById('email').value;

    if (!validateEmail(email)) {
        alert("Введите действительный адрес электронной почты.");
        return;
    }
    const url = "https://run.mocky.io/v3/44d7016a-d7fd-4c2e-b29d-45a1684ef34d"
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", url);

    xmlhttp.onreadystatechange = function () {
        let popup = document.getElementById('popup');
        let message = document.getElementById('message');
        let title_message = document.getElementById('title_message')

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            title_message.innerText = 'success!'
            message.innerText = "You have successfully subscribed to the email newsletter";
            popup.style.display = 'block';
        } else if (xmlhttp.readyState == 4) {
            title_message.innerText = 'error'
            message.innerText = "Something went wrong. Please try again.";
            popup.style.display = 'block';
        }
    }

    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send("email=" + encodeURIComponent(email));
});

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


//accordion

var acc = document.getElementsByClassName("accordion-button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        var activeButton = document.querySelector('.accordion-button.active');
        if (activeButton && activeButton !== this) {
            activeButton.classList.remove("active");
            activeButton.parentElement.querySelector(".accordion-content").style.display = "none";
        }
        this.classList.toggle("active");
        var panel = this.parentElement.querySelector(".accordion-content");
        if (panel.style.display === "block") {
            panel.style.display = "none";
            panel.classList.remove("expanded");  // remove the additional class
        } else {
            panel.style.display = "block";
            panel.classList.add("expanded");  // add the additional class
        }
    });
}