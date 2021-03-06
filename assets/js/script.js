$(document).ready(function() {
  // Sticky nav bar with waypoints plugin
  var metaThema = document.getElementsByTagName('meta')[4];
  $('.js--section-features').waypoint(function(direction) {
    if (direction === "down") {
      $('nav').addClass("sticky");
      metaThema.content = "#fff";
    } else {
      $('nav').removeClass("sticky");
      metaThema.content = "#e67e22";
    }
  }, {
    offset: "60px;"
  })
  // Scroll To on click buttons
  $('.js--scroll-to-plans').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top -60}, 1000);
  });

  $('.logo-black').click(function() {
    $('html, body').animate({scrollTop: $('header').offset().top }, 1000);
  });

  $('.js--scroll-to-start').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top -60}, 1000);
  })
  //Navigation scroll
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top -60
          }, 1000);
          $('#nav-icon1').toggleClass('open');
          if ($(window).width() < 750) {
            $('.main-nav').slideToggle(200);
          }
          return false;
        }
      }
    });
  });
  // Animation on scroll
  $('.js--section-features').waypoint(function(direction) {
    $(".js--waypoint-1").addClass('animated fadeIn');
  }, {
    offset: '60px;'
  });

  $('.js--section-steps').waypoint(function(direction) {
    $(".js--waypoint-2").addClass('animated fadeInUp');
  }, {
    offset: '50%'
  });

  $('.js--section-cities').waypoint(function(direction) {
    $(".js--waypoint-3").addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--section-plans').waypoint(function(direction) {
    $(".js--waypoint-4").addClass('animated pulse');
  }, {
    offset: '60px;'
  });

  $('#nav-icon1').click(function(){
    $(this).toggleClass('open');
    var nav = $('.main-nav');
    nav.slideToggle(200);
  });
});
