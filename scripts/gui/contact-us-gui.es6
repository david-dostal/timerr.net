let postUrl = 'http://timerr.proxy.beeceptor.com/message';
let submitButton;
let subjectInput;
let emailInput;
let messageInput;
let formElement;

document.addEventListener('DOMContentLoaded', () => {
    subjectInput = document.getElementById('message-subject');
    emailInput = document.getElementById('message-email');
    messageInput = document.getElementById('message-text');
    submitButton = document.getElementById('message-submit');
    formElement = document.getElementById('message-form');

    submitButton.addEventListener('click', (e) => onSubmit(e));
});

function onSubmit(e) {
    if (formElement.checkValidity()) {
        e.preventDefault();
        let request = new XMLHttpRequest();
        request.onreadystatechange = () => handleResponse(request);
        request.open('post', postUrl, true);
        let data = JSON.stringify({
            subject: subjectInput.value,
            email: emailInput.value,
            message: messageInput.value
        });
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        request.send(data);
    }
}

function handleResponse(request) {
    if (request.readyState === 4) {
        if (request.status === 200) {
            onSuccess();
        } else {
            onFailure();
        }
    }
}

function onSuccess() {
    alert('Message successfully sent.');
    window.location.reload();
}

function onFailure() {
    alert("Couldn't send message, please try again later.")
}