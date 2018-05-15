'use strict';

var postUrl = 'http://timerr.proxy.beeceptor.com/message';
var submitButton = void 0;
var subjectInput = void 0;
var emailInput = void 0;
var messageInput = void 0;
var formElement = void 0;

document.addEventListener('DOMContentLoaded', function () {
    subjectInput = document.getElementById('message-subject');
    emailInput = document.getElementById('message-email');
    messageInput = document.getElementById('message-text');
    submitButton = document.getElementById('message-submit');
    formElement = document.getElementById('message-form');

    submitButton.addEventListener('click', function (e) {
        return onSubmit(e);
    });
});

function onSubmit(e) {
    if (formElement.checkValidity()) {
        e.preventDefault();
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            return handleResponse(request);
        };
        request.open('post', postUrl, true);
        var data = JSON.stringify({
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
    alert("Couldn't send message, please try again later.");
}
//# sourceMappingURL=contact-us-gui.js.map