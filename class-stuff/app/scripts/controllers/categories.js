'use strict';

angular.module('classStuffApp')
  .controller('CategoriesCtrl', function ($scope) {
  $scope.categories = ['low', 'med', 'hi'];
});
