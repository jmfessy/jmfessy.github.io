function setup() {
  createCanvas(500, 500);
  textAlign(CENTER, CENTER);
  strokeCap(SQUARE);
}

function draw() {
  translate(width / 2.0, height / 2.0);

  var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds(),
    i,
    v,
    t;
    var angles = [ minutes, hours];

  var k = 0;
  background(0);

push()
  noStroke();
  fill(255);
  arc(0, 0, 420*minutes/60, 420*minutes/60, 0, PI*2*hours/24*(ms/1000), PIE);

  //fill(150);
  //arc(0, 0, 150, 150, 0, PI*2*minutes/60, PIE);
  pop();

  // Hour hand
  /*stroke(0);
  strokeWeight(4);
  t = (hours + minutes / 60 + seconds / 3600) * TAU / 12 - HALF_PI;
  v = p5.Vector.fromAngle(t);
  v.mult(127);
  line(0, 0, v.x, v.y);
 

  // Minute hand
  strokeWeight(2);
  stroke(50)
  t = (minutes + seconds / 60 + ms / 1000 / 60) * TAU / 60 - HALF_PI;
  v = p5.Vector.fromAngle(t);
  v.mult(205);
  line(0, 0, v.x, v.y);


  // Second hand
  stroke(255);
  strokeWeight(10);
  t = (ms /1000) * 2*PI;
  v = p5.Vector.fromAngle(t);
  v.mult(210);
  line(0, 0, v.x, v.y);
 */



  resetMatrix();
}