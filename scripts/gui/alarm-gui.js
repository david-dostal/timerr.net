let alarm;
let enableButton;
let hoursInput;
let minutesInput;
let remainingElement;
let formElement;

document.addEventListener("DOMContentLoaded", function (event) {
    enableButton = document.getElementById('button-enable');
    hoursInput = document.getElementById('hours-input');
    minutesInput = document.getElementById('minutes-input');
    remainingElement = document.getElementById('remaining-time');
    formElement = document.getElementById('timer-time');

    if(localStorage && localStorage.getItem('alarm-target-time') === null) {
        saveAlarmTarget();
    }
    if(localStorage) {
        let {h, m} = JSON.parse(localStorage.getItem('alarm-target-time'));
        hoursInput.value = h.toString().padStart(2, '0');
        minutesInput.value = m.toString().padStart(2, '0');
    }

    new NumberInput(hoursInput);
    new NumberInput(minutesInput);

    enableButton.onclick = enableClick;
    alarm = new Alarm(() => alarmFinished(), getInputTime(), () => updateRemaining());
});

function alarmFinished() {
    alert(`Beep Beep! It's ${new Date(alarm.targetTime()).toLocaleTimeString()}.`);
    enableButton.innerText = 'Enable';
    unfreezeInputs();
}

function updateRemaining() {
    remainingElement.innerText = formatRemaining(alarm.remaining());
}

function formatRemaining(remaining) {
    let mins = Math.round(remaining / (1000 * 60)) * 1000 * 60;
    let {h, m, s, ms} = decomposeTime(mins);
    return `${h}h ${m}m remaining`
}

function saveAlarmTarget() {
    if(localStorage) {
        let [h, m] = [parseInt(hoursInput.value), parseInt(minutesInput.value)];
        localStorage.setItem('alarm-target-time', JSON.stringify({h: h, m: m}));
    }
}

function enableClick() {
    switch (alarm.getState()) {
        case AlarmState.DISABLED:
            if (inputsValid()) {
                freezeInputs();
                saveAlarmTarget();
                alarm.enable(getInputTime());
                enableButton.innerText = 'Disable alarm';
            }
            break;
        case AlarmState.ENABLED:
            alarm.disable();
            unfreezeInputs();
            enableButton.innerText = 'Enable alarm';
            remainingElement.innerText = '';
            break;
    }
}

function inputsValid() {
    let valid = hoursInput.validity.valid && minutesInput.validity.valid;
    if(!valid) {
        formElement.reportValidity();
    }
    return valid;
}

function getInputTime() {
    let h = parseInt(hoursInput.value);
    let m = parseInt(minutesInput.value);
    let now = new Date();
    let targetToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0);
    if (targetToday.getTime() > now.getTime()) {
        return targetToday.getTime();
    } else {
        let oneDay = 24 * 60 * 60 * 1000;
        return targetToday.getTime() + oneDay;
    }
}

function freezeInputs() {
    hoursInput.setAttribute('readonly', '');
    minutesInput.setAttribute('readonly', '');
}

function unfreezeInputs() {
    hoursInput.removeAttribute('readonly');
    minutesInput.removeAttribute('readonly');
}
