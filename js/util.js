'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var getRandomInteger = function (min, max) {
    var randomNumber = min + Math.random() * (max + 1 - min);
    return Math.floor(randomNumber);
  };

  window.util = {
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,
    getRandomInteger: getRandomInteger
  };
})();
