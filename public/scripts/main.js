'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', [
  'ngRoute',

  'appAnimations',
  'appFilters',

  'youtube-embed',

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
  var navLinks = [{
    text: 'Main',
    link: 'home'
  }, {
    text: 'Events',
    link: 'events'
  }, {
    text: 'Music',
    link: 'music'
  }, {
    text: 'Video',
    link: 'videos'
  }, {
    text: 'Press',
    link: 'press'
  }, {
    text: 'About',
    link: 'about'
  }];

  var bgImages = [
    'main-bg.jpg', 'about-bg.jpg', 'music-bg.jpg', 'events-bg.jpg', 'review-bg.jpg'
  ];

  var copyright = {
    text: '© KAT SOLAR 2014',
    imgSrc: 'img/solar_logo.png',
    hidden: true,
    invert: false
  };

  // social links
  var socialLinks = {
    itunes: "https://www.apple.com/itunes/",
    youtube: 'https://youtube.com',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com'
  };

  // music player data
  var mplayer = {
    soundcloudUrl: "https://soundcloud.com/katsolar/remix-right-here-indoor-storm",
    intro: 'NEW SINGLE',
    title: 'INFINITY',
    acknowledgments_intro: 'WITH REMIXES BY',
    acknowledgments: [
      'JUMP SMOKERS &', 'RALPH ROSARIO'
    ],
    nowPlaying: ''
  };

  // music page content data
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
      other: 'Featuring Daven'
    }]
  };

  // video page content data
  var video = {
    list: [{
      src: 'http://www.youtube.com/watch?v=JN98cyvFaXA',
      id: 'JN98cyvFaXA'
    },{
      src: 'http://www.youtube.com/watch?v=75NuObt-6A0',
      id: '75NuObt-6A0'

    },{
      src: 'https://www.youtube.com/watch?v=hFHnEOfgzks',
      id: 'hFHnEOfgzks'

    },{
      src: 'https://www.youtube.com/watch?v=EYGyhH1hBy0',
      id: 'EYGyhH1hBy0'
    }]
  };

  // press page content data
  var press = {
    items: [{
      href: "http://www.mtv.com/videos/kat-solar/913973/snake-eyes.jhtml",
      title: "Watch the full length music video \"Snake Eyes\"",
      text: "from Kat Solar which premiered on New, Now, Next",
      logoSrc: "img/press/mtv_logo.png"
    },{
      href: "http://www.out.com/entertainment/music/2012/07/03/kat-solar-flares-snake-eyes-release-party",
      title: "Kat Solar Flares Up at ‘Snake Eyes’ Release Party",
      text: "A commensurate performer, Solar proved she could sing dance,\
       and play to a crowd. It seems very likely that her star will continue\
       to burn bright",
      logoSrc: "img/press/out_magazine.jpg"
    },{
      href: "http://scallywagandvagabond.com/2013/05/kat-solar-snake-eyes-soon-to-appear-on-logo-tv/",
      title: "Snake Eyes.‘ Soon to appear on Logo TV. A diva on the up’",
      text: "Kat Solar to be sure is one of those buoyant can do musicians\
       who has decided to take her brand of charisma\
       gutsy and theatrical to the fore",
      logoSrc: "img/press/scallywag.jpg"
    },{
      href: "http://www.baeblemusic.com/musicblog/8-27-2012/A-Diva-Stuck-in-an-Indie-World-Kat-Solar-at-Le-Poisson-Rouge.html",
      title: "A Diva Stuck In An Indie World: Kat Solar at Le Poisson Rouge",
      text: "Kat Solar is an up and coming pop singer from the bright city of\
       Detroit who's a little bit of the last four decades",
      logoSrc: "img/press/baeble.jpg"
    },{
      href: "http://www.timeout.com/newyork/music/kat-solar-derek-nicoletto",
      title: "Kat Solar",
      text: "Detroit's Kat Solar, an electro-dance diva in the making shows off\
       brassy tunes and slick grooves from her debut album Snake Eyes",
      logoSrc: "img/press/timeoutny.jpg"
    },{
      href: "http://encoremag.com/new-york/articles/14719/kat-solar-comes-to-le-poisson-rouge",
      title: "Kat Solar Comes to Le Poisson Rouge",
      text: "Kat Solar's debut album has been met with enthusiasm Snake Eyes\
       takes thelistener on a narrative journey with a strong female protagonist\
       that is bold, sexyand full of adventure",
      logoSrc: "img/press/encore.jpg"
    },{
      href: "http://www.firstpost.com/topic/organization/out-magazine-kat-solar-epk-video-0qZFkCy_Ab8-38151-1.html",
      title: "Kat Solar EPK",
      text: "Kat Solar's debut album has been met with enthusiasm,\
       including a rave review from Out Magazine.",
      logoSrc: "img/press/firstpost_logo.gif"
    },{
      href: "http://soundtracktomyday.blogspot.com/2012/10/kat-solar-at-delaware-pride.html",
      title: "BLOG REVIEW",
      text: "She can dance, work a boa, and deliver a song with a coo and a wink,\
       and maybe a little spank, too. Kat is having a great time on stage with her\
       dancers, and that joy is contagious.",
      logoSrc: "img/press/soundtracktomyday.gif"
    },{
      href: "http://www.joyofviolentmovement.com/post/37567429504/kat-solar-at-the-mercury-lounge-12-3-12",
      title: "BLOG REVIEW",
      text: "Solar has a powerfully seductive voice and is honestly quite a striking\
       figure to look at.",
      logoSrc: "img/press/joyviolent_movement.gif"
    }]
  }

  // about page content data
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

    pages: {
      music: music,
      about: about,
      press: press,
      video: video
    }
  }
}]); // app factory

