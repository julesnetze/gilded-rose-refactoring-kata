var ItemChecker = require('./item_checker'); 

class Shop {
    constructor(items=[]){
      this.items = items;
    }
    checkItems() {
        this.items = new ItemChecker(this.items).checkItems();
    }
    updateQuality() {
      this.checkItems();
      this.items.forEach(item => item.update());
    }
  }
module.exports = Shop;