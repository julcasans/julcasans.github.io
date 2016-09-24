(function() {
  'use strict';

  var ShoppingListCheckOffService = function() {
    var toBuy = [
      {name: 'iPhone 7 plus', quantity: 2},
      {name: 'MacBook Pro', quantity: 1},
      {name: 'AKG Y50 headphone', quantity: 1},
      {name: 'Davidoff CoolWater', quantity: 3},
      {name: 'JBL Charge 2', quantity: 2},
      {name: 'Toshiba Touro HDD 2TB', quantity: 4},
      {name: 'Fujifilm X-T1', quantity: 1},
      {name: 'Tori Amos CD', quantity: 1},
      {name: 'SanDisk 64Gb SD', quantity: 5},
      {name: 'Bamboo Stylus', quantity: 1},
      {name: 'Wallet', quantity: 2},
      {name: 'Samsonite Backpack', quantity: 2}
    ];
    var bought = [];
    var self = this;

    self.getItemsToBuy = function() {
      return toBuy;
    }
    
    self.getBoughtItems = function() {
      return bought;
    }

    self.boughtItem = function(itemIndex) {
      var item = toBuy[itemIndex];
      bought.push(item);
      toBuy.splice(itemIndex, 1);
    }

  };

  angular.module('service', [])
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
})();