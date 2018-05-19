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

var LapTable = function (_React$Component) {
    _inherits(LapTable, _React$Component);

    function LapTable() {
        _classCallCheck(this, LapTable);

        var _this = _possibleConstructorReturn(this, (LapTable.__proto__ || Object.getPrototypeOf(LapTable)).call(this));

        _this.state = {
            lastNumber: 0,
            rows: []
        };
        return _this;
    }

    _createClass(LapTable, [{
        key: "addLap",
        value: function addLap(lapTime, totalTime) {
            this.setState(function (previousState) {
                return {
                    lastNumber: previousState.lastNumber + 1,
                    rows: previousState.rows.concat({ number: previousState.lastNumber + 1, lapTime: lapTime, totalTime: totalTime })
                };
            });
        }
    }, {
        key: "clear",
        value: function clear() {
            this.setState({ lastNumber: 0, rows: [] });
        }
    }, {
        key: "handleDeleteClick",
        value: function handleDeleteClick(rowNumber) {
            this.setState(function (previousState) {
                return {
                    rows: previousState.rows.filter(function (row) {
                        return row.number !== rowNumber;
                    })
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement("table", { className: "lap-table panel-information" }, React.createElement("thead", { hidden: this.state.rows.length === 0 }, React.createElement("tr", null, React.createElement("th", null, "No."), React.createElement("th", null, "Lap"), React.createElement("th", null, "Total"), React.createElement("th", null))), React.createElement("tbody", { id: "lap-table" }, this.state.rows.map(function (row) {
                return React.createElement(LapRow, { key: row.number, number: row.number, lapTime: row.lapTime, totalTime: row.totalTime, deleteClick: function deleteClick(n) {
                        return _this2.handleDeleteClick(n);
                    } });
            })));
        }
    }]);

    return LapTable;
}(React.Component);
//# sourceMappingURL=lap-table.js.map
//# sourceMappingURL=lap-table.js.map