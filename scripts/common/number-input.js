class NumberInput {
    constructor(inputElement) {
        this._input = inputElement;
        this._input.addEventListener('keydown', (e) => this._onKeyDown(e));
        this._input.addEventListener('wheel', (e) => this._onWheel(e), {passive: true});
        this._input.addEventListener('focus', () => this._input.select());
        this._input.addEventListener('blur', (e) => this._onBlur(e));
        this._input.addEventListener('input', (e) => this._onInput(e));
        this.max = parseInt(this._input.attributes['max'] === undefined ? '100' : this._input.attributes['max'].value);
        this.min = parseInt(this._input.attributes['min'] === undefined ? '0' : this._input.attributes['min'].value);
        if(this._input.attributes['autofocus']) {
            this._input.select(); // Select on autofocus even in Firefox
        }
    }

    _onKeyDown(e) {
        if (e.key === 'ArrowUp') {
            this._adjustValue(1);
        } else if (e.key === 'ArrowDown') {
            this._adjustValue(-1);
        }
    }

    _onWheel(e) {
        if (e.deltaY < 0) {
            this._adjustValue(1);
        } else if (e.deltaY > 0) {
            this._adjustValue(-1);
        }
    }

    _onBlur(e) {
        this._formatValue();
    }

    _onInput(e) {
        this._input.setCustomValidity('');
        if (!this._input.validity.valid) {
            let validationMessage = `Please enter a number between ${this.min} and ${this.max}`;
            this._input.setCustomValidity(validationMessage);
        }
    }

    _adjustValue(amount) {
        let oldValue = parseInt(this._input.value);
        let newValue = oldValue + amount;
        newValue = Math.min(newValue, this.max);
        newValue = Math.max(newValue, this.min);
        this._input.value = newValue.toString();
        this._formatValue();
    }

    _formatValue() {
        this._input.value = this._input.value.padStart(2, '0')
    }
}