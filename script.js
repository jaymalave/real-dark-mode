$("body").on("mousemove", function (e) {
  var ofst = ($(window).width() - 1024) / 2.5;
  $("#glass").css({
    left: Math.round(e.pageX - 80 - ofst) + "px",
    top: Math.round(e.pageY - 80) + "px",
  });
});
