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

  var changeBackgroundColor = function (target, colors) {
    target.style.backgroundColor = colors[window.util.getRandomInteger(0, colors.length - 1)];
  };

  var changeSvgColor = function (target, colors) {
    target.style.fill = colors[window.util.getRandomInteger(0, colors.length - 1)];
  };

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

  var setupWizardCoat = window.setup.querySelector('.wizard-coat');
  var setupWizardEyes = window.setup.querySelector('.wizard-eyes');
  var setupFireball = window.setup.querySelector('.setup-fireball-wrap');
  var setupWizardCoatInput = window.setup.querySelector('input[name="coat-color"]');
  var setupWizardEyesInput = window.setup.querySelector('input[name="eyes-color"]');
  var setupFireballInput = window.setup.querySelector('input[name="fireball-color"]');

  setupWizardCoat.addEventListener('click', function () {
    changeSvgColor(setupWizardCoat, COAT_COLORS);
    setInputValue(setupWizardCoatInput, setupWizardCoat.style.fill);
  });

  setupWizardEyes.addEventListener('click', function () {
    changeSvgColor(setupWizardEyes, EYES_COLORS);
    setInputValue(setupWizardEyesInput, setupWizardEyes.style.fill);
  });

  setupFireball.addEventListener('click', function () {
    changeBackgroundColor(setupFireball, FIREBALL_COLORS);
    setInputValue(setupFireballInput, rgbToHex(setupFireball.style.backgroundColor));
  });
})();
