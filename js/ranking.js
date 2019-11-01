'use strict';

(function () {
  var wizards = [];

  var getRank = function (item) {
    var rank = 0;

    if (item.colorCoat === window.colorize.coatColor) {
      rank += 2;
    }

    if (item.colorEyes === window.colorize.eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesCompare = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render.appendWizards(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);

      if (rankDiff === 0) {
        rankDiff = namesCompare(left.name, right.name);
      }

      return rankDiff;
    }));
  };

  var onSuccessWizardsLoad = function (data) {
    wizards = data;
    updateWizards();
  };

  var onCoatChange = function (color) {
    window.colorize.coatColor = color;
    window.util.debounce(updateWizards);
  };

  var onEyesChange = function (color) {
    window.colorize.eyesColor = color;
    window.util.debounce(updateWizards);
  };

  window.backend.load('get', window.backend.GET_DATA_URL, onSuccessWizardsLoad, window.backend.onErrorLoad);

  window.ranking = {
    onCoatChange: onCoatChange,
    onEyesChange: onEyesChange
  };
})();
