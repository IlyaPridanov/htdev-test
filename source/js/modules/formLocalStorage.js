'use strict';

(function () {
    const inputArr = document.querySelectorAll('.form__input');
    const inputArr1 = document.querySelectorAll('.js-local-storage');

    var getLocalSave = function (input) {
        if (input) {
            input.forEach(element => {
                element.addEventListener('change', function (evt) {
                    localStorage.setItem(evt.target.name, evt.target.value);
                });
            });

        }
    };

    getLocalSave(inputArr);
    getLocalSave(inputArr1);
})();
