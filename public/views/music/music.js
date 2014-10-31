'use strict';

angular.module('app.music', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/music/music.html',
      controller: 'musicCtrl'
    })
    .otherwise({ redirectTo: '/' });
}])

.controller('musicCtrl', [function() {

}]);