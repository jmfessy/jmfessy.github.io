var min

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER, CENTER);
  strokeCap(SQUARE);
  textFont('Futura, Avenir, Helvetica, Georgia, Sans-Serif');
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

  background(0);

  // Minute Markers
  fill(255);
  strokeWeight(1);


  for (i = 0; i < minutes; i++) {
    v = p5.Vector.fromAngle((i + 1) / 60.0 * TAU - HALF_PI);
    v.mult(210);
    if (i % 5 == 4) {
      ellipse(v.x, v.y, 7, 7);
    } else {
      ellipse(v.x, v.y, 0, 0);
    }
  }

  // Numbers
  textSize(12);
  fill(255);
  noStroke()
  if(hours >= 13){
    hours = hours - 12;
  }

  for (i = 0; i < hours; i++) {
    v = p5.Vector.fromAngle((i + 1) / 12.0 * TAU - HALF_PI);
    v.mult(180);
    text(i + 1, v.x, v.y);
  }


  // Second hand
  stroke(255);
  strokeWeight(10);
  t = (seconds + ms / 1000) * TAU / 60 - HALF_PI;
  v = p5.Vector.fromAngle(t);
  v.mult(210);
  line(0, 0, v.x, v.y);

  resetMatrix();
}


/*var j, k, i;
function setup() {
  createCanvas(500, 500);
  
}

function draw() {
  var date = new Date(), hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds(), ms = date.getMilliseconds();
  background(0);
  var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  fill(255)
  for (var i = 1; i < 26; i++) {
    k = 130;
    if (10 > i > 5){
      j = i - 5;
      k = 130+60;
      print("first")
    }
    if (15>i>10) {
      j = i - 10;
      k = 130+60+60;
    }
    if (20 >i >15) {
      j = i - 15;
      k = 130 + 60 +60+60;
    }
    if (25>i>20) {
      j = i - 20;
      k = 130 + 60 +60+60+60;
    }
    if (i==26) {
      j = 3
      k = 130 + 60 +60+60+60+60;
    }

    text(nf(abc[i],[1],[0]),70+(j*60),k);
  }

text(nf(abc[0],[1],[0]),130,130);


  if (hours > 12){
    var h = hours-12
  }

  if (h == 1 | h == 3) {
    fill(255)
    text('a',50,50)
  }

  fill(255)
    text('b',20,20)
  



}
*/

