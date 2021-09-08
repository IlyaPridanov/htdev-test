'use strict';

(function () {
  var headerNavBtn = document.querySelector('.header-middle__menu-btn');
  var headerMiddleBtn = document.querySelector('.header-middle__connection-btn');
  var headerNav = document.querySelector('.header-nav');
  var headerConnection = document.querySelector('.header-middle__connection-block');

  var getOpenNav = function (link) {
    link.addEventListener('click', function () {
      link.classList.toggle('header-middle__menu-btn--active');
      headerNav.classList.toggle('header-nav--inactive');
      headerConnection.classList.add('header-middle__connection-block--inactive');
    });
  };

  var getOpenConnection = function (link) {
    link.addEventListener('click', function () {
      headerConnection.classList.toggle('header-middle__connection-block--inactive');
      headerNav.classList.add('header-nav--inactive');
      headerNavBtn.classList.remove('header-middle__menu-btn--active');
    });
  };

  getOpenNav(headerNavBtn);
  getOpenConnection(headerMiddleBtn);
})();
