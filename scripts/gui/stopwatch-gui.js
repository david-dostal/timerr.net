let stopwatchElement;
let startButtonElement;
let resetButtonElement;
let shareButtonElement;
let lapTableElement;
let lapIndex = 1;

let stopwatch = new Stopwatch(100, timerTick);

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
        lapIndex = 1;
        lapTableElement.innerHTML = '';
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

    let row = document.createElement('tr');
    row.appendChild(tableCell(lapIndex.toString()));
    row.appendChild(tableCell(lapFormatted));
    row.appendChild(tableCell(totalFormatted));
    lapTableElement.appendChild(row);

    lapIndex += 1;
}

function updateUi(text) {
    stopwatchElement.innerText = text;
}

