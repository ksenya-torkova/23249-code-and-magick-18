'use strict';

(function () {
  var SET_DATA_URL = 'https://js.dump.academy/code-and-magick';
  var GET_DATA_URL = 'https://js.dump.academy/code-and-magick/data';
  var XHR_TIMEOUT = 10000;
  var REQUEST_SUCCESS_CODE = 200;
  var REQUEST_ERROR = 400;
  var USER_REQUEST_ERROR = 401;
  var DATA_REQUEST_ERROR = 404;

  var onErrorLoad = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red; width: 100%';
    node.style.position = 'fixed';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var getRequestStatus = function (request) {
    var error;

    switch (request.status) {
      case REQUEST_ERROR:
        error = 'Неверный запрос';
        break;
      case USER_REQUEST_ERROR:
        error = 'Пользователь не авторизован';
        break;
      case DATA_REQUEST_ERROR:
        error = 'Ничего не найдено';
        break;
      default:
        error = 'Cтатус ответа: ' + request.status + ' ' + request.statusText;
    }

    return error;
  };

  var request = function (method, url, onSuccess, onError, data) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === REQUEST_SUCCESS_CODE) {
        onSuccess(xhr.response);
      } else {
        onError(getRequestStatus(xhr));
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
    onErrorLoad: onErrorLoad,
    load: request,
    save: request
  };
})();
