"use strict";

/*! https://github.com/uxitten/polyfill/blob/master/string.polyfill.js | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart */

String.prototype.padStart || (String.prototype.padStart = function (b, a) {
  return b >>= 0, a = String(void 0 !== a ? a : " "), this.length > b ? String(this) : ((b -= this.length) > a.length && (a += a.repeat(b / a.length)), a.slice(0, b) + String(this));
});
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map
//# sourceMappingURL=polyfills.js.map