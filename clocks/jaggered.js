var num = 5000;
var range = 20;

var ax = [];
var ay = [];


function setup() {
  createCanvas(500, 500);
  for ( var i = 0; i < num; i++ ) {
    ax[i] = width / 2;
    ay[i] = height / 2;
  }
  frameRate(1);
}

function draw() {
  background(51);

  var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds(),
    i,
    v,
    t;
    oneColor = color('#FF0000'),
    twoColor = color('#FF7F00'),
    threeColor = color('#FFFF00'),
    fourColor = color('#7FFF00'),
    fiveColor = color('#00FF00'),
    sixColor = color('#00FF7F'),
    sevenColor = color('#DDFFFF'),
    eightColor =color('#007FFF'),
    nineColor = color('#0000FF'),
    tenColor = color('#7F00FF'),
    elevenColor = color('#FF00FF'),
    twelveColor = color('#FF007F'),
    hourColors = [oneColor, twoColor, threeColor, fourColor, fiveColor, sixColor, sevenColor, eightColor, nineColor, tenColor, elevenColor, twelveColor,oneColor, twoColor, threeColor, fourColor, fiveColor, sixColor, sevenColor, eightColor, nineColor, tenColor, elevenColor, twelveColor];

  // Shift all elements 1 place to the left
  for ( var i = 1; i < num; i++ ) {
    ax[i - 1] = ax[i];
    ay[i - 1] = ay[i];
  }

  // Put a new value at the end of the array
  ax[num - 1] += random(-range, range);
  ay[num - 1] += random(-range, range);

  // Constrain all points to the screen
  ax[num - 1] = constrain(ax[num - 1], 0, width);
  ay[num - 1] = constrain(ay[num - 1], 0, height);

  // Draw a line connecting the points
  var val = hourColors[hours];
  stroke(hourColors[hours], [(60-minutes)*3]);

  for ( var j = 1; j < num; j++ ) {
    var val = j / num * 204.0 + 51;
    line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
  }
}