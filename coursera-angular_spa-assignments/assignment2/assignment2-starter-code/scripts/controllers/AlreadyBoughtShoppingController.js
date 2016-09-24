(function() {
  'use strict';

  var AlreadyBoughtShoppingController = function(shoppingListService) {
    var self = this;
  
    self.getItems = function() {
      return shoppingListService.getBoughtItems();
    },

    self.empty = function() {
      return shoppingListService.getBoughtItems().length == 0;
    }

  };

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

  angular.module('controller')
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController);
})();