'use strict';

var app = angular.module('app.videos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/videos', {
      templateUrl: 'views/videos/videos.html',
      controller: 'videosCtrl'
    });
}])

.controller('videosCtrl', ['contentFactory', '$scope', function(cf, $scope) {
  $scope.video = cf.pages.video;
  cf.copyright.hidden = false;
  cf.copyright.invert = false;
}]);

app.directive("scroll", function ($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      console.log("scrolling");
      scope.$apply();
    });
  };
});
