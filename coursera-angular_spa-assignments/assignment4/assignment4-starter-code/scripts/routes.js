(function(){
  'use strict';
  
  angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'views/home.html'
        })
        .state('categories', {
          url: '/categories',
          templateUrl: 'views/categories.html'
        });
    }
})();