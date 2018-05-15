'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimerState = Object.freeze({
    STOPPED: 'STOPPED',
    RUNNING: 'RUNNING',
    PAUSED: 'PAUSED'
});

var BaseTimer = function () {
    function BaseTimer(interval, onTick) {
        var _this = this;

        _classCallCheck(this, BaseTimer);

        this.interval = interval;
        this.onTick = onTick;
        this._intervalTimer = new IntervalTimer(function () {
            return _this._tick();
        }, this.interval);
        this.reset();
    }

    _createClass(BaseTimer, [{
        key: '_tick',
        value: function _tick() {
            this.onTick(this.getTime());
        }
    }, {
        key: 'reset',
        value: function reset() {
            this._state = TimerState.STOPPED;
            this._startTime = null;
            this._pauseTime = null;
            this._intervalTimer.reset();
        }
    }, {
        key: 'start',
        value: function start() {
            this._state = TimerState.RUNNING;
            this._startTime = new Date().getTime();
            this._intervalTimer.start();
        }
    }, {
        key: 'pause',
        value: function pause() {
            this._state = TimerState.PAUSED;
            this._pauseTime = this.elapsedTime();
            this._intervalTimer.pause();
        }
    }, {
        key: 'resume',
        value: function resume() {
            this._state = TimerState.RUNNING;
            var pauseLength = this.elapsedTime() - this._pauseTime;
            this._startTime += pauseLength;
            this._intervalTimer.resume();
        }
    }, {
        key: 'elapsedTime',
        value: function elapsedTime() {
            var currentTime = new Date().getTime();
            return currentTime - (this.startTime() == null ? currentTime : this.startTime());
        }
    }, {
        key: 'startTime',
        value: function startTime() {
            return this._startTime;
        }
    }, {
        key: 'getTime',
        value: function getTime() {
            return this.elapsedTime();
        }
    }, {
        key: 'getState',
        value: function getState() {
            return this._state;
        }
    }]);

    return BaseTimer;
}();
//# sourceMappingURL=base-timer.js.map