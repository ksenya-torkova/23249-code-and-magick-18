'use strict';

(function () {
  var HEROES_AMOUNT = 4;

  var similarHeroTemplate = document.querySelector('#similar-wizard-template').content;
  var similarHeroItem = similarHeroTemplate.querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();

  var getTemplateOfHero = function (heroItem) {
    var heroTemplate = similarHeroItem.cloneNode(true);
    heroTemplate.querySelector('.setup-similar-label').textContent = heroItem.name;
    heroTemplate.querySelector('.wizard-coat').style.fill = heroItem.colorCoat;
    heroTemplate.querySelector('.wizard-eyes').style.fill = heroItem.colorEyes;
    fragment.appendChild(heroTemplate);
  };

  window.backend.load('get', window.backend.GET_DATA_URL, function (data) {
    for (var i = 0; i < HEROES_AMOUNT; i++) {
      getTemplateOfHero(data[i]);
    }

    var setupSimilarList = document.querySelector('.setup-similar-list');
    setupSimilarList.appendChild(fragment);
  });
})();
