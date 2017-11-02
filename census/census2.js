var user_key = 'ac34b99eefc48a3f26f41ba60f1f119f76f7fe73';
//white matrix: black(0), american indian(1), asian (2), pacific islander (3), other
//var whitematrix = 'P0080011,P0080012,P0080013,P0080014,P0080015';
var whiteblack = 'P0080011';
var county =  01;
var state = 06;

// matrix goes :white (0), black 1, american indian 2, asian3 , pacific islander 4, hispanic 5 , total 6

var totmatrix = 'P0090005,P0090006,P0090007,P0090008,P0090009,P0090002,P0090001'
var countytot = 01;
var statetot = 06;

var url1= 'https://api.census.gov/data/2010/sf1?get='+whiteblack+'&for=county:'+county+'&in=state:'+state+'&key=ac34b99eefc48a3f26f41ba60f1f119f76f7fe73';
var urltot = 'https://api.census.gov/data/2010/sf1?get='+totmatrix+'&for=county:'+countytot+'&in=state:'+statetot+'&key=ac34b99eefc48a3f26f41ba60f1f119f76f7fe73';

var value = 0;
var queryResult;
var xcanvas = 11*120;
var ycanvas = 11.19*120;
var polysides = 6;
var centerx = xcanvas/2;
var centery = ycanvas/2;
var h = (Math.sqrt(3))/2;

  //types of things

  var aswh = "Asian Whites "; var asbl = "Black Asians "; var ashs = "Asian Hispanics "; var asind = "Indian Asians "; var aspi = "Asian Pacific Islander ";
  var multiracialMatrix = ["Asian Whites ", asbl, ashs, asind, aspi]
  var chosenMR = multiracialMatrix[0];

  // severity
  var mostL = "most likely";
  var leastL = "least likely";
  var medL = "on median";

  // other words that are needed
  var are = "are ";

function setup() {
  createCanvas(xcanvas, ycanvas);
  background(color('#152F48'));
  query();
  noLoop();


// might need to move this from setup
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
  text(mostL, topicLinex+((chosenMR.length)+(are.length))*linespace, topicLiney);

  fill(255);
  text("are ", topicLinex+((chosenMR.length)*linespace), topicLiney);
  text("to live in these", topicLinex+((chosenMR.length)+(are.length)+mostL.length)*linespace, topicLiney);
  text("counties", topicLinex, topicLiney+explaintxt);
  pop();
}

//map will go here


// ------------------------------FUNCTIONS SEPERATE FROM INITIAL SETUP FOR LOOKS---------------------------------


var user_key = 'ac34b99eefc48a3f26f41ba60f1f119f76f7fe73';
//white matrix: black(0), american indian(1), asian (2), pacific islander (3), other
//var whitematrix = 'P0080011,P0080012,P0080013,P0080014,P0080015';
var whiteblack = 'P0080011';
var county =  01;
var state = 06;



// Run the API call
function query(state, county, race) {
	loadJSON(url1, gotData, 'json')
}


// Request is completed
function gotData(data) {
	//TODO: Figure out how to properly return the hashmap

  // console.log(data);
  queryResult = data;

  // only look at current results:
	var currentPopulation = queryResult;
	console.log(currentPopulation);
	var whitepop = currentPopulation[1][0];
	var multi = currentPopulation[1][1];
	var totpop = currentPopulation[1][2];
	var hispanics = currentPopulation[1][3];
	console.log(whitepop);

  // labels at the tops of the circles


  // numbers in the middle

}

var smlltxtsz = 22;
var asianper = .2; hispanicper = .3; blackper = .1, indianper = .02, pacificper = .08, whiteper = .3;
var angles = [ asianper*360, hispanicper*360, blackper*360, indianper*360, pacificper*360, whiteper*360];

function draw(){
  pieChart(400, angles);

  push();
  noFill(); strokeWeight(3.25); stroke(color("#387BBF")); 
  var boxheight = 45, boxwidth = 142, xover = .785, yover = .94;
  rect(xcanvas*xover, ycanvas*yover, boxwidth, boxheight, 11);
  rect(xcanvas*xover-boxwidth-20, ycanvas*yover, boxwidth, boxheight, 11);
  rect(xcanvas*xover-(boxwidth*2)-40, ycanvas*yover, boxwidth, boxheight, 11);
  
  fill(color("#387BBF")); noStroke(); textSize(smlltxtsz); textStyle(BOLD); textAlign(CENTER,[CENTER]);
  text("Most",xcanvas*xover-(boxwidth*2)-40+(boxwidth/2), ycanvas*yover+(boxheight/2)+(3.25));
  text("Median",xcanvas*xover-boxwidth-20+(boxwidth/2), ycanvas*yover+(boxheight/2)+(3.25));
  text("Least",xcanvas*xover+(boxwidth/2), ycanvas*yover+(boxheight/2)+(3.25));
  pop();
}

// 500 should be the larger outer circle when you hover over!!!

function pieChart(diameter, data) {
  noStroke();
  var lastAngle = 0;
  var leftx = xcanvas/2; rightx = leftx*3;
  var topy = ycanvas/1.5; bottomy = topy*2.2;
  var smallcircle = 300;
  for (var i = 0; i < data.length; i++) {
    var gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(leftx/2, topy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
    fill(color('#152F48'));
    ellipse(leftx/2, topy/2, smallcircle, smallcircle);
  }
  for (var i = 0; i < data.length; i++) {
    var gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(leftx/2, bottomy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
    fill(color('#152F48'));
    ellipse(leftx/2, bottomy/2, smallcircle, smallcircle);
  }
  for (var i = 0; i < data.length; i++) {
    var gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(rightx/2, topy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
    fill(color('#152F48'));
    ellipse(rightx/2, topy/2, smallcircle, smallcircle);
  }
  for (var i = 0; i < data.length; i++) {
    var gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(rightx/2, bottomy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
    fill(color('#152F48'));
    ellipse(rightx/2, bottomy/2, smallcircle, smallcircle);
  }

  var multiracialNumber = ["203905", "100535", "109235", "43,125"];

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

function mousePressed() {

  if (value == 0) {
    value = 255;

  } else {
    value = 0;
  }
}




