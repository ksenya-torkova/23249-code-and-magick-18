'use strict';

(function () {
  var HEROES_AMOUNT = 4;

  var createHero = function () {
    var hero = {
      names:
        Math.random() >= 0.5 ?
          window.data.NAMES[window.util.getRandomInteger(0, window.data.NAMES.length - 1)] + ' ' + window.data.SURNAMES[window.util.getRandomInteger(0, window.data.SURNAMES.length - 1)] :
          window.data.SURNAMES[window.util.getRandomInteger(0, window.data.NAMES.length - 1)] + ' ' + window.data.NAMES[window.util.getRandomInteger(0, window.data.SURNAMES.length - 1)],
      coatColor: window.data.COAT_COLORS[window.util.getRandomInteger(0, window.data.COAT_COLORS.length - 1)],
      eyesColor: window.data.EYES_COLORS[window.util.getRandomInteger(0, window.data.EYES_COLORS.length - 1)]
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
})();
