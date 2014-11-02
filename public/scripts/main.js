'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', [
  'ngRoute',

  'appAnimations',
  'appFilters',

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
  var navLinks = ['Home', 'About', 'Music', 'Videos', 'Events', 'Press'];
  var bgImages = [
    'main-bg.jpg', 'about-bg.jpg', 'music-bg.jpg', 'events-bg.jpg', 'review-bg.jpg'
  ];

  var copyright = {
    text: '© KAT SOLAR 2014'
  };

  var single = {
    url: "https://soundcloud.com/katsolar/remix-right-here-indoor-storm"
  }

  // social links
  var socialLinks = {
    youtube: 'https://youtube.com',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com'
  };

  // music player data
  var mplayer = {
    intro: 'NEW SINGLE',
    title: 'INFINITY',
    acknowledgments_intro: 'WITH REMIXES BY',
    acknowledgments: [
      'JUMP SMOKERS &', 'RALPH ROSARIO'
    ]
  };

  var music = {
    covers: [{
      src: 'img/covers/infinity_jsr.jpg',
      url: '#',
      title: 'Infinity',
      other: '(Jump Smokers Remix)'
    }, {
      src: 'img/covers/infinity.jpg',
      url: '#',
      title: 'Infinity',
      other: ''
    }, {
      src: 'img/covers/infinity_rrr.jpg',
      url: '#',
      title: 'Infinity',
      other: '(Ralph Rosario Remix)'
    }, {
      src: 'img/covers/snake_eyes.jpg',
      url: '#',
      title: 'Snake Eyes',
      other: ''
    }, {
      src: 'img/covers/snake_eyes_isr.jpg',
      url: '#',
      title: 'Snake Eyes',
      other: 'Indoor Storm Remix'
    }, {
      src: 'img/covers/right_here_isr.jpg',
      url: '#',
      title: 'Right Here',
      other: '(Indoor Storm Remix)'
    }, {
      src: 'img/covers/summertime_love_fd.jpg',
      url: '#',
      title: 'Summertime Love',
      other: 'Featuring Dawn'
    }]
  };

  var video = {
    list: [{
      url: '//www.youtube.com/embed/JN98cyvFaXA',
      id: 'JN98cyvFaXA'
    },{
      url: '//www.youtube.com/embed/TW_K4xFT40Y',
      id: 'TW_K4xFT40Y'
    }]
  };

  var press = {
    items: [{
      title: "Watch the full length music video \"Snake Eyes\"",
      text: "from Kat Solar which premiered on New, Now, Next",
      src: "img/press/mtv_logo.png"
    },{
      title: "Kat Solar Flares Up at ‘Snake Eyes’ Release Party",
      text: "A commensurate performer, Solar proved she could sing dance,\
       and play to a crowd. It seems very likely that her star will continue\
       to burn bright",
      src: "img/press/out_magazine.jpg"
    },{
      title: "Snake Eyes.‘ Soon to appear on Logo TV. A diva on the up’",
      text: "Kat Solar to be sure is one of those buoyant can do musicians\
       who has decided to take her brand of charisma\
       gutsy and theatrical to the fore",
      src: "img/press/scallywag.jpg"
    },{
      title: "A Diva Stuck In An Indie World: Kat Solar at Le Poisson Rouge",
      text: "Kat Solar is an up and coming pop singer from the bright city of\
       Detroit who's a little bit of the last four decades",
      src: "img/press/baeble.jpg"
    },{
      title: "Kat Solar",
      text: "Detroit's Kat Solar, an electro-dance diva in the making shows off\
       brassy tunes and slick grooves from her debut album Snake Eyes",
      src: "img/press/timeoutny.jpg"
    },{
      title: "Kat Solar Comes to Le Poisson Rouge",
      text: "Kat Solar's debut album has been met with enthusiasm Snake Eyes\
       takes thelistener on a narrative journey with a strong female protagonist\
       that is bold, sexyand full of adventure",
      src: "img/press/encore.jpg"
    }]
  }

  // about page data
  var about = {
    title: 'KATSOLAR',
    //texts: ['test1', 'test2']
    texts: [
      "Kat Solar's debut album Snake Eyes takes you on a journey with a strong\
       female character that is bold, sexy and full of adventure. Solar is the\
       female James Bond meets sex kitten Bridget Bardot. The modern pop songs are\
       about embracing sexuality, freedom, and life. The arrangements span the globe\
       from the international rock-dance track \"Snake Eyes\" to the glittery\
       discotheque feel of \"Doing What Feels Good.\"Kat Solar (born Katrina Connor)\
       grew up in Detroit where her earliest memories were of dancing to her parents’\
       early rock and roll, classic soul and Motown. Working in the dramatic arts from\
       a young age Solar brings a very theatrical edge to her style both musically and\
       visually. In her own words",
      "Have fun. Don’t become a robot. And if you must, for however long you must,\
       remember to shine and dance and sing until your neighbors hate you"
    ]
  };

  return {
    copyright: copyright,
    navLinks: navLinks,
    bgImages: bgImages,
    socialLinks: socialLinks,
    mplayer: mplayer,
    music: music,
    about: about,
    single: single,

    pages: {
      music: music,
      about: about,
      press: press,
      video: video
    }
  }
}]); // app factory

