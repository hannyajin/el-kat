'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', [
  'ngRoute',
  'app.home',
  'app.about',
  'app.music',
  'app.videos',
  'app.events',
  'app.press'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

/** Site content
---------------------*/
app.factory('contentFactory', [function() {
  // navigation bar links
  var pages = ['Home', 'About', 'Music', 'Videos', 'Events', 'Press'];
  var bgImages = [
    'main-bg.jpg', 'about-bg.jpg', 'music-bg.jpg', 'events-bg.jpg', 'review-bg.jpg'
  ];

  return {
    pages: pages,
    bgImages: bgImages
  }
}]);