'use strict';

function decomposeTime(milliseconds) {
    var h = Math.floor(milliseconds / 3600000);
    milliseconds %= 3600000;
    var m = Math.floor(milliseconds / 60000);
    milliseconds %= 60000;
    var s = Math.floor(milliseconds / 1000);
    milliseconds %= 1000;
    var ms = Math.floor(milliseconds);
    return { h: h, m: m, s: s, ms: ms };
}

function formatTime(milliseconds) {
    var _decomposeTime = decomposeTime(milliseconds),
        h = _decomposeTime.h,
        m = _decomposeTime.m,
        s = _decomposeTime.s,
        ms = _decomposeTime.ms;

    var str = h.toString() + ':' + (m.toString().length === 1 ? '0' + m : m) + ':' + (s.toString().length === 1 ? '0' + s : s) + '.' + (Math.round(ms / 100) * 100 % 1000).toString().substr(0, 1);
    return str;
}

function toMilliseconds() {
    var h = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var ms = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    return ms + s * 1000 + m * 60 * 1000 + h * 60 * 60 * 1000;
}
//# sourceMappingURL=time-functions.js.map
//# sourceMappingURL=time-functions.js.map