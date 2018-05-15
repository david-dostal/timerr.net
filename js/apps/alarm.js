'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AlarmState = Object.freeze({
    ENABLED: 'ENABLED',
    DISABLED: 'DISABLED'
});

var Alarm = function () {
    function Alarm(onFinished, targetTime) {
        var onRemainingUpdated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, Alarm);

        this.onFinished = onFinished;
        this._targetTime = targetTime;
        this.onRemainingUpdated = onRemainingUpdated;
        this._state = AlarmState.DISABLED;
        this._timerId = null;
        this._remainingTimerId = null;
    }

    _createClass(Alarm, [{
        key: '_finished',
        value: function _finished() {
            this.disable();
            this.onFinished();
        }
    }, {
        key: 'setTarget',
        value: function setTarget(time) {
            this._targetTime = time;
        }
    }, {
        key: 'enable',
        value: function enable() {
            var _this = this;

            var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._targetTime;

            if (this._state === AlarmState.DISABLED) {
                this._state = AlarmState.ENABLED;
                this.setTarget(time);
                this._timerId = setTimeout(function () {
                    return _this._finished();
                }, this.remaining());
                this.onRemainingUpdated();
                this._remainingTimerId = setInterval(function () {
                    return _this.onRemainingUpdated();
                }, 1000);
            }
        }
    }, {
        key: 'disable',
        value: function disable() {
            this._state = AlarmState.DISABLED;
            clearTimeout(this._timerId);
            clearTimeout(this._remainingTimerId);
        }
    }, {
        key: 'remaining',
        value: function remaining() {
            return this.targetTime() - new Date().getTime();
        }
    }, {
        key: 'targetTime',
        value: function targetTime() {
            return this._targetTime;
        }
    }, {
        key: 'getState',
        value: function getState() {
            return this._state;
        }
    }]);

    return Alarm;
}();
//# sourceMappingURL=alarm.js.map