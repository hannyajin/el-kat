'use strict';

angular.module('app.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home/home.html',
      controller: 'homeCtrl'
    })
    .otherwise({ redirectTo: '/' });
}])

.controller('homeCtrl', [function() {

}]);