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

  var appendWizards = function (wizardsData) {
    for (var i = 0; i < HEROES_AMOUNT; i++) {
      getTemplateOfHero(wizardsData[i]);
    }

    var setupSimilarList = document.querySelector('.setup-similar-list');
    var setupSimilarItem = setupSimilarList.querySelector('.setup-similar-item');

    if (setupSimilarItem) {
      setupSimilarList.innerHTML = '';
    }

    setupSimilarList.appendChild(fragment);
  };

  window.render = {
    appendWizards: appendWizards
  };
})();
