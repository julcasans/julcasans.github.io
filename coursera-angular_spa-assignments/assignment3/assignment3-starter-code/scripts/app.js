(function() {
  "use strict";

  angular.module('NarrowItDownApp', [])
    .service('MenuSearchService', MenuSearchService)
    .controller('NarrowItDownController', NarrowItDownController)
    .directive('foundItems', FoundItemsDirective);

  MenuSearchService.$inject = ['$http'];

  function MenuSearchService($http) {
    this.getMatchedMenuItems = function(searchTerm) {
      return $http({
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      }).then(function(result) {
        // process result and only keep items that match
        var foundItems = result.data.menu_items.filter(function(item) {
          return item.description.indexOf(searchTerm) >= 0;
        });
        // return processed items
        return foundItems;
      });
    }
  };

  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    var narrowCtrl = this;

    narrowCtrl.filteredList = '';
    narrowCtrl.found = undefined;

    narrowCtrl.getItemsFilteredBy = function() {
      if (narrowCtrl.filter && narrowCtrl.filter.trim().length>0) {
        var promise = MenuSearchService.getMatchedMenuItems(narrowCtrl.filter);

        promise.then(function(result) {
          narrowCtrl.found = result;
          console.log(result);
        });
      } else {
        narrowCtrl.found = [];
      }
    };

    narrowCtrl.removeItem = function(index) {
      narrowCtrl.found.splice(index, 1);
    }
  };

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'found-list.html',
      scope: {
        foundItemList: '<',
        myTitle: '@title',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'foundList',
      bindToController: true
    };

    return ddo;
  }


  function FoundItemsDirectiveController() {
    var self = this;
  }

})();