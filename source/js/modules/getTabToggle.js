/* eslint-disable max-nested-callbacks */
'use strict';

(function () {
  var newSliderTab = document.querySelectorAll('.new-slider__tab');
  var sliderTab = document.querySelectorAll('.new-slider__tab-block');
  var classActive = 'new-slider__tab--active';

  var getTabToggle = function (tab, active, tabBlock) {
    tabBlock.forEach(function (item, i) {
      if (i === 0) {
        item.classList.add('hidden');
      }
    });
    tab.forEach(function (currentValue) {
      currentValue.addEventListener('click', function () {
        tab.forEach(function (item) {
          item.classList.remove(active);
        });
        tabBlock.forEach(function (item) {
          item.classList.add('hidden');
        });
        tabBlock.forEach(function (item) {
          if (currentValue.dataset.label === item.dataset.label) {
            item.classList.remove('hidden');
          }
        });
        currentValue.classList.add(active);
      });
    });
  };

  getTabToggle(newSliderTab, classActive, sliderTab);

})();
