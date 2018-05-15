const TimerState = Object.freeze({
    STOPPED: 'STOPPED',
    RUNNING: 'RUNNING',
    PAUSED: 'PAUSED'
});

class BaseTimer {
    constructor(interval, onTick) {
        this.interval = interval;
        this.onTick = onTick;
        this._intervalTimer = new IntervalTimer(() => this._tick(), this.interval);
        this.reset();
    }

    _tick() {
        this.onTick(this.getTime());
    }

    reset() {
        this._state = TimerState.STOPPED;
        this._startTime = null;
        this._pauseTime = null;
        this._intervalTimer.reset();
    }

    start() {
        this._state = TimerState.RUNNING;
        this._startTime = new Date().getTime();
        this._intervalTimer.start();
    }

    pause() {
        this._state = TimerState.PAUSED;
        this._pauseTime = this.elapsedTime();
        this._intervalTimer.pause();
    }

    resume() {
        this._state = TimerState.RUNNING;
        let pauseLength = this.elapsedTime() - this._pauseTime;
        this._startTime += pauseLength;
        this._intervalTimer.resume();
    }

    elapsedTime() {
        let currentTime = new Date().getTime();
        return currentTime - (this.startTime() == null ? currentTime : this.startTime());
    }

    startTime() {
        return this._startTime;
    }

    getTime() {
        return this.elapsedTime();
    }

    getState() {
        return this._state;
    }
}