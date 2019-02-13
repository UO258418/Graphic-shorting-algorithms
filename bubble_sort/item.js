class Item {

    constructor(value) {
        this._value = value;
    }

    set value(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    render(position) {
        line(position, windowHeight,
            position, windowHeight - this.value);
    }

}
