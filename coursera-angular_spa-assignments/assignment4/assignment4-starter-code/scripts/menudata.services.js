(function() {
  'use strict';

  var MenuDataService = function($http) {
    var self = this;
    var urlAllCategories = 'https://davids-restaurant.herokuapp.com/categories.json';
    var urlCategory = 'https://davids-restaurant.herokuapp.com/menu_items.json?category=';

    self.getAllCategories = function() {
      return $http({
        url: urlAllCategories
      }).then(function(result) {
        return result.data;
      });
    };

    self.getItemsForCategory = function(categoryShortName) {
      return $http({
        url: urlCategory + categoryShortName
      }).then(function(result) {
        return result.data;
      });
    }
  };

  MenuDataService.$inject = ['$http'];
  angular.module('data')
    .service('MenuDataService', MenuDataService);

})();