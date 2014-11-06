'use strict';

angular.module('app.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home/home.html',
      controller: 'homeCtrl'
    });
}])

.controller('homeCtrl', ['contentFactory', '$scope', function(contentFactory, $scope) {
  contentFactory.copyright.hidden = true;
  $scope.mplayer = contentFactory.mplayer;
  contentFactory.copyright.invert = false;
}]);