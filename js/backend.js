'use strict';

(function () {
  var SET_DATA_URL = 'https://js.dump.academy/code-and-magick';
  var GET_DATA_URL = 'https://js.dump.academy/code-and-magick/data';
  var XHR_TIMEOUT = 10000;

  var STATUSES = {
    200: 'данные успешно получены',
    300: '',
    400: '',
    404: '',
    500: ''
  };

  var load = function (method, url, onSuccess, data, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = XHR_TIMEOUT;

    xhr.open(method, url);

    if (data) {
      xhr.send(data);
    } else {
      xhr.send();
    }
  };

  window.backend = {
    SET_DATA_URL: SET_DATA_URL,
    GET_DATA_URL: GET_DATA_URL,
    load: load
  };
})();
