'use strict';

(function () {
  var telInputs = document.querySelectorAll('.js_tel_input');

  if (telInputs.length) {
    telInputs.forEach(function (tel) {
      var telOldPlaceholder = tel.placeholder;
      var telNewPlaceholder = '+7 (___)___-__-__';
      getFormHoverNewPlaceholder(tel, telOldPlaceholder, telNewPlaceholder);
    });

    function getFormHoverNewPlaceholder(form, oldPlaceholder, newPlaceholder) {
      form.addEventListener('mouseover' , function() {
        form.placeholder = newPlaceholder;
      })

      form.addEventListener('focus' , function() {
        form.placeholder = newPlaceholder;
      })

      form.addEventListener('mouseout' , function() {
        form.placeholder = oldPlaceholder;
      })

      form.addEventListener('blur' , function() {
        form.placeholder = oldPlaceholder;
      })
      }
  }
})();
