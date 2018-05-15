'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var clock = void 0;
var timezoneSelect = void 0;
var timeOutputElement = void 0;

document.addEventListener("DOMContentLoaded", function (event) {
    timezoneSelect = document.getElementById('timezone-select');
    timeOutputElement = document.getElementById('timer-time');

    clock = new Clock(function (time) {
        return updateTime(time);
    });

    timezoneSelect.onchange = changeTimezone;
});

function updateTime(time) {
    var timeFormatted = time.getHours().toString().padStart(2, '0') + ':' + time.getMinutes().toString().padStart(2, '0') + ':' + time.getSeconds().toString().padStart(2, '0');
    timeOutputElement.innerText = timeFormatted;
}

function changeTimezone(event) {
    var timezoneLocation = timezoneSelect.options[timezoneSelect.selectedIndex].value;

    var _timezoneLocation$spl = timezoneLocation.split(','),
        _timezoneLocation$spl2 = _slicedToArray(_timezoneLocation$spl, 2),
        n = _timezoneLocation$spl2[0],
        e = _timezoneLocation$spl2[1];

    clock.setLocation(n, e, function () {}, function () {
        return alert('Unable to get timezone data.');
    });
}
//# sourceMappingURL=clock-gui.js.map