var xpos1;
var xpos2;
var xpos3;
var xpos4;
var thin = 8;
var thick = 36;
var m = 0;
var k = 0;
var o = 0;
var h;

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(color('#126EAA'))

    fill(color('#F57450'));
  rect(0, 0, 175, 175);

  fill(color('#31D3E0'));
  rect(0, 325, 175, 175);

  fill(color('#7FE9F1'));
  rect(325, 0, 175, 175);

  fill(color('#F5749E'));
  rect(325, 325, 175, 175);

  fill(color('#2C407E'));
  ellipse(250,250, 25,25)

  var wside = 25;
  fill(color('#199BF0'));
  rect(0,175-wside, 175, wside);
   fill(color('#199BF0'));
  rect(0,325, 175, 20);

  fill(color('#199BF0'));
  rect(325,175-wside, 175, wside);
   fill(color('#199BF0'));
  rect(325,325, 175, wside);

  fill(color('#199BF0'));
  rect(175-wside,0, wside, 175);
  fill(color('#199BF0'));
  rect(325,0, wside, 175);

  fill(color('#199BF0'));
  rect(175-wside,325, wside, 175+wside);
  fill(color('#199BF0'));
  rect(325,325, wside, 175+wside);

  var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds();


if(k != minutes){
  m = 0;
  k = minutes;
  console.log(k)
}
/*  
if (m <= minutes){
  m = m +1;
  console.log(m);
} 
*/
//minutes correspond to the number of cars driven within the minute
 if( seconds <= minutes){
      xpos2 = (width)-((ms/1000)*width);
      fill(204);
      rect(xpos2, 260, 100, 50);
      //console.log(o)

 }
// seconds are the white car
  xpos1 = (ms/1000)*width;
  fill(204);
  rect(xpos1, 200, 100, 50);

//hours

if(hours >= 13){
  h = hours -12;
}

if( h>=0){
  rect(200, 100, 40,70);
}
if( h>=1){
  rect(200, 10, 40,70);
}
if( h>=2){
  rect(270, 330, 40,70);
}
if( h>=3){
  rect(270, 415, 40,70);
}
if( h>=4){
  rect(250, 330, 10,40);
}
if( h>=5){
  rect(250, 415, 10,40);
}
if( h>=6){
  rect(245, 130, 10,40);
}
if( h>=7){
  rect(245, 80, 10,40);
}
if( h>=8){
  rect(245, 30, 10,40);
}
if( h>=9){
  ellipse(160, 160, 10,10);
}
if( h>=10){
  ellipse(145, 162, 10,10);
}
if( h>=11){
  ellipse(340, 335, 10,10);
}
if( h>=12){
  ellipse(338, 350, 10,10);
}


}

