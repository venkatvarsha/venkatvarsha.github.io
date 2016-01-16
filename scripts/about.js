$(document).ready(function() {

  var hidden = true;
  reload();

  $("#logo").click(function() {
    hidden = !hidden;
    reload();
  });

  function reload() {
    if (hidden) {
      $("#dropdown").hide();
    }
    else {
      $("#dropdown").show();
    }
  }

});
