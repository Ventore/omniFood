$(document).ready(function() {

  $('.js--section-features').waypoint(function(direction) {
    if (direction === "down") {
      $('nav').addClass("sticky")
    } else {
      $('nav').removeClass("sticky")
    }
  }, {
    offset: "60px;"
  })

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
});
