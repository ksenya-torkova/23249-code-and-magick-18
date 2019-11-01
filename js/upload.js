'use strict';

var setupForm = window.colorize.setup.querySelector('.setup-wizard-form');

setupForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var onSuccessDataUpload = function () {
    window.colorize.setup.classList.add('hidden');
  };

  window.backend.save('post', window.backend.SET_DATA_URL, onSuccessDataUpload, window.backend.onErrorLoad, new FormData(setupForm));
});
