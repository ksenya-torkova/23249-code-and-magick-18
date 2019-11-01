'use strict';

(function () {
  var SETUP_DEFAULT_X = '80px';
  var SETUP_DEFAULT_Y = '50%';
  var setupSimilar = window.colorize.setup.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.colorize.setup.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE && !evt.target.classList.contains('setup-user-name')) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.colorize.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.colorize.setup.classList.add('hidden');
    window.colorize.setup.style.top = SETUP_DEFAULT_X;
    window.colorize.setup.style.left = SETUP_DEFAULT_Y;
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      closePopup();
    }
  });
})();
