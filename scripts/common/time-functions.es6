function decomposeTime(milliseconds) {
    let h = Math.floor(milliseconds / 3600000);
    milliseconds %= 3600000;
    let m = Math.floor(milliseconds / 60000);
    milliseconds %= 60000;
    let s = Math.floor(milliseconds / 1000);
    milliseconds %= 1000;
    let ms = Math.floor(milliseconds);
    return {h: h, m: m, s: s, ms: ms};
}

function formatTime(milliseconds) {
    let {h, m, s, ms} = decomposeTime(milliseconds);
    let str = h.toString() + ':' +
        (m.toString().length === 1 ? '0' + m : m) + ':' +
        (s.toString().length === 1 ? '0' + s : s) + '.' +
        ((Math.round(ms / 100) * 100) % 1000).toString().substr(0, 1);
    return str;
}

function toMilliseconds(h = 0, m = 0, s = 0, ms = 0) {
    return ms + s * 1000 + m * 60 * 1000 + h * 60 * 60 * 1000;
}