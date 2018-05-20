class LocalStorage {
    static hasValue(key) {
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

    static tryLoad(key) {
        if (LocalStorage.hasValue(key)) {
            return JSON.parse(localStorage.getItem(key));
        }
    }

    static tryLoadDefault(key, defaultValue) {
        let result = LocalStorage.tryLoad(key);
        return result === undefined ? defaultValue : result;
    }

    static trySave(key, value) {
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
}