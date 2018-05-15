'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GmTimeApi = function () {
    function GmTimeApi(apiKey) {
        _classCallCheck(this, GmTimeApi);

        this._apiKey = apiKey;
        var now = new Date();
        this._totalOffsetSeconds = -(new Date().getTimezoneOffset() * 60);
        this._urlPattern = function (location, timestamp, key) {
            return 'https://maps.googleapis.com/maps/api/timezone/json?location=' + location + '&timestamp=' + timestamp + '&key=' + key;
        };
    }

    _createClass(GmTimeApi, [{
        key: 'setLocation',
        value: function setLocation(n, e, onSuccess, onFailure) {
            var _this = this;

            var targetUrl = this._urlPattern(n + ',' + e, this._timestamp() / 1000, this._apiKey);
            console.log(targetUrl);
            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                return _this._processResponse(request, onSuccess, onFailure);
            };
            request.open('get', targetUrl, true);
            request.send();
        }
    }, {
        key: '_processResponse',
        value: function _processResponse(request, onSuccess, onFailure) {
            if (request.readyState === 4) {
                if (request.status !== 200) {
                    onFailure();
                    return;
                }
                var timezoneData = JSON.parse(request.responseText);
                if (timezoneData.status !== 'OK') {
                    onFailure();
                    return;
                }
                this._totalOffsetSeconds = timezoneData.dstOffset + timezoneData.rawOffset;
                onSuccess();
            }
        }
    }, {
        key: '_timestamp',
        value: function _timestamp() {
            var now = new Date();
            return now.getTime() + now.getTimezoneOffset() * 60000;
        }
    }, {
        key: 'currentTime',
        value: function currentTime() {
            var now = this._timestamp();
            var timeZoneTime = new Date(now + this._totalOffsetSeconds * 1000);
            return timeZoneTime;
        }
    }]);

    return GmTimeApi;
}();
//# sourceMappingURL=google-maps-timezones.js.map