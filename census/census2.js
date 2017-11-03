// -----------------------------GLOBAL VARIABLES FOR SETUP & DATA--------------------------------

var user_key = 'ac34b99eefc48a3f26f41ba60f1f119f76f7fe73';
var url = 'https://api.census.gov/data/2010/sf1?key=ac34b99eefc48a3f26f41ba60f1f119f76f7fe73&for=county%3A%2A&get=P0030003%2CP0030002%2CP0030004%2CP0030005%2CP0030006%2CP0030007%2CP0030001%2CP0080011%2CP0080012%2CP0080013%2CP0080014%2CP0080016%2CP0080017%2CP0080018%2CP0080020%2CP0080021%2CP0080023%2CP0080015%2CP0080019%2CP0080024%2CP0080026%2CP0080022';
//var url1= 'https://api.census.gov/data/2010/sf1?get='+whiteblack+'&for=county:'+county+'&in=state:'+state+'&key=ac34b99eefc48a3f26f41ba60f1f119f76f7fe73';
var queryResult;

var xcanvas = 11*120; var ycanvas = 11.4*120; var centerx = xcanvas/2; var centery = ycanvas/2; var h = (Math.sqrt(3))/2;var value = 0;

//status! indexes
  var mr = 0;
  var cs = 0;
  var mr_most_per = 0; var mr_med_per = 0, mr_least_per = 0;

// ------------------------------SETUP---------------------------------
 

function setup() {
  createCanvas(xcanvas, ycanvas);
  background(color('#152F48'));
  query();
  //noLoop();

}

// ------------------------------FUNCTIONS for DATA---------------------------------

var user_key = 'ac34b99eefc48a3f26f41ba60f1f119f76f7fe73';

function query(state, county, race) {
	loadJSON(url, gotData, 'json')
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
  //var angles = [ asianper*360, hispanicper*360, blackper*360, indianper*360, pacificper*360, whiteper*360];
  var multiracialNumber = ["203905", "100535", "109235", "43,125"];
  var multiper = ['4%', '2%', '4%', '1%'];

}

// ------------------------------GLOBAL VARIABLES FOR LOOKS---------------------------------

  //var asianper = .2; hispanicper = .3; blackper = .1, indianper = .02, pacificper = .08, whiteper = .3;
  raw_races = [.2,.3,.1,.02,.08,.3, .2,.3,.1,.02,.08,.3, .2,.3,.1,.02,.08,.3, .2,.3,.1,.02,.08,.3, .21,.3,.1,.01,.08,.3, .2,.3,.1,.02,.08,.3, .2,.3,.1,.02,.08,.3, .2,.3,.1,.02,.08,.3, .22,.3,.1,.01,.07,.3, .22,.28,.1,.02,.08,.3, .22,.28,.1,.02,.08,.3, .22,.28,.1,.02,.08,.3]
  //var race_raw_per = [asianper*100, hispanicper*100, blackper*100, indianper*100, pacificper*100, whiteper*100]
  var race_raw_per = []
  var angles = [];
  var alone_race_per = [];
  for (var i = 0; i <=raw_races.length-1; i++) {
    angles.push(raw_races[i]*360)
    race_raw_per.push(raw_races[i]*100)
  }
  console.log(race_raw_per)
  for (var i = 0; i <=race_raw_per.length-1; i++) {
    alone_race_per.push(race_raw_per[i].toString()+"%")
  }

  //var angles = [ asianper*360, hispanicper*360, blackper*360, indianper*360, pacificper*360, whiteper*360, ];
  var multiracialNumber = ["1", "2", "3", "4","5","6","7","8","9","10","11","12"];
  var multiper = ['1%', '2%', '3%', '4%','5%','6%','7%','8%','9%','10%','11%','12%',];

// names for the things
var state1 = " CA", state2 = " CA", state3 = " NC", state4 = " GA";
var state = [state1, state2, state3, state4, "state5","state6","state7","state8","state9","state10","state11","state12",];

var county = ["county1", "county2", "county3", "county4","county5","county6","county7","county8","county9","county10","county11","county12",];
var alone_race = ["Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian",];
//var alone_race_per = [race_raw_per[0].toString()+"%",race_raw_per[1].toString()+"%",race_raw_per[2].toString()+"%",race_raw_per[3].toString()+"%",race_raw_per[4].toString()+"%",race_raw_per[5].toString()+"%"]

var aswh = "Asian Whites "; var asbl = "Black Asians "; var ashs = "Asian Hispanics "; var asind = "Indian Asians "; var aspi = "Asian Pacific Islander ";
var multiracialMatrix = [aswh, asbl, ashs, asind, aspi, "White Blacks ", "White Hispanics ", "White Indians ", "White Pacific Islanders ", "Black Hispanics ", "Black Indians ", "Black Pacific Islanders ", "Hispanic Indians ", "Hispanic Pacific Islanders ","Indian Pacific Islanders "]
var mostL = " most likely"; var leastL = " least likely"; var medL = " on average likely"; var are = "are";
var chooseSeverity = [mostL, medL, leastL]

// colors
var asiancolor = "#E0231E", hispaniccolor = "#E07A22", blackcolor ="#E0A12E", pacificcolor = "#E0C634", indiancolor = "#2D62BA", whitecolor = "#387BBF";
var gray = [asiancolor, hispaniccolor, blackcolor, pacificcolor, indiancolor, whitecolor, asiancolor, hispaniccolor, blackcolor, pacificcolor, indiancolor, whitecolor, asiancolor, hispaniccolor, blackcolor, pacificcolor, indiancolor, whitecolor, asiancolor, hispaniccolor, blackcolor, pacificcolor, indiancolor, whitecolor];

//for ellipses
var esize = 20, shifted = esize*1.55; var eycanvas = 0.982;
var smallcircle = 300; var diameter = 400;

// ------------------------------SETUP FOR LOOKS---------------------------------

function draw(){
  background(color('#152F48'));


  push();
  noFill(); strokeWeight(3.25); stroke(color("#387BBF")); 
  var boxheight = 45, boxwidth = 142, xover = .785, yover = .93;
  rect(xcanvas*xover, ycanvas*yover, boxwidth, boxheight, 11);
  rect(xcanvas*xover-boxwidth-20, ycanvas*yover, boxwidth, boxheight, 11);
  rect(xcanvas*xover-(boxwidth*2)-40, ycanvas*yover, boxwidth, boxheight, 11);
  
  fill(color("#387BBF")); noStroke(); textSize(22); textStyle(BOLD); textAlign(CENTER,[CENTER]);
  text("Most",xcanvas*xover-(boxwidth*2)-40+(boxwidth/2), ycanvas*yover+(boxheight/2)+(3.25));
  text("Median",xcanvas*xover-boxwidth-20+(boxwidth/2), ycanvas*yover+(boxheight/2)+(3.25));
  text("Least",xcanvas*xover+(boxwidth/2), ycanvas*yover+(boxheight/2)+(3.25));

  // ellipses - change the multiracial pairings
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
  for (var i = 0; i <= 5; i++) {
    fill(color(gray[i]));
    arc(leftx/2, topy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i+(24*cs)]));
    lastAngle += radians(angles[i+(24*cs)]);
    fill(color('#152F48'));
    ellipse(leftx/2, topy/2, smallcircle, smallcircle);
  }
  lastAngle=0;
  for (var i = 18; i <= 23; i++) {
    fill(color(gray[i]));
    arc(leftx/2, bottomy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i+(24*cs)]));
    lastAngle += radians(angles[i+(24*cs)]);
    fill(color('#152F48'));
    ellipse(leftx/2, bottomy/2, smallcircle, smallcircle);
  }
  for (var i = 6; i <= 11; i++) {
    fill(color(gray[i]));
    arc(rightx/2, topy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i+(24*cs)]));
    lastAngle += radians(angles[i+(24*cs)]);
    fill(color('#152F48'));
    ellipse(rightx/2, topy/2, smallcircle, smallcircle);
  }
  for (var i = 12; i <=17; i++) {
    fill(color(gray[i]));
    arc(rightx/2, bottomy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i+(24*cs)]));
    lastAngle += radians(angles[i+(24*cs)]);
    fill(color('#152F48'));
    ellipse(rightx/2, bottomy/2, smallcircle, smallcircle);
  }

// internal to charts data
  push();
  var leftx = xcanvas/4; rightx = leftx*3;
  var topy = ycanvas/3; bottomy = topy*2.2;
  textStyle(BOLD); fill(255);
  textAlign(CENTER);
  var txtsize = 80; var smlltxtsz = 22;
  var yoffset = 15; var racoffset = 30; var boffset = racoffset+smlltxtsz+10; 

  // top left
  textSize(txtsize); text(multiper[0+(4*cs)], leftx,topy-yoffset);
  textSize(smlltxtsz); text(chosenMR, leftx,topy+racoffset); text(multiracialNumber[0+(4*cs)],leftx,topy+boffset); 
  // top right
  textSize(txtsize); text(multiper[1+(4*cs)], rightx,topy-yoffset);
  textSize(smlltxtsz); text(chosenMR, rightx,topy+racoffset); text(multiracialNumber[1+(4*cs)],rightx,topy+boffset); 
  // bottom right
  textSize(txtsize); text(multiper[2+(4*cs)], rightx,bottomy-yoffset);
  textSize(smlltxtsz); text(chosenMR, rightx,bottomy+racoffset); text(multiracialNumber[2+(4*cs)],rightx,bottomy+boffset); 
  // bottom left
  textSize(txtsize); text(multiper[3+(4*cs)], leftx,bottomy-yoffset);
  textSize(smlltxtsz); text(chosenMR, leftx,bottomy+racoffset); text(multiracialNumber[3+(4*cs)],leftx,bottomy+boffset); 

  //upper left, asian
  var leftx = xcanvas/4; rightx = leftx*3; var topy = ycanvas/3; bottomy = topy*2.2; var beg = 0, stop = 0; var start = []; var end = [];
  var v = [mouseX-leftx, mouseY-topy], rmag = Math.sqrt((v[0]*v[0])+(v[1]*v[1])), theta = abs(180*(Math.atan2(v[0],v[1]))/PI-180);
  for (var i = 0+(24*cs); i <=23+(24*cs); i++) {
    stop = beg + (angles[i]);
    start.push(beg);
    end.push(stop); 
    beg = stop;
  }
  for (var j = 0+(24*cs); j <=23+(24*cs); j++) {
    if (rmag > smallcircle/2 && rmag < diameter/2 && theta < end[j-(24*cs)]+90 && theta > start[j-(24*cs)]+90){
    console.log(alone_race[j]); fill(color('#152F48')); ellipse(leftx, topy, smallcircle, smallcircle);
    textSize(txtsize);   textStyle(BOLD); fill(255); text(alone_race_per[j], leftx,topy-yoffset);
    textSize(smlltxtsz); text(alone_race[j], leftx,topy+racoffset); 
    }

  //upper right
  var beg2 = 0, stop2 = 0; var start2 = []; var end2 = [];
  var v2 = [mouseX-rightx, mouseY-topy], rmag2 = Math.sqrt((v2[0]*v2[0])+(v2[1]*v2[1])), theta2 = abs(180*(Math.atan2(v2[0],v2[1]))/PI-180);
  for (var m = 0+(24*cs); m <=23+(24*cs); m++) {
    stop2 = beg2 + (angles[m]);
    start2.push(beg2);
    end2.push(stop2); 
    beg2 = stop2;
  }
  for (var n = 0+(24*cs); n <=23+(24*cs); n++) {
    if (rmag2 > smallcircle/2 && rmag2 < diameter/2 && theta2 < end2[n-(24*cs)]+90 && theta2 > start2[n-(24*cs)]+90){
    console.log(alone_race[n]); fill(color('#152F48')); ellipse(rightx, topy, smallcircle, smallcircle);
    textSize(txtsize);   textStyle(BOLD); fill(255); text(alone_race_per[n], rightx,topy-yoffset);
    textSize(smlltxtsz); text(alone_race[n], rightx,topy+racoffset); 
    }
  }
}

  //bottom left
  var leftx = xcanvas/4; rightx = leftx*3; bottomy = topy*2.2; 
  var beg3 = 0, stop3 = 0; var start3 = []; var end3 = [];
  
  var v3 = [mouseX-leftx, mouseY-bottomy], rmag3 = Math.sqrt((v3[0]*v3[0])+(v3[1]*v3[1])), theta3 = abs(180*(Math.atan2(v3[0],v3[1]))/PI-180);
  for (var p = 0+(24*cs); p <=23+(24*cs); p++) {
    stop3 = beg3 + (angles[p]);
    start3.push(beg3);
    end3.push(stop3); 
    beg3 = stop3;
  }
  for (var j = 0+(24*cs); j <=23+(24*cs); j++) {
    if (rmag3 > smallcircle/2 && rmag3 < diameter/2 && theta3 < end3[j-(24*cs)]+90 && theta3 > start3[j-(24*cs)]+90){
    console.log(alone_race[j]); fill(color('#152F48')); ellipse(leftx, bottomy, smallcircle, smallcircle);
    textSize(txtsize);   textStyle(BOLD); fill(255); text(alone_race_per[j], leftx,bottomy-yoffset);
    textSize(smlltxtsz); text(alone_race[j], leftx,bottomy+racoffset); 
    }

  //bottom right
  var beg4 = 0, stop4 = 0; var start4 = []; var end4 = [];
  var v4 = [mouseX-rightx, mouseY-bottomy], rmag4 = Math.sqrt((v4[0]*v4[0])+(v4[1]*v4[1])), theta4 = abs(180*(Math.atan2(v4[0],v4[1]))/PI-180);
  for (var m = 0+(24*cs); m <=23+(24*cs); m++) {
    stop4 = beg4 + (angles[m]);
    start4.push(beg4);
    end4.push(stop4); 
    beg4 = stop4;
  }
  for (var n = 0+(24*cs); n <=23+(24*cs); n++) {
    if (rmag4 > smallcircle/2 && rmag4 < diameter/2 && theta4 < end4[n-(24*cs)]+90 && theta4 > start4[n-(24*cs)]+90){
    console.log(alone_race[n]); fill(color('#152F48')); ellipse(rightx, bottomy, smallcircle, smallcircle);
    textSize(txtsize);   textStyle(BOLD); fill(255); text(alone_race_per[n], rightx,bottomy-yoffset);
    textSize(smlltxtsz); text(alone_race[n], rightx,bottomy+racoffset); 
    }
  }
}
  
  pop();

  push();
  var leftx = xcanvas/4; rightx = leftx*3;
  var topy = ycanvas/3; bottomy = topy*2.2; var yoffset = 25;
  textSize(30), textAlign(CENTER); textStyle(BOLD); fill(color("#387BBF"));
  text(county[0+(4*cs)]+", " +state[0+(4*cs)], leftx, topy-(diameter/2)-yoffset);
  text(county[3+(4*cs)]+", " +state[1+(4*cs)], leftx, bottomy-(diameter/2)-yoffset);
  text(county[1+(4*cs)]+", " +state[2+(4*cs)], rightx, topy-(diameter/2)-yoffset);
  text(county[2+(4*cs)]+", " +state[3]+(4*cs), rightx, bottomy-(diameter/2)-yoffset);
  pop();

}

// 500 should be the larger outer circle when you hover over!!!


// ------------------------------FUNCTIONS for INTERACTION---------------------------------


function mousePressed() {

  var boxheight = 45, boxwidth = 142, xover = .785, yover = .93;
  if (mouseX > xcanvas*xover && mouseX < xcanvas*xover+boxwidth && mouseY > ycanvas*yover && mouseY < (ycanvas*yover)+boxheight) {
    console.log("State is 2, least likely!")
    cs =2; 
  } 

  if (mouseX > xcanvas*xover-boxwidth-20 && mouseX < xcanvas*xover-boxwidth-20+boxwidth && mouseY > ycanvas*yover && mouseY < (ycanvas*yover)+boxheight){
    console.log("State is 1, median!")
    cs = 1;
  }
  else if(mouseX > xcanvas*xover-(boxwidth*2)-40 && mouseX < xcanvas*xover-(boxwidth*2)-40+boxwidth && mouseY > ycanvas*yover && mouseY < (ycanvas*yover)+boxheight){
    console.log("State is 0, most")
    cs = 0;
  }

  //change the MultiRacial Paring 
  var ebeg = xcanvas*xover+boxwidth+3.5-esize; 
  for (var i = 0; i <15; i++) {
    if( mouseY > ycanvas*eycanvas && mouseY < ycanvas*eycanvas+esize && mouseX > (xcanvas*xover+boxwidth+3.5-esize)-(shifted*i)-esize/2 && mouseX < (xcanvas*xover+boxwidth+3.5-esize)-(shifted*i)+esize/2){
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




