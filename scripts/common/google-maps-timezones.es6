class GmTimeApi {
    constructor(apiKey) {
        this._apiKey = apiKey;
        let now = new Date();
        this._totalOffsetSeconds = -(new Date().getTimezoneOffset() * 60);
        this._urlPattern = (location, timestamp, key) =>
            `https://maps.googleapis.com/maps/api/timezone/json?location=${location}&timestamp=${timestamp}&key=${key}`;
    }

    setLocation(n, e, onSuccess, onFailure) {
        let targetUrl = this._urlPattern(`${n},${e}`, this._timestamp() / 1000, this._apiKey);
        console.log(targetUrl);
        let request = new XMLHttpRequest();
        request.onreadystatechange = () => this._processResponse(request, onSuccess, onFailure);
        request.open('get', targetUrl, true);
        request.send();
    }

    _processResponse(request, onSuccess, onFailure) {
        if (request.readyState === 4) {
            if (request.status !== 200) {
                onFailure();
                return;
            }
            let timezoneData = JSON.parse(request.responseText);
            if (timezoneData.status !== 'OK') {
                onFailure();
                return;
            }
            this._totalOffsetSeconds = timezoneData.dstOffset + timezoneData.rawOffset;
            onSuccess();
        }
    }

    _timestamp() {
        let now = new Date();
        return now.getTime() + now.getTimezoneOffset() * 60000;
    }

    currentTime() {
        let now = this._timestamp();
        let timeZoneTime = new Date(now + this._totalOffsetSeconds * 1000);
        return timeZoneTime;
    }
}