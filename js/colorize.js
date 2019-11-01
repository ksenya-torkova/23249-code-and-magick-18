'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var setup = document.querySelector('.setup');

  var setInputValue = function (input, value) {
    input.value = value;
  };

  var rgbToHex = function (rgb) {
    var sep = rgb.indexOf(',') > -1 ? ',' : ' ';
    rgb = rgb.substr(4).split(')')[0].split(sep);

    var r = (+rgb[0]).toString(16);
    var g = (+rgb[1]).toString(16);
    var b = (+rgb[2]).toString(16);

    r = r.length === 1 ? '0' + r : r;
    g = g.length === 1 ? '0' + g : g;
    b = b.length === 1 ? '0' + b : b;

    return '#' + r + g + b;
  };

  var setupWizardCoat = setup.querySelector('.wizard-coat');
  var setupWizardEyes = setup.querySelector('.wizard-eyes');
  var setupFireball = setup.querySelector('.setup-fireball-wrap');
  var setupWizardCoatInput = setup.querySelector('input[name="coat-color"]');
  var setupWizardEyesInput = setup.querySelector('input[name="eyes-color"]');
  var setupFireballInput = setup.querySelector('input[name="fireball-color"]');

  var coatColor = setupWizardCoat.style.fill;

  setupWizardCoat.addEventListener('click', function () {
    var newCoatColor = COAT_COLORS[window.util.getRandomInteger(0, COAT_COLORS.length - 1)];
    setupWizardCoat.style.fill = newCoatColor;
    coatColor = newCoatColor;
    setInputValue(setupWizardCoatInput, setupWizardCoat.style.fill);
    window.ranking.onCoatChange(newCoatColor);
  });

  var eyesColor = setupWizardEyes.style.fill;

  setupWizardEyes.addEventListener('click', function () {
    var newEyesColor = EYES_COLORS[window.util.getRandomInteger(0, EYES_COLORS.length - 1)];
    setupWizardEyes.style.fill = newEyesColor;
    eyesColor = newEyesColor;
    setInputValue(setupWizardEyesInput, setupWizardEyes.style.fill);
    window.ranking.onEyesChange(newEyesColor);
  });

  setupFireball.addEventListener('click', function () {
    setupFireball.style.backgroundColor = FIREBALL_COLORS[window.util.getRandomInteger(0, FIREBALL_COLORS.length - 1)];
    setInputValue(setupFireballInput, rgbToHex(setupFireball.style.backgroundColor));
  });

  window.colorize = {
    setup: setup,
    coatColor: coatColor,
    eyesColor: eyesColor
  };
})();
