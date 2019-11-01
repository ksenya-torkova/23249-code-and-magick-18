'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var DEBOUNCE_INTERVAL = 500;

  var getRandomInteger = function (min, max) {
    var randomNumber = min + Math.random() * (max + 1 - min);
    return Math.floor(randomNumber);
  };

  var lastTimeout;

  var debounce = function (cb) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }

    lastTimeout = window.setTimeout(cb, DEBOUNCE_INTERVAL);
  };

  window.util = {
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,
    getRandomInteger: getRandomInteger,
    debounce: debounce
  };
})();
