"use strict";

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

var LocalStorage = function () {
    function LocalStorage() {
        _classCallCheck(this, LocalStorage);
    }

    _createClass(LocalStorage, null, [{
        key: "hasValue",
        value: function hasValue(key) {
            try {
                if (localStorage) {
                    return localStorage.getItem(key) !== null;
                } else {
                    return false;
                }
            } catch (e) {
                return false;
            }
        }
    }, {
        key: "tryLoad",
        value: function tryLoad(key) {
            if (LocalStorage.hasValue(key)) {
                return JSON.parse(localStorage.getItem(key));
            }
        }
    }, {
        key: "tryLoadDefault",
        value: function tryLoadDefault(key, defaultValue) {
            var result = LocalStorage.tryLoad(key);
            return result === undefined ? defaultValue : result;
        }
    }, {
        key: "trySave",
        value: function trySave(key, value) {
            try {
                if (localStorage) {
                    localStorage.setItem(key, JSON.stringify(value));
                    return true;
                } else {
                    return false;
                }
            } catch (e) {
                return false;
            }
        }
    }]);

    return LocalStorage;
}();
//# sourceMappingURL=localStorage.js.map
//# sourceMappingURL=localStorage.js.map