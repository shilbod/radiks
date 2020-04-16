

$(document).ready(function() {
  $('.hero-slider').slick({
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: false,
    draggable: false,
    lazyLoad: true,
    focusOnSelect: true,
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right')
  });
  $('.comment-wrap').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    draggable: false,
    lazyLoad: true,
    focusOnSelect: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $('.arrow-comment-left'),
    nextArrow: $('.arrow-comment-right'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});    

ymaps.ready(init);
function init(){ 
    var myMap = new ymaps.Map("map", {
      center: [53.935840, 27.604178],
      zoom: 14
    });
    var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [53.935840, 27.604178] // координаты точки
  },
  properties: {
  iconCaption: "ОOO «Радикс-C»",
      balloonContentHeader: "Сеть аптек «Радикс-С»",
      balloonContentBody: "220113, Минск, ул. Я. Коласа, 48 (аптека)",

    }
});

// Размещение геообъекта на карте.
myMap.geoObjects.add(myGeoObject);
    }

$(document).ready(function() {
  $("#phone").mask("+375 (99) 999-99-99");
  $(".popup-form #phone").mask("+375 (99) 999-99-99");

  $('[data-fancybox]').fancybox({
  autoFocus: false,
  touch: {
    vertical: false,
  },
});
$('.navbar__menu-button').on('click', function(){
  $('.navbar__nav').slideToggle(400);
});
});    

$(document).ready(function() {
//E-mail Ajax Send
$("form").submit(function() { //Change
var th = $(this);
$.ajax({
  type: "POST",
  url: "mail.php", //Change
  data: th.serialize()
}).done(function() {
  $.fancybox.close();
  $.fancybox.open({
      src  : '#trueModal',
      type : 'inline',
  });
  setTimeout(function() {
    // Done Functions
    th.trigger("reset");
  }, 1000);
});
return false;
});

});

(function($) {
  $(function() {
    $(".tabs__caption").on("click", ".menu-large__item:not(.active-tab)", function() {
      $(this)
        .addClass("active-tab")
        .siblings()
        .removeClass("active-tab")
        .closest("div.tabs")
        .find("div.tabs__content")
        .removeClass("active-tab")
        .eq($(this).index())
        .addClass("active-tab");
    });
  });
})(jQuery);

$('.dropdown-menu[data-delay="1"]').on('click', function(){
  $('.dropdown-menu-mob-list[data-name="1"]').slideToggle(300);
});
$('.dropdown-menu[data-delay="2"]').on('click', function(){
  $('.dropdown-menu-mob-list[data-name="2"]').slideToggle(300);
});
$('.dropdown-menu[data-delay="3"]').on('click', function(){
  $('.dropdown-menu-mob-list[data-name="3"]').slideToggle(300);
});


$('.search-header-icon').on('click', function(){
  $('.search-header').slideToggle(300);
});
