'use strict';

angular.module('app.music', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/music', {
      templateUrl: 'views/music/music.html',
      controller: 'musicCtrl'
    });
}])

.controller('musicCtrl', ['contentFactory', '$scope', function(contentFactory, $scope) {
  $scope.music = contentFactory.pages.music;
}]);