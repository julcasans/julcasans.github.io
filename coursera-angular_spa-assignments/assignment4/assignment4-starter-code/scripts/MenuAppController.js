(function(){
  'use strict';

  var MenuAppController = function(MenuDataService) {
    var self = this;

    self.categories = [];

    MenuDataService.getAllCategories().then(function(result) {
      self.categories = result;
    });

    self.getAllCategories = function() {
      return self.categories;
    };

    self.retrieveItemsForCategory = function(categoryShortName) {
      return MenuDataService.getItemsForCategory(categoryShortName);
    };
  };

  MenuAppController.$inject = ['MenuDataService'];
  angular.module('MenuApp')
    .controller('MenuAppController', MenuAppController);
})();