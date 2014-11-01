'use strict';

angular.module('app')
.controller('solar_logoCtrl', ['contentFactory', '$scope', function(contentFactory, $scope) {
  $scope.copyright_text = contentFactory.copyright_text;
}]);
