var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10;
var d = 0;
  var i =0;


function setup() {
  createCanvas(500, 500);
  background (255);
  frameRate(1);

 
}

function draw() {

    var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds(),
    oneColor = color('#FF0000'),
    oner = 255, oneg = 127, oneb = 0,
    twoColor = color('#FF7F00'),
    twor = 255, twog = 255, twob = 0,
    threeColor = color('#FFFF00'),
    threer = 127, threeg = 255, threeb = 0,
    fourColor = color('#7FFF00'),
    fourr = 0, fourg = 255, fourb = 0,
    fiveColor = color('#00FF00'),
    fiver = 0, fiveg = 255, fiveb = 127,
    sixColor = color('#00FF7F'),
    sixr = 0, sixg = 255, sixb = 255,
    sevenColor = color('#DDFFFF'),
    sevenr = 0, seveng =127, sevenb =255,
    eightColor =color('#007FFF'),
    eightr = 0, eightg = 0, eightb = 255,
    nineColor = color('#0000FF'),
    niner = 127, nineg = 0, nineb = 255,
    tenColor = color('#7F00FF'),
    tenr = 255, teng = 0, tenb = 255,
    elevenColor = color('#FF00FF'),
    elevenr = 255, eleveng = 0, elevenb = 127,
    twelveColor = color('#FF007F'),
    twelver = 255, twelveg = 0, twelveb = 0,
    red = [255, 255, 127, 0, 0, 0, 0, 0, 127, 255, 255, 255,255, 255, 127, 0, 0, 0, 0, 0, 127, 255, 255, 255]
    green = [127, 255, 255, 255, 255,255,127,0,0,0,0,0,127, 255, 255, 255, 255,255,127,0,0,0,0,0]
    blue = [0,0,0,0,127,255,255,255,255,255,127,0,0,0,0,0,127,255,255,255,255,255,127,0]
    hourColors = [oneColor, twoColor, threeColor, fourColor, fiveColor, sixColor, sevenColor, eightColor, nineColor, tenColor, elevenColor, twelveColor];

    var md = 30;
    var hd = 180;


if ( i  == hours){
  d = md;
}
  else{
    d = hd
  
    i =  hours;

  }

    fill ( red[hours], green[hours], blue[hours], [(60-minutes)*3] );
    ellipse (x, y, d, d);

    //bouncing horizontally
   x = x + xspeed;
    
     if (x > windowWidth || x < 0)  {
      xspeed = -xspeed;
    }

    //bouncing veritcally
    y = y + yspeed;

    if (y > windowHeight || y < 0) {
      yspeed = -yspeed;
    }
}


