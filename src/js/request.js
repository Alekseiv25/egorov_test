import $ from "jquery";

export const initializeRequest = () => {
    const validateEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    $(document).on('submit', '#subscribeForm', function (event) {
        event.preventDefault();

        let email = $('#email').val();

        if (!validateEmail(email)) {
            alert("Введите действительный адрес электронной почты.");
            return;
        }

        const url = "https://studapi.teachmeskills.by/auth/users/reset_email/";
        $.ajax({
            type: "POST",
            url: url,
            data: { email: email },
            success: function () {
                $('#title_message').text('success!');
                $('#message').text("You have successfully subscribed to the email newsletter");
                $('#popup').css('display', 'block');
            },
            error: function () {
                $('#title_message').text('error');
                $('#message').text("Something went wrong. Please try again.");
                $('#popup').css('display', 'block');
            }
        });

    });
};
