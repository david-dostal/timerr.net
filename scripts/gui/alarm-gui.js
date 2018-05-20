'use strict';

var alarm = void 0;
var enableButton = void 0;
var hoursInput = void 0;
var minutesInput = void 0;
var remainingElement = void 0;
var formElement = void 0;

document.addEventListener("DOMContentLoaded", function (event) {
    enableButton = document.getElementById('button-enable');
    hoursInput = document.getElementById('hours-input');
    minutesInput = document.getElementById('minutes-input');
    remainingElement = document.getElementById('remaining-time');
    formElement = document.getElementById('timer-time');

    if (!LocalStorage.hasValue('alarm-target-time')) {
        saveAlarmTarget();
    }
    loadAlarmTarget();

    new NumberInput(hoursInput);
    new NumberInput(minutesInput);

    enableButton.onclick = enableClick;
    alarm = new Alarm(function () {
        return alarmFinished();
    }, getInputTime(), function () {
        return updateRemaining();
    });
});

function alarmFinished() {
    alert('Beep Beep! It\'s ' + new Date(alarm.targetTime()).toLocaleTimeString() + '.');
    enableButton.innerText = 'Enable';
    unfreezeInputs();
}

function updateRemaining() {
    remainingElement.innerText = formatRemaining(alarm.remaining());
}

function formatRemaining(remaining) {
    var mins = Math.round(remaining / (1000 * 60)) * 1000 * 60;

    var _decomposeTime = decomposeTime(mins),
        h = _decomposeTime.h,
        m = _decomposeTime.m,
        s = _decomposeTime.s,
        ms = _decomposeTime.ms;

    return h + 'h ' + m + 'm remaining';
}

function loadAlarmTarget() {
    if (LocalStorage.hasValue('alarm-target-time')) {
        var _LocalStorage$tryLoad = LocalStorage.tryLoad('alarm-target-time'),
            h = _LocalStorage$tryLoad.h,
            m = _LocalStorage$tryLoad.m;

        hoursInput.value = h.toString().padStart(2, '0');
        minutesInput.value = m.toString().padStart(2, '0');
    }
}

function saveAlarmTarget() {
    var time = { h: parseInt(hoursInput.value), m: parseInt(minutesInput.value) };
    LocalStorage.trySave('alarm-target-time', time);
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
    var valid = hoursInput.validity.valid && minutesInput.validity.valid;
    if (!valid) {
        formElement.reportValidity();
    }
    return valid;
}

function getInputTime() {
    var h = parseInt(hoursInput.value);
    var m = parseInt(minutesInput.value);
    var now = new Date();
    var targetToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0);
    if (targetToday.getTime() > now.getTime()) {
        return targetToday.getTime();
    } else {
        var oneDay = 24 * 60 * 60 * 1000;
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
//# sourceMappingURL=alarm-gui.js.map
//# sourceMappingURL=alarm-gui.js.map