'use strict';

angular.module('app')
.controller('headerCtrl', ['contentFactory', '$scope', function(contentFactory, $scope) {
  $scope.pages = contentFactory.pages;
}]);

/* deprecated
YUI({
  classNamePrefix: 'pure'
}).use('gallery-sm-menu', function (Y) {

  var menu = new Y.Menu({
    container: '#menu-container',
    sourceNode: '#menu-items',
    orientation: 'horizontal',
    hideOnOutsideClick: false,
    hideOnClick: false
  });

  menu.render();
  menu.show();

});
*/