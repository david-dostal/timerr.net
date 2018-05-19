class Clock {
    constructor(onTick) {
        this._onTick = onTick;
        this._timeApi = new GmTimeApi('AIzaSyAUcg5PWqq16sIKcPYNOKwfpyFaIarOMeM');
        this._start();
    }

    time() {
        return this._timeApi.currentTime();
    }

    setLocation(n, e, onSuccess, onFailure) {
        this._timeApi.setLocation(n, e, () => onSuccess(), () => onFailure());
    }

    _start() {
        this._onTick(this.time());
        this._timerId = setInterval(() => this._onTick(this.time()), 1000);
    }
}