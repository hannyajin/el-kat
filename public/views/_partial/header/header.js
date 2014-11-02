'use strict';

angular.module('app')
.controller('headerCtrl', ['contentFactory', '$scope', function(contentFactory, $scope) {
  $scope.navLinks = contentFactory.navLinks;
  $scope.socialLinks = contentFactory.socialLinks;


  angular.element(document).ready(function() {
    var widgetIframe = $('#sc-widget')[0];
    var widget = SC.Widget( widgetIframe );

    //var url = "https://soundcloud.com/katsolar/remix-right-here-indoor-storm";
    var url = contentFactory.single.url;

    widget.load(url, {
      show_artwork: false,
      auto_play: false,
      buying: false,
      liking: false,
      download: false,
      sharing: false,
      show_comments: false,
      show_playcount: false,
      show_user: false
    });

    var _play = $('#icon-mplayer-id');
    var _pause = $('#icon-mplayer-pause-id');

    var playbutton = $('#icon-mplayer-button-id');
    playbutton.on('click', function() {
      console.log("---- CLICK ----");

      widget.isPaused(function(paused) {
        if (paused) {
          widget.play();
          _play.slideUp();
          _pause.slideDown();
        } else {
          widget.pause();
          _pause.slideUp();
          _play.slideDown();
        }
      });
    });

    window._SCW = widget;

    console.log("---- ANGULAR DOCUMENT READY ----");

  }); // on document ready

}]);

