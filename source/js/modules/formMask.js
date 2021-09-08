'use strict';

(function () {
  var telInputs = document.querySelectorAll('.js_tel_input');

  var maskOptions = {
    mask: '+{7} (000) 000-00-00'
  };

  if (telInputs.length) {
    telInputs.forEach(function (tel) {
      return new window.IMask(tel, maskOptions);
    });
  }

  return null;
})();
