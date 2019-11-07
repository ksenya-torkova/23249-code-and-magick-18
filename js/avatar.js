'use strict';

(function () {
  var IMAGES_FORMATS = ['gif', 'jpg', 'jpeg', 'png', 'svg', 'webp'];
  var avatarUploader = window.dragAndDrop.setupHandler.querySelector('.setup-user-avatar-upload');
  var avatarPreview = window.dragAndDrop.setupHandler.querySelector('.setup-user-pic');

  avatarUploader.addEventListener('change', function () {
    var avatar = avatarUploader.files[0];

    if (avatar) {
      var fileName = avatar.name.toLowerCase();

      var matches = IMAGES_FORMATS.some(function (it) {
        return fileName.endsWith(it);
      });

      if (matches) {
        var avatarReader = new FileReader();

        avatarReader.addEventListener('load', function () {
          avatarPreview.src = avatarReader.result;
        });

        avatarReader.readAsDataURL(avatar);
      }
    }
  });
})();
