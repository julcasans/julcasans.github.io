(function() {
  'use strict';

  var ToBuyShoppingController = function(shoppingListService) {
    var self = this;
    
    self.getItems = function() {
      return shoppingListService.getItemsToBuy();
    },

    self.allBought = function() {
      return shoppingListService.getItemsToBuy().length == 0;
    },

    self.boughtItem = function(itemIndex) {
      shoppingListService.boughtItem(itemIndex);
    }

  };

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

  angular.module('controller')
    .controller('ToBuyShoppingController', ToBuyShoppingController);
})();