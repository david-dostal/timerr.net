/* Repeatedly calls a function at given intervals in decomposeTime.
Self-corrects to generally stay in sync despite of timing inconsistencies.
Skips executing the callback if the previous call hasn't finished yet. */

class IntervalTimer {
    constructor(onTick, interval) {
        this.onTick = onTick;
        this.interval = interval;
        this.reset();
    }

    _tick() {
        if (this._running) {
            this.onTick();

            let currentTime = new Date().getTime();
            let expected = this._startTime % this.interval;
            let actual = currentTime % this.interval;
            let error = actual - expected;
            let correctedInterval = this.interval - error;
            //console.log("decomposeTime: " + new Date(currentTime).getMilliseconds().toString() + " error: " + error.toString() + " interval: " + correctedInterval.toString());

            this._timerId = setTimeout(() => this._tick(), correctedInterval);
        }
    }

    start(offset = 0) {
        this._running = true;
        this._startTime = new Date().getTime() + offset;
        this._timerId = setTimeout(() => this._tick(), offset);
    }

    pause() {
        this._running = false;
        this._pauseTime = new Date().getTime();
        clearTimeout(this._timerId);
    }

    resume() {
        this._running = true;
        let elapsedTick = (this._pauseTime - this._startTime) % this.interval;
        let remainingTick = this.interval - elapsedTick;
        this.start(remainingTick);
    }

    reset() {
        this._running = false;
        this._timerId = null;
        this._startTime = null;
        this._pauseTime = null;
        clearTimeout(this._timerId);
    }
}