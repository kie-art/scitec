$(function () {
  // フッターデザイン

  $("footer").hover();
  $("footer").hover(function () {
    $("footer").css("color", "red");
  }, function () {
    $(this).css("color", "black");
  })

  // トップページスライドショー

  if ($("#home").lenght) {

    $('.slider').slick({
      autoplay: true,
      arrows: false,
    });

  }

  // リサイズ時のイベント
  $(window).resize(function () {
    console.log($("body").width());
  });
  

})
