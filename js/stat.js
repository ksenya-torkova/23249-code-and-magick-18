'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var CLOUD_TEXT = 'Ура вы победили! Список результатов:';
var CLOUD_TEXT_MAX_WIDTH = 200;
var CLOUD_TEXT_LINE_HEIGHT = 20;
var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_X = CLOUD_X + BAR_WIDTH;
var BAR_MAX_Y = 80;
var TEXT_Y = 25;
var TEXT_GAP = 20;

var drawText = function wrapText(ctx, text, marginLeft, marginTop, maxWidth, lineHeight) {
  ctx.font = ' PT Mono, 16px';
  ctx.fillStyle = 'Blue';
  ctx.textBaseline = 'top';

  var words = text.split(' ');
  var countWords = words.length;
  var line = '';

  for (var j = 0; j < countWords; j++) {
    var testLine = line + words[j] + ' ';
    var testWidth = ctx.measureText(testLine).width;
    if (testWidth > maxWidth) {
      ctx.fillText(line, marginLeft, marginTop);
      line = words[j] + ' ';
      marginTop += lineHeight;
    } else {
      line = testLine;
    }
  }

  ctx.fillText(line, marginLeft, marginTop);
};

var drawCloud = function (ctx, cloudX, cloudY, color) {
  ctx.fillStyle = color;
  ctx.fillRect(cloudX, cloudY, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getGradientColor = function (ctx) {
  var gradientColor = ctx.createRadialGradient(300, 135, 0, 300, 135, 200);
  gradientColor.addColorStop(0, 'White');
  gradientColor.addColorStop(1, 'SkyBlue');
  return gradientColor;
};

var getMaxOfArray = function (numArray) {
  return Math.max.apply(null, numArray);
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxOfArray(times).toFixed(0);

  drawCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  drawCloud(ctx, CLOUD_X, CLOUD_Y, getGradientColor(ctx));
  drawText(ctx, CLOUD_TEXT, BAR_X, TEXT_Y, CLOUD_TEXT_MAX_WIDTH, CLOUD_TEXT_LINE_HEIGHT);

  ctx.fillStyle = 'Black';

  for (var i = 0; i < names.length; i++) {
    var barHeight = ((BAR_MAX_HEIGHT * times[i]) / maxTime).toFixed(0);
    var barMaxY = BAR_MAX_HEIGHT - barHeight;

    ctx.fillStyle = 'Black';
    ctx.fillText(names[i], BAR_X + i * (BAR_WIDTH + BAR_GAP), BAR_MAX_HEIGHT + TEXT_GAP + BAR_MAX_Y);

    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsla(240, 100%, 50%, ' + Math.random().toFixed(1) + ')';
    ctx.fillRect(BAR_X + i * (BAR_WIDTH + BAR_GAP), BAR_MAX_Y + barMaxY, BAR_WIDTH, barHeight);
  }
};
