'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var getRandomInteger = function (min, max) {
    var randomNumber = min + Math.random() * (max + 1 - min);
    return Math.floor(randomNumber);
  };

  window.util = {
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,
    getRandomInteger: getRandomInteger
  };
})();


var createBtns = function (text, clickHandler) {
  var button = document.createElement('button');

  button.textContent = text;
  button.addEventListener('click', clickHandler);

  return button;
};

var logButton = createBtns('log', function () {
  console.log('click');
});

document.body.insertBefore(logButton, document.body.children[1]);

var alertBtn = createBtns ('alert', function () {
  alert('click');
});

document.body.insertBefore(alertBtn, document.body.children[1]);

var loader = document.createElement('script');
loader.src = 'https://js.dump.academy/code-and-magick/data?callback=__jsonpCallback';
document.body.append(loader);

var renderItem = function (item) {
  var dataDiv = document.createElement('div');
  dataDiv.textContent = item.name;
  document.body.appendChild(dataDiv);
};

window.__jsonpCallback = function (data) {
  for (var i = 0; i < data.length; i++) {
    renderItem(data[i]);
  }
};

window.load = function (url, onSuccess, onError) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      onSuccess(xhr.response);
    } else {
      onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
    }
  });

  xhr.addEventListener('error', function () {
    onError('Произошла ошибка соединения');
  });

  xhr.addEventListener('timeout', function () {
    onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  });

  xhr.timeout = 10000;
  xhr.open('get', url);
  xhr.send();
};

var onError = function (message) {
  console.error(message);
};

var onSuccess = function (data) {
  console.log(data);
};

window.load('https://up.htmlacademy.ru/assets/javascript/demo/8-xhr/data.json', onSuccess, onError);
