class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
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

  qualitySmallerThanFifty(i) {
    return this.items[i].quality < 50
  }

  sellSMallerThanZero(i) {
    return this.items[i].sellIn < 0;
  }

  increaseQualityByOne(i) {
    return this.items[i].quality ++;
  }

  decreaseQualityByOne(i) {
    return this.items[i].quality --;
  }

  decreaseSellByOne(i) {
    return this.items[i].sellIn --;
  }

  qualityLargerThanZero(i) {
    return this.items[i].quality > 0;
  }

  updatedAgedBrie(i) {
    if (this.qualitySmallerThanFifty(i)) this.increaseQualityByOne(i);
    this.decreaseSellByOne(i);
    if (this.sellSMallerThanZero(i) && this.qualitySmallerThanFifty(i)) this.increaseQualityByOne(i);
  }

  updateBackStagePass(i) {
    if (this.items[i].sellIn < 11 && this.qualitySmallerThanFifty(i)) this.increaseQualityByOne(i);
    if (this.items[i].sellIn < 6 && this.qualitySmallerThanFifty(i)) this.increaseQualityByOne(i);
    if (this.qualitySmallerThanFifty(i)) this.increaseQualityByOne(i);
    this.decreaseSellByOne(i);
    if (this.sellSMallerThanZero(i)) this.items[i].quality = 0;
  }

  updateConjuredItem(i) {
    if (this.qualityLargerThanZero(i)) this.decreaseQualityByOne(i);
    if (this.qualityLargerThanZero(i)) this.decreaseQualityByOne(i);
    this.decreaseSellByOne(i);
    if (this.sellSMallerThanZero(i) && this.qualityLargerThanZero(i)) this.decreaseQualityByOne(i);
    if (this.sellSMallerThanZero(i) && this.qualityLargerThanZero(i)) this.decreaseQualityByOne(i);
  }

  updateNormalItem(i) {
    if (this.qualityLargerThanZero(i)) this.decreaseQualityByOne(i);
    this.decreaseSellByOne(i);
    if (this.sellSMallerThanZero(i) && this.qualityLargerThanZero(i)) this.decreaseQualityByOne(i);
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {

      if (this.sulfuras(i)) {
        continue;
      } else if (this.agedBrie(i)) {
        this.updatedAgedBrie(i);
      } else if (this.backstagePasses(i)) {
        this.updateBackStagePass(i);
      } else if (this.conjured(i)) {
        this.updateConjuredItem(i)
      } else {
        this.updateNormalItem(i);
      }
    }



    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
