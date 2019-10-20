'use strict';

var setupForm = window.setup.querySelector('.setup-wizard-form');

setupForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  window.backend.load('post', window.backend.SET_DATA_URL, function () {
    window.setup.classList.add('hidden');
  }, new FormData(setupForm));
});
