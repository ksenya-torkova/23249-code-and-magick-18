'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_X = CLOUD_X + BAR_WIDTH;
var BAR_MAX_Y = 90;
var TEXT_Y = 25;
var MAIN_TEXT_GAP = 20;
var BAR_NAMES_GAP = 15;
var BAR_TIMES_GAP = 25;

var drawRect = function (ctx, x, y, width, height, color) {
  var rectColor = color || 'black';
  ctx.fillStyle = rectColor;
  ctx.fillRect(x, y, width, height);
};

var drawText = function (ctx, text, x, y, color) {
  var textColor = color || 'black';
  ctx.fillStyle = textColor;
  ctx.font = 'PT Mono, 16px';
  ctx.textBaseline = 'top';
  ctx.fillText(text, x, y);
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

  drawRect(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  drawRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, getGradientColor(ctx));

  drawText(ctx, 'Ура вы победили!', BAR_X, TEXT_Y, 'red');
  drawText(ctx, 'Список результатов:', BAR_X, TEXT_Y + MAIN_TEXT_GAP, 'blue');

  for (var i = 0; i < names.length; i++) {
    var barHeight = ((BAR_MAX_HEIGHT * times[i]) / maxTime).toFixed(0);
    var barMaxY = BAR_MAX_HEIGHT - barHeight;

    drawText(ctx, names[i], BAR_X + i * (BAR_WIDTH + BAR_GAP), BAR_MAX_HEIGHT + BAR_NAMES_GAP + BAR_MAX_Y);
    drawText(ctx, times[i].toFixed(0), BAR_X + i * (BAR_WIDTH + BAR_GAP), BAR_MAX_Y + barMaxY - BAR_TIMES_GAP);

    var barColor = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsla(240, 100%, 50%, ' + (Math.floor(Math.random().toFixed(1) * 10)) / 10 + ')';
    drawRect(ctx, BAR_X + i * (BAR_WIDTH + BAR_GAP), BAR_MAX_Y + barMaxY, BAR_WIDTH, barHeight, barColor);
  }
};
