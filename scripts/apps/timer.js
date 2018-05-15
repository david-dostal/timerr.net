class Timer extends BaseTimer {
    constructor(interval, onTick, countdownLength, onCompleted) {
        super(interval, onTick);
        this.length = countdownLength;
        this.onCompleted = onCompleted;
    }

    _tick() {
        let remaining = this.getTime();
        if (remaining > 0) {
            this.onTick(remaining);
        } else {
            this._intervalTimer.pause();
            this.onTick(0);
            this.onCompleted();
        }
    }

    reset(length = this.length) {
        this.length = length;
        super.reset();
    }

    start(length = this.length) {
        this.length = length;
        super.start();
    }

    getTime() {
        let elapsed = super.getTime();
        let remaining = this.length - elapsed;
        return remaining;
    }
}