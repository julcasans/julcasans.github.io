(function(){
'use strict';

var LunchCheckController = function($scope) {
  $scope.message = '';
  $scope.foodList = '';

  $scope.checkFood = function() {
    var nonEmptyQty = countNonEmptyString($scope.foodList);
    if (nonEmptyQty>0) {
      if (nonEmptyQty<4) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
    } else {
        $scope.message = 'Please enter data first';
    }
  }
}

var countNonEmptyString = function(commaSeparatedList) {
   var list = commaSeparatedList.split(',');
    var listLength = list.length;
    var nonEmptyQty = 0;
    for (var i=0; i<listLength; i++) {
      if (list[i].trim().length>0) {
        nonEmptyQty += 1;
      }
    }
    return nonEmptyQty;
}

LunchCheckController.$inject = ['$scope'];

angular.module('lunchApp', [])
  .controller('LunchCheckController', LunchCheckController);
})();