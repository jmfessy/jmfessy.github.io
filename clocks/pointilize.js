var img;
var secPoint, minPoint, hourPoint;

function setup() {
  createCanvas(500, 500);
  secPoint = 5;
  minPoint =20;
  hourPoint = 50;
  background(255);
  i = 0;
  j = 0;
  k = 0;
}

function draw() {

var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
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
    hourColors = [oneColor, twoColor, threeColor, fourColor, fiveColor, sixColor, sevenColor, eightColor, nineColor, tenColor, elevenColor, twelveColor, oneColor, twoColor, threeColor, fourColor, fiveColor, sixColor, sevenColor, eightColor, nineColor, tenColor, elevenColor, twelveColor];

// Minute Markers
// change transparency every 60 seconds
fill(color( hourColors[hours], [(60-minutes)*3]));
noStroke();
var x = random(500);
var y = random(500);

if( i == seconds){  
}
else {
  ellipse( x,y, secPoint, secPoint);
  i = seconds;
}

if( j == minutes){  
}
else {
  ellipse( x,y, minPoint, minPoint);
  j = minutes;
}

if( k == hours){  
}
else {
  ellipse( x,y, hourPoint, hourPoint);
  k = hours;
}

}

