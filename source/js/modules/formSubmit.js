'use strict';

(function () {
    var form = document.querySelectorAll('.form');
    var getFormSubmit = function (formSubmit) {
        if (formSubmit) {
            var formSubmitTel = formSubmit.querySelector('.js_tel_input');
            var formSubmitInput = formSubmit.querySelectorAll('input');
            var formSubmitBtn = formSubmit.querySelector('button');
            formSubmitBtn.addEventListener('click', function() {
                formSubmitInput.forEach(element => {
                    element.classList.remove('form__input--invalid');
                    if (element.checkValidity() == false) {
                        element.classList.add('form__input--invalid');
                        element.oninput = function() {
                            element.classList.remove('form__input--invalid');
                        };
                    }
                    if (!(formSubmitTel.value.length === 18)) {
                        formSubmitTel.classList.add('form__input--invalid');
                        formSubmitTel.oninput = function() {
                            formSubmitTel.classList.remove('form__input--invalid');
                        };
                    }
                });
            });
            formSubmit.addEventListener('submit', function (evt) {
                if (!(formSubmitTel.value.length === 18)) {
                  evt.preventDefault();
                }
            });
        }
    };

    form.forEach(function (currentValue) {
      getFormSubmit(currentValue);
    });
})();
