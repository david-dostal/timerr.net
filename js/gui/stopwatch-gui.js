'use strict';

var stopwatchElement = void 0;
var startButtonElement = void 0;
var resetButtonElement = void 0;
var shareButtonElement = void 0;
var lapTableElement = void 0;
var lapIndex = 1;

var stopwatch = new Stopwatch(100, timerTick);

document.addEventListener("DOMContentLoaded", function (event) {
    stopwatchElement = document.getElementById('timer-time');
    startButtonElement = document.getElementById('button-start');
    resetButtonElement = document.getElementById('button-reset');
    lapTableElement = document.getElementById('lap-table');
    shareButtonElement = document.getElementById('button-share-times');
    startButtonElement.onclick = startClick;
    resetButtonElement.onclick = resetClick;
});

function timerTick(elapsed) {
    var timeStr = formatTime(elapsed);
    updateUi(timeStr);
}

function startClick() {
    switch (stopwatch.getState()) {
        case TimerState.STOPPED:
            stopwatch.start();
            startButtonElement.innerText = 'Pause';
            resetButtonElement.innerText = 'Lap';
            break;
        case TimerState.PAUSED:
            stopwatch.resume();
            startButtonElement.innerText = 'Pause';
            resetButtonElement.innerText = 'Lap';
            break;
        case TimerState.RUNNING:
            stopwatch.pause();
            startButtonElement.innerText = 'Resume';
            resetButtonElement.innerText = 'Reset';
            break;
    }
}

function resetClick() {
    if (stopwatch.getState() === TimerState.RUNNING) {
        var _stopwatch$lap = stopwatch.lap(),
            total = _stopwatch$lap.total,
            lap = _stopwatch$lap.lap;

        addLap(total, lap);
    } else {
        stopwatch.reset();
        updateUi('0:00:00.0');
        startButtonElement.innerText = 'Start';
        lapIndex = 1;
        lapTableElement.innerHTML = '';
    }
}

function tableCell(text) {
    var cell = document.createElement('td');
    cell.innerText = text;
    return cell;
}

function addLap(total, lap) {
    var lapFormatted = formatTime(lap);
    var totalFormatted = formatTime(total);

    var row = document.createElement('tr');
    row.appendChild(tableCell(lapIndex.toString()));
    row.appendChild(tableCell(lapFormatted));
    row.appendChild(tableCell(totalFormatted));
    lapTableElement.appendChild(row);

    lapIndex += 1;
}

function updateUi(text) {
    stopwatchElement.innerText = text;
}
//# sourceMappingURL=stopwatch-gui.js.map