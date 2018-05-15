class Stopwatch extends BaseTimer {
    reset() {
        this._lapTime = null;
        super.reset();
    }

    start() {
        this._lapTime = 0;
        super.start();
    }

    lap() {
        let elapsed = this.getTime();
        let thisLap = elapsed - this._lapTime;
        this._lapTime = elapsed;
        return {total: elapsed, lap: thisLap};
    }
}