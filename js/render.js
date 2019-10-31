'use strict';

(function () {
  var HEROES_AMOUNT = 4;

  var similarHeroTemplate = document.querySelector('#similar-wizard-template').content;
  var similarHeroItem = similarHeroTemplate.querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();
  var wizards = [];

  var getTemplateOfHero = function (heroItem) {
    var heroTemplate = similarHeroItem.cloneNode(true);
    heroTemplate.querySelector('.setup-similar-label').textContent = heroItem.name;
    heroTemplate.querySelector('.wizard-coat').style.fill = heroItem.colorCoat;
    heroTemplate.querySelector('.wizard-eyes').style.fill = heroItem.colorEyes;
    fragment.appendChild(heroTemplate);
  };

  var renderWizards = function (wizardsData) {
    for (var i = 0; i < HEROES_AMOUNT; i++) {
      getTemplateOfHero(wizardsData[i]);
    }

    var setupSimilarList = document.querySelector('.setup-similar-list');
    setupSimilarList.appendChild(fragment);
  };

  var updateWizards = function () {
    var sameCoatWizards = wizards.filter(function (it) {
      return it.colorCoat === window.colorize.coatColor;
    });

    console.log(sameCoatWizards);

    renderWizards(sameCoatWizards);
  };

  var onSuccessWizardsLoad = function (data) {
    wizards = data;
    updateWizards();
  };

  window.backend.load('get', window.backend.GET_DATA_URL, onSuccessWizardsLoad, window.backend.onErrorLoad);
})();
