let stopwatchElement;
let startButtonElement;
let resetButtonElement;
let shareButtonElement;
let lapTableWrapper;
let lapTable;

let stopwatch = new Stopwatch(100, timerTick);

document.addEventListener("DOMContentLoaded", function (event) {
    stopwatchElement = document.getElementById('timer-time');
    startButtonElement = document.getElementById('button-start');
    resetButtonElement = document.getElementById('button-reset');
    lapTableWrapper = document.getElementById('lap-info');
    shareButtonElement = document.getElementById('button-share-times');
    startButtonElement.onclick = startClick;
    resetButtonElement.onclick = resetClick;

    lapTable = ReactDOM.render(<LapTable/>, lapTableWrapper);
});

function timerTick(elapsed) {
    let timeStr = formatTime(elapsed);
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
        let {total, lap} = stopwatch.lap();
        addLap(total, lap);
    } else {
        stopwatch.reset();
        updateUi('0:00:00.0');
        startButtonElement.innerText = 'Start';
        lapTable.clear();
    }
}

function tableCell(text) {
    let cell = document.createElement('td');
    cell.innerText = text;
    return cell;
}

function addLap(total, lap) {
    let lapFormatted = formatTime(lap);
    let totalFormatted = formatTime(total);

    lapTable.addLap(lapFormatted, totalFormatted);
}

function updateUi(text) {
    stopwatchElement.innerText = text;
}

