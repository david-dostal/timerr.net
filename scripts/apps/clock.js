'use strict';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Clock = function () {
    function Clock(onTick) {
        _classCallCheck(this, Clock);

        this._onTick = onTick;
        this._timeApi = new GmTimeApi('AIzaSyAUcg5PWqq16sIKcPYNOKwfpyFaIarOMeM');
        this._start();
    }

    _createClass(Clock, [{
        key: 'time',
        value: function time() {
            return this._timeApi.currentTime();
        }
    }, {
        key: 'setLocation',
        value: function setLocation(n, e, onSuccess, onFailure) {
            this._timeApi.setLocation(n, e, function () {
                return onSuccess();
            }, function () {
                return onFailure();
            });
        }
    }, {
        key: '_start',
        value: function _start() {
            var _this = this;

            this._onTick(this.time());
            this._timerId = setInterval(function () {
                return _this._onTick(_this.time());
            }, 1000);
        }
    }]);

    return Clock;
}();
//# sourceMappingURL=clock.js.map
//# sourceMappingURL=clock.js.map