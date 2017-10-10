// (c) 2016-17 Fathom Information Design BY-NC-SA
// https://creativecommons.org/licenses/by-nc-sa/4.0


function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(255);
  textAlign(CENTER);

  push();
  translate(width/2, height/2);
  noFill();
  stroke(0);

  push();
  strokeWeight(1);

  var hourSize = 150;
  var hourAngle = map(hour() % 12,  0, 12,  0, TAU);
  rotate(hourAngle);
  //ellipse(0,0,hourSize+150);
  fill(255,194,0,75);
  noStroke();
  triangle(0, -hourSize,  hourSize, 0,  -hourSize, 0);
  //dark dot
  fill(0);
  //ellipse(0, -hourSize, 25, 25);
  pop();
  
  push();
  strokeWeight(1);
  var minuteSize = 120;
  var minuteAngle = map(minute(),  0, 60,  0, TAU);
  rotate(minuteAngle);
  //ellipse(0,0,hourSize+90);
  fill(0,82,255,75);  
  noStroke();
  triangle(0, -minuteSize,  minuteSize, 0,  -minuteSize, 0);
  fill(0);
  //ellipse(0, -minuteSize, 15, 15);
  pop();

  push();
  strokeWeight(1);
  var secondSize = 90;
  var secondAngle = map(second(),  0, 60,  0, TAU);
  rotate(secondAngle);
  //ellipse(0,0,hourSize+31);
  fill(255,7,0,75);
  noStroke();
  triangle(0, -secondSize,  secondSize, 0,  -secondSize, 0);
  //ellipse(width/2, height/2, secondSize, secondSize);
  
  fill(0);
  //ellipse(0, -secondSize, 7, 7);
  pop();

  fill(0);
  noStroke();
  //ellipse(0, 0, 5, 5);
  pop();

  noStroke();
  fill(0);
  // adds 1 to y so that it centers a little better
  //text(hoursMinutesSeconds(), width/2, height - 20);
}


// return hours that read 1 through 12 rather than 0 through 23
function twelveHour() {
  var h = hour() % 12;
  if (h === 0) {
    h = 12;
  }
  return h;
}


// format hours and minutes
function hoursMinutes() {
  return nf(twelveHour(), 2) + ':' + nf(minute(), 2);
}


// format hours, minutes, and seconds
function hoursMinutesSeconds() {
  return hoursMinutes() + ':' + nf(second(), 2);
}
