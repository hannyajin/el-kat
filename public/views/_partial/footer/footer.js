'use strict';

angular.module('app')
.controller('footerCtrl', ['contentFactory', '$scope', function(contentFactory, $scope) {
  $scope.copyright = contentFactory.copyright;
}]);
