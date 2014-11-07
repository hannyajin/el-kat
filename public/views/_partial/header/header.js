'use strict';

var app = angular.module('app')
.controller('headerCtrl', ['contentFactory', '$scope', function(contentFactory, $scope) {
  $scope.navLinks = contentFactory.navLinks;
  $scope.socialLinks = contentFactory.socialLinks;
  $scope.mplayer = contentFactory.mplayer;

  $scope.copyright = contentFactory.copyright;

  var cf = contentFactory;

  $(function() {
    var widgetIframe = $('#sc-widget')[0];
    var widget = SC.Widget( widgetIframe );

    //var url = "https://soundcloud.com/katsolar/remix-right-here-indoor-storm";
    var url = contentFactory.mplayer.soundcloudUrl;

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

    window._SCW = widget;

    //widget.bind(SC.Widget.Events.PLAY, function() {
    widget.bind(SC.Widget.Events.PLAY, function() {
      console.log("PLAY STARTED");
      widget.getCurrentSound(function (sound) {
        console.log("playing: " + sound.title);
        cf.mplayer.nowPlaying = sound.title;
        $scope.$apply();
      })
    })

    //console.log("---- ANGULAR DOCUMENT READY ----");

  }); // on document ready

}])



.directive('mplayButton', [function() {
  //console.log("In Directive");

  var ready = true;

  var widgetIframe = $('#sc-widget')[0];
  var widget = SC.Widget( widgetIframe );

  var _play = $('#icon-mplayer-id');
  var _pause = $('#icon-mplayer-pause-id');

  return function(scope, element, attr) {
    element.on('click', function() {
      if (!ready) {
        return false;
      }

      widget.isPaused(function(paused) {
        if (paused) {
          ready = false;
          widget.play();
          _play.fadeOut(function() {
            _pause.fadeIn(function() {
              ready = true;
            });
          });
        } else {
          ready = false;
          widget.pause();
          _pause.fadeOut(function() {
            _play.fadeIn(function() {
              ready = true;
            });
          });
        }
      });
    });
  };
}]);
