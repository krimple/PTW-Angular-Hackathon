(function() {
  'use strict';

  angular.module('classStuffApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tasks', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/categories', {
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl'
      })
      .otherwise({
        redirectTo: '/tasks'
      });


  })
    .run(function($rootScope) {
      $rootScope.categories = [
        'chore',
        'fun activity',
        'tear off the band aid...'
      ];
    });
}());
