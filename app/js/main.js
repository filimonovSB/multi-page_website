$(function () {
  $(".header__menu-button").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });
  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });
  $(".contact-slider").slick({
    dots: true,
    slidesToShow: 10,
    slidesToScroll: 10,

    arrows: false,
  });
  $(".top__slider").slick({
    dots: true,

    autoplay: true,
    arrows: false,
  });
  $(".article-slider__box").slick({
    prevArrow:
      '<img class="article__slider-arrow article__slider-arrowleft"src="images/content/arrow-left.png" alt="">',
    nextArrow:
      '<img class="article__slider-arrow article__slider-arrowright"src="images/content/arrow-right.png" alt="">',
    // arrows: true,
  });
  let mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".living",
    },
  });
});
