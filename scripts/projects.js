$(document).ready(function() {

  /* initial conditions */

  setInterval("nextImg()", 3000);
  $(".window").each(function() {
    $(this).hide();
  });
  var menu = false;
  reload();

  /* slideshow code */

  $(".slideshow").each(function() {
    var slides = $(this).children(), index = 0;
    slides.not(":first").hide();
    function advance() {
      slides.eq(index).fadeOut(1000, function() {
        index += 1;
        if (index == slides.length)
          index = 0;
        slides.eq(index).fadeIn(1000);
      });
    }
    setInterval(advance, 7000);
  });

  $("#logo").click(function() {
    menu = !menu;
    reload();
  });

  $("#bootstrap").click(function() {
    $("#bootstrap-detail").show();
  });

  $("#processing").click(function() {
    $("#processing-detail").show();
  })

  $("#iChef").click(function() {
    $("#iChef-detail").show();
  });

  $(".close").click(function() {
    $(this).parent().hide();
  });

  function reload() {
    if (menu) {
      $("#dropdown").show();
    }
    else {
      $("#dropdown").hide();
    }
  }

});
