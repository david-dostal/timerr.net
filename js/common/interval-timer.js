"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Repeatedly calls a function at given intervals in decomposeTime.
Self-corrects to generally stay in sync despite of timing inconsistencies.
Skips executing the callback if the previous call hasn't finished yet. */

var IntervalTimer = function () {
    function IntervalTimer(onTick, interval) {
        _classCallCheck(this, IntervalTimer);

        this.onTick = onTick;
        this.interval = interval;
        this.reset();
    }

    _createClass(IntervalTimer, [{
        key: "_tick",
        value: function _tick() {
            var _this = this;

            if (this._running) {
                this.onTick();

                var currentTime = new Date().getTime();
                var expected = this._startTime % this.interval;
                var actual = currentTime % this.interval;
                var error = actual - expected;
                var correctedInterval = this.interval - error;
                //console.log("decomposeTime: " + new Date(currentTime).getMilliseconds().toString() + " error: " + error.toString() + " interval: " + correctedInterval.toString());

                this._timerId = setTimeout(function () {
                    return _this._tick();
                }, correctedInterval);
            }
        }
    }, {
        key: "start",
        value: function start() {
            var _this2 = this;

            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            this._running = true;
            this._startTime = new Date().getTime() + offset;
            this._timerId = setTimeout(function () {
                return _this2._tick();
            }, offset);
        }
    }, {
        key: "pause",
        value: function pause() {
            this._running = false;
            this._pauseTime = new Date().getTime();
            clearTimeout(this._timerId);
        }
    }, {
        key: "resume",
        value: function resume() {
            this._running = true;
            var elapsedTick = (this._pauseTime - this._startTime) % this.interval;
            var remainingTick = this.interval - elapsedTick;
            this.start(remainingTick);
        }
    }, {
        key: "reset",
        value: function reset() {
            this._running = false;
            this._timerId = null;
            this._startTime = null;
            this._pauseTime = null;
            clearTimeout(this._timerId);
        }
    }]);

    return IntervalTimer;
}();
//# sourceMappingURL=interval-timer.js.map