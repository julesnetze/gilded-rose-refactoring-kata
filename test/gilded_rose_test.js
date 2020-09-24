const { assert } = require('chai');

let Item = require('../src/gilded_rose').Item;
let Shop = require('../src/gilded_rose').Shop;
let ShopBuilder = require('./ShopBuilder');

//Add conjured item test

describe('Gilded Rose Test Day 0', () => {

    let GildedRose = ShopBuilder.aShop().addItem(new Item('Wine', 1, 10)).addItem(new Item("Sulfuras, Hand of Ragnaros", 0, 80)).addItem(new Item("Aged Brie", 2, 0)).addItem(new Item("Backstage passes to a TAFKAL80ETC concert", 6, 20)).build()
    GildedRose.updateQuality();

    it('should keep the quality and sell value of Sulfuras the same', () => {
        assert.equal(GildedRose.items.find(item => item.name === 'Sulfuras, Hand of Ragnaros').quality, 80);
        assert.equal(GildedRose.items.find(item => item.name === 'Sulfuras, Hand of Ragnaros').sellIn, 0);
    });

    it('should decrease quality and sell value of Wine by 1', () => {
        assert.equal(GildedRose.items.find(item => item.name === 'Wine').quality, 9);
        assert.equal(GildedRose.items.find(item => item.name === 'Wine').sellIn, 0);
    });

    it('should add 1 to quality value and subtract 1 from sell value of Aged Brie', () => {
        assert.equal(GildedRose.items.find(item => item.name === 'Aged Brie').quality, 1);
        assert.equal(GildedRose.items.find(item => item.name === 'Aged Brie').sellIn, 1);
    });

    it('should add 2 to quality value and subtract 1 from sell value of Backstage passes with 10 days left', () => {
        assert.equal(GildedRose.items.find(item => item.name === 'Backstage passes to a TAFKAL80ETC concert').quality, 22);
        assert.equal(GildedRose.items.find(item => item.name === 'Backstage passes to a TAFKAL80ETC concert').sellIn, 5)
    });
})

describe('Gilded Rose Test Day 1', () => {
    let GildedRose = ShopBuilder.aShop().addItem(new Item('Wine', 1, 10)).addItem(new Item("Sulfuras, Hand of Ragnaros", 0, 80)).addItem(new Item("Aged Brie", 2, 0)).addItem(new Item("Backstage passes to a TAFKAL80ETC concert", 6, 20)).build()
    GildedRose.updateQuality()
    GildedRose.updateQuality();

    it('should decrease quality and sell value of Wine by 1', () => {
        assert.equal(GildedRose.items.find(item => item.name === 'Wine').quality, 7);
        assert.equal(GildedRose.items.find(item => item.name === 'Wine').sellIn, -1);
    });

    it('should add 3 to quality value and subtract 1 from sell value of Backstage passes', () => {
        assert.equal(GildedRose.items.find(item => item.name === 'Backstage passes to a TAFKAL80ETC concert').quality, 25);
        assert.equal(GildedRose.items.find(item => item.name === 'Backstage passes to a TAFKAL80ETC concert').sellIn, 4)
    });

});

describe('Gilded Rose Test Day 3', () => {

    let GildedRose = ShopBuilder.aShop().addItem(new Item('Wine', 1, 10)).addItem(new Item("Sulfuras, Hand of Ragnaros", 0, 80)).addItem(new Item("Aged Brie", 2, 0)).addItem(new Item("Backstage passes to a TAFKAL80ETC concert", 6, 20)).build()
    GildedRose.updateQuality();
    GildedRose.updateQuality();
    GildedRose.updateQuality();
    GildedRose.updateQuality();

    it('should add 2 to quality value and subtract 1 from sell value of Aged Brie', () => {
        assert.equal(GildedRose.items.find(item => item.name === 'Aged Brie').quality, 6);
        assert.equal(GildedRose.items.find(item => item.name === 'Aged Brie').sellIn, -2);
    });

});

describe('Gilded Rose Test Day 6', () => {

    let GildedRose = ShopBuilder.aShop().addItem(new Item('Wine', 1, 10)).addItem(new Item("Sulfuras, Hand of Ragnaros", 0, 80)).addItem(new Item("Aged Brie", 2, 0)).addItem(new Item("Backstage passes to a TAFKAL80ETC concert", 6, 20)).build()
    GildedRose.updateQuality();
    GildedRose.updateQuality();
    GildedRose.updateQuality();
    GildedRose.updateQuality();
    GildedRose.updateQuality();
    GildedRose.updateQuality();
    GildedRose.updateQuality();

    it('should add 3 to quality value and subtract 1 from sell value of Backstage passes', () => {
        assert.equal(GildedRose.items.find(item => item.name === 'Backstage passes to a TAFKAL80ETC concert').quality, 0);
        assert.equal(GildedRose.items.find(item => item.name === 'Backstage passes to a TAFKAL80ETC concert').sellIn, -1)
    });
    
})
