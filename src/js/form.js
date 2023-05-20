export const initializeForm = () => {
    document.getElementById('subscribeForm').addEventListener('submit', function (event) {
        event.preventDefault();

        let email = document.getElementById('email').value;

        if (!validateEmail(email)) {
            alert("Введите действительный адрес электронной почты.");
            return;
        }
        
        const url = "https://run.mocky.io/v3/44d7016a-d7fd-4c2e-b29d-45a1684ef34d";
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", url);

        xmlhttp.onreadystatechange = function () {
            let popup = document.getElementById('popup');
            let message = document.getElementById('message');
            let title_message = document.getElementById('title_message');

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                title_message.innerText = 'success!';
                message.innerText = "You have successfully subscribed to the email newsletter";
                popup.style.display = 'block';
            } else if (xmlhttp.readyState == 4) {
                title_message.innerText = 'error';
                message.innerText = "Something went wrong. Please try again.";
                popup.style.display = 'block';
            }
        };

        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send("email=" + encodeURIComponent(email));
    });

    const validateEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
};

