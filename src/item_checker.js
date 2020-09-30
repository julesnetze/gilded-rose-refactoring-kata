const { BackstagePasses, AgedBrie, Sulfuras, ConjuredItem } = require('./gilded_rose')

class ItemChecker {
    constructor(items=[]) {
        this.items = items
    }
    sulfuras(i) {
        return this.items[i].name == 'Sulfuras, Hand of Ragnaros';
      }
      agedBrie(i) {
        return this.items[i].name == 'Aged Brie'
      }
      backstagePasses(i) {
        return this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'
      }
      conjured(i) {
        return this.items[i].name.split(" ").find(word => word === "Conjured")
      }
      checkItems() {
        for (var i = 0; i < this.items.length; i++) {
          if (this.sulfuras(i)) {
            this.items[i] = new Sulfuras(this.items[i].name, this.items[i].sellIn, this.items[i].quality)
          } else if (this.agedBrie(i)) {
            this.items[i] = new AgedBrie(this.items[i].name, this.items[i].sellIn, this.items[i].quality)
          } else if (this.backstagePasses(i)) {
            this.items[i] = new BackstagePasses(this.items[i].name, this.items[i].sellIn, this.items[i].quality)
          } else if (this.conjured(i)) {
            this.items[i] = new ConjuredItem(this.items[i].name, this.items[i].sellIn, this.items[i].quality)
          } 
        }
        return this.items;
    }
}

module.exports = ItemChecker;