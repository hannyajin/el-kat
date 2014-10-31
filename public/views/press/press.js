'use strict';

angular.module('app.press', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/press', {
      templateUrl: 'views/press/press.html',
      controller: 'pressCtrl'
    });
}])

.controller('pressCtrl', [function() {

}]);