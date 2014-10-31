'use strict';

angular.module('app.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/about/about.html',
      controller: 'aboutCtrl'
    })
    .otherwise({ redirectTo: '/' });
}])

.controller('aboutCtrl', [function() {

}]);