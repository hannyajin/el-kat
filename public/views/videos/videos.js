'use strict';

angular.module('app.videos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/videos', {
      templateUrl: 'views/videos/videos.html',
      controller: 'videosCtrl'
    });
}])

.controller('videosCtrl', [function() {

}]);