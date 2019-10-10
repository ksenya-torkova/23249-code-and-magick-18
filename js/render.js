'use strict';

(function () {
  var HEROES_AMOUNT = 4;

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
      getTemplateOfHero(window.data.createHero());
    }

    var setupSimilarList = document.querySelector('.setup-similar-list');
    setupSimilarList.appendChild(fragment);
  };

  addHeroesToMarkup();
})();
