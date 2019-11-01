'use strict';

(function () {
  var setupHandler = window.colorize.setup.querySelector('.upload');

  setupHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoordinates = {
      x: evt.clientX,
      y: evt.clientY
    };

    var isDragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      isDragged = true;

      var shift = {
        x: startCoordinates.x - moveEvt.clientX,
        y: startCoordinates.y - moveEvt.clientY
      };

      startCoordinates = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.colorize.setup.style.top = (window.colorize.setup.offsetTop - shift.y) + 'px';
      window.colorize.setup.style.left = (window.colorize.setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (isDragged) {
        var onUploadClick = function (fileEvt) {
          fileEvt.preventDefault();

          setupHandler.removeEventListener('click', onUploadClick);
        };

        setupHandler.addEventListener('click', onUploadClick);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
