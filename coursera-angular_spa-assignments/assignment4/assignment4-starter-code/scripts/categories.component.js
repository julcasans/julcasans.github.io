(function(){
  'use strict';
  
  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'views/component.categories.html',
      controller: 'CategoriesComponentController',
      bindings: {
        items: '<'
      }
    });

})();