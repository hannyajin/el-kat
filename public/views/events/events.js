'use strict';

angular.module('app.events', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/events/events.html',
      controller: 'eventsCtrl'
    })
    .otherwise({ redirectTo: '/' });
}])

.controller('eventsCtrl', [function() {

}]);