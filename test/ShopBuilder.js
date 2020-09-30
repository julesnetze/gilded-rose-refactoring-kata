let Shop = require('../src/gilded_rose_shop');

class ShopBuilder {
    constructor() {
        this.items = [];
    }

    static aShop() {
        return new ShopBuilder();
    }

    addItem(item) {
        this.items.push(item)
        return this;
    }


    build() {
        return new Shop(this.items);
    }

}

module.exports = ShopBuilder