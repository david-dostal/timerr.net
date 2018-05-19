'use strict';

var stopwatchElement = void 0;
var startButtonElement = void 0;
var resetButtonElement = void 0;
var shareButtonElement = void 0;
var lapTableWrapper = void 0;
var lapTable = void 0;

var stopwatch = new Stopwatch(100, timerTick);

document.addEventListener("DOMContentLoaded", function (event) {
    stopwatchElement = document.getElementById('timer-time');
    startButtonElement = document.getElementById('button-start');
    resetButtonElement = document.getElementById('button-reset');
    lapTableWrapper = document.getElementById('lap-info');
    shareButtonElement = document.getElementById('button-share-times');
    startButtonElement.onclick = startClick;
    resetButtonElement.onclick = resetClick;

    lapTable = ReactDOM.render(React.createElement(LapTable, null), lapTableWrapper);
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
        lapTable.clear();
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

    lapTable.addLap(lapFormatted, totalFormatted);
}

function updateUi(text) {
    stopwatchElement.innerText = text;
}
//# sourceMappingURL=stopwatch-gui.js.map