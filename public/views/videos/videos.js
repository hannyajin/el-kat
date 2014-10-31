'use strict';

angular.module('app.videos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/videos/videos.html',
      controller: 'videosCtrl'
    })
    .otherwise({ redirectTo: '/' });
}])

.controller('videosCtrl', [function() {

}]);