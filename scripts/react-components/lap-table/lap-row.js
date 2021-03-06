"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var LapRow = function (_React$Component) {
    _inherits(LapRow, _React$Component);

    function LapRow() {
        _classCallCheck(this, LapRow);

        return _possibleConstructorReturn(this, (LapRow.__proto__ || Object.getPrototypeOf(LapRow)).apply(this, arguments));
    }

    _createClass(LapRow, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement("tr", null, React.createElement("td", null, this.props.number), React.createElement("td", null, this.props.lapTime), React.createElement("td", null, this.props.totalTime), React.createElement("td", { className: "control-holder" }, React.createElement("button", { onClick: function onClick() {
                    return _this2.props.deleteClick(_this2.props.number);
                }, className: "control-secondary" }, "\u274C")));
        }
    }]);

    return LapRow;
}(React.Component);
//# sourceMappingURL=lap-row.js.map
//# sourceMappingURL=lap-row.js.map