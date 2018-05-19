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

var NumberInput = function () {
    function NumberInput(inputElement) {
        var _this = this;

        _classCallCheck(this, NumberInput);

        this._input = inputElement;
        this._input.addEventListener('keydown', function (e) {
            return _this._onKeyDown(e);
        });
        this._input.addEventListener('wheel', function (e) {
            return _this._onWheel(e);
        }, { passive: true });
        this._input.addEventListener('focus', function () {
            return _this._input.select();
        });
        this._input.addEventListener('blur', function (e) {
            return _this._onBlur(e);
        });
        this._input.addEventListener('input', function (e) {
            return _this._onInput(e);
        });
        this.max = parseInt(this._input.attributes['max'] === undefined ? '100' : this._input.attributes['max'].value);
        this.min = parseInt(this._input.attributes['min'] === undefined ? '0' : this._input.attributes['min'].value);
        if (this._input.attributes['autofocus']) {
            this._input.select(); // Select on autofocus even in Firefox
        }
    }

    _createClass(NumberInput, [{
        key: '_onKeyDown',
        value: function _onKeyDown(e) {
            if (e.key === 'ArrowUp') {
                this._adjustValue(1);
            } else if (e.key === 'ArrowDown') {
                this._adjustValue(-1);
            }
        }
    }, {
        key: '_onWheel',
        value: function _onWheel(e) {
            if (e.deltaY < 0) {
                this._adjustValue(1);
            } else if (e.deltaY > 0) {
                this._adjustValue(-1);
            }
        }
    }, {
        key: '_onBlur',
        value: function _onBlur(e) {
            this._formatValue();
        }
    }, {
        key: '_onInput',
        value: function _onInput(e) {
            this._input.setCustomValidity('');
            if (!this._input.validity.valid) {
                var validationMessage = 'Please enter a number between ' + this.min + ' and ' + this.max;
                this._input.setCustomValidity(validationMessage);
            }
        }
    }, {
        key: '_adjustValue',
        value: function _adjustValue(amount) {
            var oldValue = parseInt(this._input.value);
            var newValue = oldValue + amount;
            newValue = Math.min(newValue, this.max);
            newValue = Math.max(newValue, this.min);
            this._input.value = newValue.toString();
            this._formatValue();
        }
    }, {
        key: '_formatValue',
        value: function _formatValue() {
            this._input.value = this._input.value.padStart(2, '0');
        }
    }]);

    return NumberInput;
}();
//# sourceMappingURL=number-input.js.map
//# sourceMappingURL=number-input.js.map