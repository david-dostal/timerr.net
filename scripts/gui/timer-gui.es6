let stopwatchElement;
let startButtonElement;
let resetButtonElement;
let formElement;

let hoursInput;
let minutesInput;
let secondsInput;

let timer = new Timer(1000, timerTick, 2 * 60 * 1000, timerCompleted);

document.addEventListener("DOMContentLoaded", (event) => {
    stopwatchElement = document.getElementById('timer-time');

    hoursInput = document.getElementById('hours-input');
    minutesInput = document.getElementById('minutes-input');
    secondsInput = document.getElementById('seconds-input');
    startButtonElement = document.getElementById('button-start');
    resetButtonElement = document.getElementById('button-reset');
    formElement = document.getElementById('timer-time');

    if(localStorage && localStorage.getItem('timer-start-time') === null) {
        saveTimerTime();
    }
    if(localStorage) {
        let {h, m, s} = JSON.parse(localStorage.getItem('timer-start-time'));
        timer.reset(toMilliseconds(h, m, s));
    }

    new NumberInput(hoursInput);
    new NumberInput(minutesInput);
    new NumberInput(secondsInput);

    startButtonElement.onclick = startClick;
    resetButtonElement.onclick = resetClick;

    updateUi(timer.getTime());
});

function timerTick(remaining) {
    //console.log(decomposeTime(remaining));
    updateUi(remaining);
}

function startClick() {
    switch (timer.getState()) {
        case TimerState.STOPPED:
            startTimer();
            break;
        case TimerState.PAUSED:
            timer.resume();
            startButtonElement.innerText = 'Pause';
            break;
        case TimerState.RUNNING:
            timer.pause();
            startButtonElement.innerText = 'Resume';
            break;
    }
}

function startTimer() {
    if (inputsValid()) {
        freezeInputs();
        let [h, m, s] = [parseInt(hoursInput.value), parseInt(minutesInput.value), parseInt(secondsInput.value)];
        saveTimerTime();
        timer.start(toMilliseconds(h, m, s));
        startButtonElement.innerText = 'Pause';
    }
}

function saveTimerTime() {
    if(localStorage) {
        let [h, m, s] = [parseInt(hoursInput.value), parseInt(minutesInput.value), parseInt(secondsInput.value)];
        localStorage.setItem('timer-start-time', JSON.stringify({h: h, m: m, s: s}));
    }
}


function resetClick() {
    timer.reset();
    updateUi(timer.getTime());
    startButtonElement.innerText = 'Start';
    unfreezeInputs();
}

function timerCompleted() {
    setTimeout(() => {
        alert('Time is up!');
        resetClick();
    }, 1); // Timeout needed to give time to the browser to re-render before the alert is shown.
}

function updateUi(millis) {
    //console.log(millis);
    millis = Math.round(millis / 1000) * 1000;
    let {h, m, s, _} = decomposeTime(millis);
    hoursInput.value = h.toString().padStart(2, '0');
    minutesInput.value = m.toString().padStart(2, '0');
    secondsInput.value = s.toString().padStart(2, '0');
}

function inputsValid() {
    let valid = hoursInput.validity.valid && minutesInput.validity.valid && secondsInput.validity.valid;
    if (!valid) {
        formElement.reportValidity();
    }
    return valid;
}

function freezeInputs() {
    hoursInput.setAttribute('readonly', '');
    minutesInput.setAttribute('readonly', '');
    secondsInput.setAttribute('readonly', '');
}

function unfreezeInputs() {
    hoursInput.removeAttribute('readonly');
    minutesInput.removeAttribute('readonly');
    secondsInput.removeAttribute('readonly');
}