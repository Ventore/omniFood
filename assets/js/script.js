$(document).ready(function() {
  // Sticky nav bar with waypoints plugin
  $('.js--section-features').waypoint(function(direction) {
    if (direction === "down") {
      $('nav').addClass("sticky")
    } else {
      $('nav').removeClass("sticky")
    }
  }, {
    offset: "60px;"
  })
  // Scroll To on click buttons
  $('.js--scroll-to-plans').click(function() {
    console.log("click");
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top -60}, 1000);
  });

  $('.js--scroll-to-start').click(function() {
    console.log("click");
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
    offset: '60px;'
  });

  $('.js--section-cities').waypoint(function(direction) {
    $(".js--waypoint-3").addClass('animated fadeIn');
  }, {
    offset: '60px;'
  });

  $('.js--section-plans').waypoint(function(direction) {
    $(".js--waypoint-4").addClass('animated pulse');
  }, {
    offset: '60px;'
  });
});
