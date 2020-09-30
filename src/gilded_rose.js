class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  qualitySmallerThanFifty() {
    return this.quality < 50
  }

  sellSMallerThanZero() {
    return this.sellIn < 0;
  }

  increaseQualityByOne() {
    return this.quality ++;
  }

  decreaseQualityByOne() {
    return this.quality --;
  }

  decreaseSellByOne() {
    return this.sellIn --;
  }

  qualityLargerThanZero() {
    return this.quality > 0;
  }
  update() {
    if (this.qualityLargerThanZero()) this.decreaseQualityByOne();
    this.decreaseSellByOne();
    if (this.sellSMallerThanZero() && this.qualityLargerThanZero()) this.decreaseQualityByOne();
  }
}

class ConjuredItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  update() {
    if (this.qualityLargerThanZero()) this.decreaseQualityByOne();
    if (this.qualityLargerThanZero()) this.decreaseQualityByOne();
    this.decreaseSellByOne();
    if (this.sellSMallerThanZero() && this.qualityLargerThanZero()) this.decreaseQualityByOne();
    if (this.sellSMallerThanZero() && this.qualityLargerThanZero()) this.decreaseQualityByOne();
  }
}

class Sulfuras extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  update() {
    return null;
  }
}

class AgedBrie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  update() {
    if (this.qualitySmallerThanFifty()) this.increaseQualityByOne();
    this.decreaseSellByOne();
    if (this.sellSMallerThanZero() && this.qualitySmallerThanFifty()) this.increaseQualityByOne();
  }
}

class BackstagePasses extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  update() {
    if (this.sellIn < 11 && this.qualitySmallerThanFifty()) this.increaseQualityByOne();
    if (this.sellIn < 6 && this.qualitySmallerThanFifty()) this.increaseQualityByOne();
    if (this.qualitySmallerThanFifty()) this.increaseQualityByOne();
    this.decreaseSellByOne();
    if (this.sellSMallerThanZero()) this.quality = 0;
  }
}

module.exports = {
  Item,
  Sulfuras,
  BackstagePasses,
  AgedBrie,
  ConjuredItem
}
