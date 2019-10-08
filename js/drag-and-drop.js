'use strict';

(function () {
  var setupHandler = window.setup.querySelector('.upload');

  setupHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoordinates = {
      setupHandlerX: evt.clientX,
      setupHandlerY: evt.clientY
    };


  });
})();
