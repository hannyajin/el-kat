'use strict';

angular.module('app.events', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/events', {
      templateUrl: 'views/events/events.html',
      controller: 'eventsCtrl'
    });
}])

.controller('eventsCtrl', ['contentFactory', function(contentFactory) {
  contentFactory.copyright.hidden = false;
}]);