'use strict';

angular.module('app.press', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/press/press.html',
      controller: 'pressCtrl'
    })
    .otherwise({ redirectTo: '/' });
}])

.controller('pressCtrl', [function() {

}]);