'use strict';

(function () {
  var sliderContainers = document.querySelectorAll('.slider');

  // eslint-disable-next-line consistent-return
  var getPhotoSlider = function (slider) {
    if (slider) {
      var container = slider.querySelector('.swiper-container');
      var next = slider.querySelector('.js-btn-next');
      var pagination = slider.querySelector('.swiper-pagination');
      var slidesPerView = 1;
      var spaceBetween = 15;

      return new window.Swiper(container, {
        loop: true,
        autoHeight: true,
        navigation: {
          nextEl: next,
        },
        updateOnWindowResize: false,
        pagination: {
          el: pagination,
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: spaceBetween,
          },
          901: {
            slidesPerView: slidesPerView,
            spaceBetween: spaceBetween,
          },
        },
      });
    }
  };

  sliderContainers.forEach(function (currentValue) {
    getPhotoSlider(currentValue);
  });


})();
