'use strict';

angular.module('app.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/about', {
      templateUrl: 'views/about/about.html',
      controller: 'aboutCtrl'
    });
}])

.controller('aboutCtrl', ['contentFactory', '$scope', function(contentFactory, $scope) {
  $scope.about = contentFactory.about;
}]);