const AlarmState = Object.freeze({
    ENABLED: 'ENABLED',
    DISABLED: 'DISABLED'
});

class Alarm {
    constructor(onFinished, targetTime, onRemainingUpdated = null) {
        this.onFinished = onFinished;
        this._targetTime = targetTime;
        this.onRemainingUpdated = onRemainingUpdated;
        this._state = AlarmState.DISABLED;
        this._timerId = null;
        this._remainingTimerId = null;
    }

    _finished() {
        this.disable();
        this.onFinished();
    }

    setTarget(time) {
        this._targetTime = time;
    }

    enable(time = this._targetTime) {
        if (this._state === AlarmState.DISABLED) {
            this._state = AlarmState.ENABLED;
            this.setTarget(time);
            this._timerId = setTimeout(() => this._finished(), this.remaining());
            this.onRemainingUpdated();
            this._remainingTimerId = setInterval(() => this.onRemainingUpdated(), 1000);
        }
    }

    disable() {
        this._state = AlarmState.DISABLED;
        clearTimeout(this._timerId);
        clearTimeout(this._remainingTimerId);
    }

    remaining() {
        return this.targetTime() - new Date().getTime();
    }

    targetTime() {
        return this._targetTime;
    }

    getState() {
        return this._state;
    }
}