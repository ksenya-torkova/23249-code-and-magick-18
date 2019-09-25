'use strict';

var HEROES_AMOUNT = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

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

var getRandomInteger = function (min, max) {
  var randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
};

var createHero = function () {
  var hero = {
    names:
      Math.random() >= 0.5 ?
        NAMES[getRandomInteger(0, NAMES.length - 1)] + ' ' + SURNAMES[getRandomInteger(0, SURNAMES.length - 1)] :
        SURNAMES[getRandomInteger(0, NAMES.length - 1)] + ' ' + NAMES[getRandomInteger(0, SURNAMES.length - 1)],
    coatColor: COAT_COLORS[getRandomInteger(0, COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandomInteger(0, EYES_COLORS.length - 1)]
  };

  return hero;
};

var similarHeroTemplate = document.querySelector('#similar-wizard-template').content;
var similarHeroItem = similarHeroTemplate.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

var getTemplateOfHero = function (heroItem) {
  var heroTemplate = similarHeroItem.cloneNode(true);
  heroTemplate.querySelector('.setup-similar-label').textContent = heroItem.names;
  heroTemplate.querySelector('.wizard-coat').style.fill = heroItem.coatColor;
  heroTemplate.querySelector('.wizard-eyes').style.fill = heroItem.eyesColor;
  fragment.appendChild(heroTemplate);
};

var addHeroesToMarkup = function () {
  for (var i = 0; i < HEROES_AMOUNT; i++) {
    getTemplateOfHero(createHero());
  }

  var setupSimilarList = document.querySelector('.setup-similar-list');
  setupSimilarList.appendChild(fragment);
};

addHeroesToMarkup();

var setup = document.querySelector('.setup');
var setupUserName = setup.querySelector('.setup-user-name');
var setupSimilar = setup.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  evt.stopPropagation();
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var changeBackgroundColor = function (target, colors) {
  target.style.backgroundColor = colors[getRandomInteger(0, colors.length - 1)];
};

var changeSvgColor = function (target, colors) {
  target.style.fill = colors[getRandomInteger(0, colors.length - 1)];
};

var setInputValue = function (input, value) {
  input.value = value;
};

var setupWizardCoat = setup.querySelector('.wizard-coat');
var setupWizardEyes = setup.querySelector('.wizard-eyes');
var setupFireball = setup.querySelector('.setup-fireball-wrap');
var setupWizardCoatInput = setup.querySelector('input[name="coat-color"]');
var setupWizardEyesInput = setup.querySelector('input[name="eyes-color"]');
var setupFireballInput = setup.querySelector('input[name="fireball-color"]');

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
  setInputValue(setupFireballInput, setupFireball.style.backgroundColor);
});
