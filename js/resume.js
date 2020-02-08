
$(document).ready(function () {
  $('.social-icons').children('a').hover(
    function () {
      $(this).children("div").animate({
        opacity: '1'
      })
    },
    function () {
      $(this).children("div").animate({
        opacity: '0'
      });
    }
  );

  $('.jtextfill').textfill({ maxFontPixels: 36 });
});