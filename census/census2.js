// -----------------------------GLOBAL VARIABLES FOR SETUP & DATA--------------------------------

var user_key = 'ac34b99eefc48a3f26f41ba60f1f119f76f7fe73';
//white matrix: black(0), american indian(1), asian (2), pacific islander (3), other
//var whitematrix = 'P0080011,P0080012,P0080013,P0080014,P0080015';
var whiteblack = 'P0080011';
var county =  01;
var state = 06;
// matrix goes :white (0), black 1, american indian 2, asian3 , pacific islander 4, hispanic 5 , total 6
var totmatrix = 'P0090005,P0090006,P0090007,P0090008,P0090009,P0090002,P0090001';
var countytot = 01;
var statetot = 06;
var url1= 'https://api.census.gov/data/2010/sf1?get='+whiteblack+'&for=county:'+county+'&in=state:'+state+'&key=ac34b99eefc48a3f26f41ba60f1f119f76f7fe73';
var urltot = 'https://api.census.gov/data/2010/sf1?get='+totmatrix+'&for=county:'+countytot+'&in=state:'+statetot+'&key=ac34b99eefc48a3f26f41ba60f1f119f76f7fe73';

var queryResult;

var xcanvas = 11*120; var ycanvas = 11.4*120; var centerx = xcanvas/2; var centery = ycanvas/2; var h = (Math.sqrt(3))/2;var value = 0;

//status!
  var status=0;
  var mr = 0;
  var cs = 0;

// ------------------------------SETUP---------------------------------
 

function setup() {
  createCanvas(xcanvas, ycanvas);
  background(color('#152F48'));
  query();
  //noLoop();

}

// ------------------------------FUNCTIONS for DATA---------------------------------

var user_key = 'ac34b99eefc48a3f26f41ba60f1f119f76f7fe73';
//white matrix: black(0), american indian(1), asian (2), pacific islander (3), other
//var whitematrix = 'P0080011,P0080012,P0080013,P0080014,P0080015';
var whiteblack = 'P0080011';
var county =  01;
var state = 06;


function query(state, county, race) {
	loadJSON(url1, gotData, 'json')
}


function gotData(data) {
  queryResult = data;
	var currentPopulation = queryResult;
	console.log(currentPopulation);
	var whitepop = currentPopulation[1][0];
	var multi = currentPopulation[1][1];
	var totpop = currentPopulation[1][2];
	var hispanics = currentPopulation[1][3];
	console.log(whitepop);

  // data! for circles! need to make global variables
  var asianper = .2; hispanicper = .3; blackper = .1, indianper = .02, pacificper = .08, whiteper = .3;
  var angles = [ asianper*360, hispanicper*360, blackper*360, indianper*360, pacificper*360, whiteper*360];
  var multiracialNumber = ["203905", "100535", "109235", "43,125"];
}

// ------------------------------GLOBAL VARIABLES FOR LOOKS---------------------------------

  var asianper = .2; hispanicper = .3; blackper = .1, indianper = .02, pacificper = .08, whiteper = .3;
  var angles = [ asianper*360, hispanicper*360, blackper*360, indianper*360, pacificper*360, whiteper*360];
  var multiracialNumber = ["203905", "100535", "109235", "43,125"];


var smlltxtsz = 22;

var aswh = "Asian Whites "; var asbl = "Black Asians "; var ashs = "Asian Hispanics "; var asind = "Indian Asians "; var aspi = "Asian Pacific Islander ";
var multiracialMatrix = [aswh, asbl, ashs, asind, aspi, "White Blacks ", "White Hispanics ", "White Indians ", "White Pacific Islanders ", "Black Hispanics ", "Black Indians ", "Black Pacific Islanders ", "Hispanic Indians ", "Hispanic Pacific Islanders ","Indian Pacific Islanders "]
var mostL = " most likely"; var leastL = " least likely"; var medL = " on average likely"; var are = "are";
var chooseSeverity = [mostL, medL, leastL]
  // other words that are needed


// colors
var asiancolor = "#E0231E", hispaniccolor = "#E07A22", blackcolor ="#E0A12E", pacificcolor = "#E0C634", indiancolor = "#2D62BA", whitecolor = "#387BBF";
var gray = [asiancolor, hispaniccolor, blackcolor, pacificcolor, indiancolor, whitecolor];
var highasian = [];

//for ellipses
var esize = 20, shifted = esize*1.55; var eycanvas = 0.982;


// ------------------------------SETUP FOR LOOKS---------------------------------

function draw(){
  background(color('#152F48'));


  push();
  noFill(); strokeWeight(3.25); stroke(color("#387BBF")); 
  var boxheight = 45, boxwidth = 142, xover = .785, yover = .93;
  rect(xcanvas*xover, ycanvas*yover, boxwidth, boxheight, 11);
  rect(xcanvas*xover-boxwidth-20, ycanvas*yover, boxwidth, boxheight, 11);
  rect(xcanvas*xover-(boxwidth*2)-40, ycanvas*yover, boxwidth, boxheight, 11);
  
  fill(color("#387BBF")); noStroke(); textSize(smlltxtsz); textStyle(BOLD); textAlign(CENTER,[CENTER]);
  text("Most",xcanvas*xover-(boxwidth*2)-40+(boxwidth/2), ycanvas*yover+(boxheight/2)+(3.25));
  text("Median",xcanvas*xover-boxwidth-20+(boxwidth/2), ycanvas*yover+(boxheight/2)+(3.25));
  text("Least",xcanvas*xover+(boxwidth/2), ycanvas*yover+(boxheight/2)+(3.25));

  // change the multiracial pairings
  noFill(); strokeWeight(3.25); stroke(color("#387BBF"));
  for (var i = 0; i < 15; i++) {
    ellipse((xcanvas*xover+boxwidth+3.5-esize)-(shifted*i),ycanvas*eycanvas,esize,esize);
  }
  fill(color("#387BBF")); strokeWeight(3.25); stroke(color("#387BBF"));
  ellipse((xcanvas*xover+boxwidth+3.5-esize)-(shifted*mr),ycanvas*eycanvas,esize,esize);
  pop();

  // State Variables
  var chosenMR = multiracialMatrix[mr];

  // Top Title Page
  textAlign(LEFT);
  var explaintxt = 37;
  var topicLiney = 97;
  var topicLinex = xcanvas/9;

  push();
  textStyle(BOLD);
  textSize(explaintxt);
  var linespace = 19;
  fill(color('#FEA034'));
  text(chosenMR, topicLinex, topicLiney);
  text(chooseSeverity[cs], topicLinex+((chosenMR.length)+(are.length))*linespace, topicLiney);

  fill(255);
  text("are ", topicLinex+((chosenMR.length)*linespace), topicLiney);
  text("to live in these", topicLinex+((chosenMR.length)+(are.length)+(chooseSeverity[cs].length)-1)*linespace, topicLiney);
  text("counties", topicLinex, topicLiney+explaintxt);
  pop();

  // charts
  var diameter = 400;

  noStroke();
  var lastAngle = 0;
  var leftx = xcanvas/2; rightx = leftx*3;
  var topy = ycanvas/1.5; bottomy = topy*2.2;
  var smallcircle = 300;
  for (var i = 0; i < angles.length; i++) {
    fill(color(gray[i]));
    arc(leftx/2, topy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
    fill(color('#152F48'));
    ellipse(leftx/2, topy/2, smallcircle, smallcircle);
  }
  for (var i = 0; i < angles.length; i++) {
    fill(color(gray[i]));
    arc(leftx/2, bottomy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
    fill(color('#152F48'));
    ellipse(leftx/2, bottomy/2, smallcircle, smallcircle);
  }
  for (var i = 0; i < angles.length; i++) {
    fill(color(gray[i]));
    arc(rightx/2, topy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
    fill(color('#152F48'));
    ellipse(rightx/2, topy/2, smallcircle, smallcircle);
  }
  for (var i = 0; i < angles.length; i++) {
    fill(color(gray[i]));
    arc(rightx/2, bottomy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
    fill(color('#152F48'));
    ellipse(rightx/2, bottomy/2, smallcircle, smallcircle);
  }


  push();
  var leftx = xcanvas/4; rightx = leftx*3;
  var topy = ycanvas/3; bottomy = topy*2.2;
  textStyle(BOLD); fill(255);
  textAlign(CENTER);
  var txtsize = 80; var smlltxtsz = 22;
  var yoffset = 15; var racoffset = 30; var boffset = racoffset+smlltxtsz+10; 
  // top left
  textSize(txtsize); text("2%", leftx,topy-yoffset);
  textSize(smlltxtsz); text(multiracialMatrix[0], leftx,topy+racoffset); text(multiracialNumber[0],leftx,topy+boffset); 
  // top right
  textSize(txtsize); text("2%", rightx,topy-yoffset);
  textSize(smlltxtsz); text(multiracialMatrix[0], rightx,topy+racoffset); text(multiracialNumber[0],rightx,topy+boffset); 
  // bottom right
  textSize(txtsize); text("2%", rightx,bottomy-yoffset);
  textSize(smlltxtsz); text(multiracialMatrix[0], rightx,bottomy+racoffset); text(multiracialNumber[0],rightx,bottomy+boffset); 
  // bottom left
  textSize(txtsize); text("2%", leftx,bottomy-yoffset);
  textSize(smlltxtsz); text(multiracialMatrix[0], leftx,bottomy+racoffset); text(multiracialNumber[0],leftx,bottomy+boffset); 
  pop();

  push();
  var leftx = xcanvas/4; rightx = leftx*3;
  var topy = ycanvas/3; bottomy = topy*2.2; var yoffset = 25;
  textSize(30), textAlign(CENTER); textStyle(BOLD); fill(color("#387BBF"));
  text("County 1"+" State", leftx, topy-(diameter/2)-yoffset);
  text("County 2"+" State", leftx, bottomy-(diameter/2)-yoffset);
  text("County 3"+" State", rightx, topy-(diameter/2)-yoffset);
  text("County 4"+" State", rightx, bottomy-(diameter/2)-yoffset);
  pop();

}

// 500 should be the larger outer circle when you hover over!!!


// ------------------------------FUNCTIONS for INTERACTION---------------------------------


function mousePressed() {

  var boxheight = 45, boxwidth = 142, xover = .785, yover = .93;
  if (mouseX > xcanvas*xover && mouseX < xcanvas*xover+boxwidth && mouseY > ycanvas*yover && mouseY < (ycanvas*yover)+boxheight) {
    status = 2;
    console.log("State is 2, least likely!")
    cs =2; 
  } 

  if (mouseX > xcanvas*xover-boxwidth-20 && mouseX < xcanvas*xover-boxwidth-20+boxwidth && mouseY > ycanvas*yover && mouseY < (ycanvas*yover)+boxheight){
    status = 1;
    console.log("State is 1, median!")
    cs = 1;
  }
  else if(mouseX > xcanvas*xover-(boxwidth*2)-40 && mouseX < xcanvas*xover-(boxwidth*2)-40+boxwidth && mouseY > ycanvas*yover && mouseY < (ycanvas*yover)+boxheight){
    status = 0;
    console.log("State is 0, most")
    cs = 0;
  }

  //change the MultiRacial Paring 
  var ebeg = xcanvas*xover+boxwidth+3.5-esize; 
  for (var i = 0; i <15; i++) {
    if( mouseY > ycanvas*eycanvas && mouseY < ycanvas*eycanvas+esize && mouseX > (xcanvas*xover+boxwidth+3.5-esize)-(shifted*i)-esize && mouseX < (xcanvas*xover+boxwidth+3.5-esize)-(shifted*i)){

    fill(color("#387BBF")); strokeWeight(3.25); stroke(color("#387BBF"));
    ellipse((xcanvas*xover+boxwidth+3.5-esize)-(shifted*i),ycanvas*eycanvas,esize,esize);
    mr = i;
    console.log(mr)
  }
  }

}

/*
function pieChart(diameter, data) {
  noStroke();
  var lastAngle = 0;
  var leftx = xcanvas/2; rightx = leftx*3;
  var topy = ycanvas/1.5; bottomy = topy*2.2;
  var smallcircle = 300;
  for (var i = 0; i < data.length; i++) {
    fill(color(gray[i]));
    arc(leftx/2, topy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
    fill(color('#152F48'));
    ellipse(leftx/2, topy/2, smallcircle, smallcircle);
  }
  for (var i = 0; i < data.length; i++) {
    fill(color(gray[i]));
    arc(leftx/2, bottomy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
    fill(color('#152F48'));
    ellipse(leftx/2, bottomy/2, smallcircle, smallcircle);
  }
  for (var i = 0; i < data.length; i++) {
    fill(color(gray[i]));
    arc(rightx/2, topy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
    fill(color('#152F48'));
    ellipse(rightx/2, topy/2, smallcircle, smallcircle);
  }
  for (var i = 0; i < data.length; i++) {
    fill(color(gray[i]));
    arc(rightx/2, bottomy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
    fill(color('#152F48'));
    ellipse(rightx/2, bottomy/2, smallcircle, smallcircle);
  }


  push();
  var leftx = xcanvas/4; rightx = leftx*3;
  var topy = ycanvas/3; bottomy = topy*2.2;
  textStyle(BOLD); fill(255);
  textAlign(CENTER);
  var txtsize = 80; var smlltxtsz = 22;
  var yoffset = 15; var racoffset = 30; var boffset = racoffset+smlltxtsz+10; 
  // top left
  textSize(txtsize); text("2%", leftx,topy-yoffset);
  textSize(smlltxtsz); text(multiracialMatrix[0], leftx,topy+racoffset); text(multiracialNumber[0],leftx,topy+boffset); 
  // top right
  textSize(txtsize); text("2%", rightx,topy-yoffset);
  textSize(smlltxtsz); text(multiracialMatrix[0], rightx,topy+racoffset); text(multiracialNumber[0],rightx,topy+boffset); 
  // bottom right
  textSize(txtsize); text("2%", rightx,bottomy-yoffset);
  textSize(smlltxtsz); text(multiracialMatrix[0], rightx,bottomy+racoffset); text(multiracialNumber[0],rightx,bottomy+boffset); 
  // bottom left
  textSize(txtsize); text("2%", leftx,bottomy-yoffset);
  textSize(smlltxtsz); text(multiracialMatrix[0], leftx,bottomy+racoffset); text(multiracialNumber[0],leftx,bottomy+boffset); 
  pop();

  push();
  var leftx = xcanvas/4; rightx = leftx*3;
  var topy = ycanvas/3; bottomy = topy*2.2; var yoffset = 25;
  textSize(30), textAlign(CENTER); textStyle(BOLD); fill(color("#387BBF"));
  text("County 1"+" State", leftx, topy-(diameter/2)-yoffset);
  text("County 2"+" State", leftx, bottomy-(diameter/2)-yoffset);
  text("County 3"+" State", rightx, topy-(diameter/2)-yoffset);
  text("County 4"+" State", rightx, bottomy-(diameter/2)-yoffset);
  pop();
}
*/




