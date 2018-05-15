"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timer = function (_BaseTimer) {
    _inherits(Timer, _BaseTimer);

    function Timer(interval, onTick, countdownLength, onCompleted) {
        _classCallCheck(this, Timer);

        var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, interval, onTick));

        _this.length = countdownLength;
        _this.onCompleted = onCompleted;
        return _this;
    }

    _createClass(Timer, [{
        key: "_tick",
        value: function _tick() {
            var remaining = this.getTime();
            if (remaining > 0) {
                this.onTick(remaining);
            } else {
                this._intervalTimer.pause();
                this.onTick(0);
                this.onCompleted();
            }
        }
    }, {
        key: "reset",
        value: function reset() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.length;

            this.length = length;
            _get(Timer.prototype.__proto__ || Object.getPrototypeOf(Timer.prototype), "reset", this).call(this);
        }
    }, {
        key: "start",
        value: function start() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.length;

            this.length = length;
            _get(Timer.prototype.__proto__ || Object.getPrototypeOf(Timer.prototype), "start", this).call(this);
        }
    }, {
        key: "getTime",
        value: function getTime() {
            var elapsed = _get(Timer.prototype.__proto__ || Object.getPrototypeOf(Timer.prototype), "getTime", this).call(this);
            var remaining = this.length - elapsed;
            return remaining;
        }
    }]);

    return Timer;
}(BaseTimer);
//# sourceMappingURL=timer.js.map