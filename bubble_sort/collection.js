class Collection {

    constructor(size) {
        this._size = size;
        this._items = [];
        this.generateRandomItems();
    }

    get size() {
        return this._size;
    }

    set size(size) {
        this._size = size;
    }

    get items() {
        return this._items;
    }

    set items(items) {
        this._items = items;
        this._size = items.length;
    }

    generateRandomItems() {
        for(let i = 0; i < this.size; i++) {
            let value = getRandomValue();
            this.items[i] = new Item(value);
        }
    }

    render() {
        for(let i = 0; i < this.size; i++) {
            this.items[i].render(i);
        }
    }

}

const getRandomValue = () => {
    return Math.floor(Math.random() * windowHeight);
}
