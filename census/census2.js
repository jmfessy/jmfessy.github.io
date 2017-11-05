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
  //noLoop();
}

// ------------------------------GLOBAL VARIABLES FOR LOOKS---------------------------------
  
var alone_race = ["Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White","Asian", "Hispanic", "Black", "Indian", "Pacific", "White",]; //var alone_race_per = [race_raw_per[0].toString()+"%",race_raw_per[1].toString()+"%",race_raw_per[2].toString()+"%",race_raw_per[3].toString()+"%",race_raw_per[4].toString()+"%",race_raw_per[5].toString()+"%"]

var aswh = "Asian Whites "; var asbl = "Black Asians "; var ashs = "Asian Hispanics "; var asind = "Indian Asians "; var aspi = "Asian Pacific Islander ";
var multiracialMatrix = [aswh, asbl, ashs, asind, aspi, "White Blacks ", "White Hispanics ", "White Indians ", "White Pacific Islanders ", "Black Hispanics ", "Black Indians ", "Black Pacific Islanders ", "Hispanic Indians ", "Hispanic Pacific Islanders ","Indian Pacific Islanders "]
var mostL = " most likely"; var leastL = " least likely"; var medL = " on average likely"; var are = "are";
var chooseSeverity = [mostL, medL, leastL]

// colors
var asiancolor = "#E0231E", hispaniccolor = "#E07A22", blackcolor ="#E0A12E", pacificcolor = "#E0C634", indiancolor = "#2D62BA", whitecolor = "#387BBF";
var gray = [asiancolor, hispaniccolor, blackcolor, pacificcolor, indiancolor, whitecolor, asiancolor, hispaniccolor, blackcolor, pacificcolor, indiancolor, whitecolor, asiancolor, hispaniccolor, blackcolor, pacificcolor, indiancolor, whitecolor, asiancolor, hispaniccolor, blackcolor, pacificcolor, indiancolor, whitecolor];

//for ellipses
var esize = 20, shifted = esize*1.55; var eycanvas = 0.982;
var smallcircle = 300; var diameter = 400; var d = 0;


//-------------------------------FUNCTION---------------------------------------------------------------------------------------

function draw(){
if (mr ==0) {
  //var asianper = .2; hispanicper = .3; blackper = .1, indianper = .02, pacificper = .08, whiteper = .3
  //                    Kauai        `            honoloulu                       hawaaii                        kalawo                          lycoming                         sanilac                           deer lodge                    indiana                            cheyenne                          baker                      clinch                                          quitman                    
  raw_races = [.31,.11,.006,.005,.091,.33,  .429,.097,.028,.003,.095,.22,   .216,.126,.008,.006,.13,.34,   .08,.011,.001,.001,.50,.261,    .007,.019,.047,.002,.001,.923,  .01,.037,.01,.01,.01,.90,   .01,0.03,.001,.014,.01,.92,    .012,.013,.026,.001,.002,.95,   .005,.12,.008,.014,.001,.84,    .001,.056,.45,.004,.001,.48,    0.003, 0.053, 0.274, 0.01, 0.001, 0.652,  0.003, 0.018, 0.477, 0.007, 0, .49]
  populations = [3640, 47609, 8918, 4, 175, 65, 14, 134, 0, 0, 0, 0]  
  percentages = [25, 18, 30, 15, 1, 1, 1, 1, 0.0, 0.0, 0.0, 0.0]
  totalcitynumbers = [ 72029,992605,198449,88,115248,41409,9085,86364,1848,3150,6829,2335]

// names for the things
var state = ["HI", "HI", "HI", "HI", "PA", "MI", "MT", "PA", "CO", "GA", "GA", "GA"];
var county = ["Kauai County", "Honolulu County", "Hawaii County", "Kalawao County", "Lycoming County", "Sanilac County", "Deer Lodge County", "Indiana County", "Cheyenne County", "Baker County","Clinch County", "Quitman County"];
}

if(mr==1){
  raw_races = [.50,.1,.1,.1,.1,.1,  .429,.097,.028,.003,.095,.22,   .216,.126,.008,.006,.13,.34,   .08,.011,.001,.001,.50,.261,    .007,.019,.047,.002,.001,.923,  .01,.037,.01,.01,.01,.90,   .01,0.03,.001,.014,.01,.92,    .012,.013,.026,.001,.002,.95,   .005,.12,.008,.014,.001,.84,    .001,.056,.45,.004,.001,.48,    0.003, 0.053, 0.274, 0.01, 0.001, 0.652,  0.003, 0.018, 0.477, 0.007, 0, .49]
  var state = ["VA", "NO", "YO", "HI", "PA", "MI", "MT", "PA", "CO", "GA", "GA", "GA"];
  populations = [3640, 47609, 8918, 4, 175, 65, 14, 134, 0, 0, 0, 0]  
  percentages = [25, 18, 30, 15, 1, 1, 1, 1, 0.0, 0.0, 0.0, 0.0]
  totalcitynumbers = [ 72029,992605,198449,88,115248,41409,9085,86364,1848,3150,6829,2335]
  var county = ["Kauai County", "Honolulu County", "Hawaii County", "Kalawao County", "Lycoming County", "Sanilac County", "Deer Lodge County", "Indiana County", "Cheyenne County", "Baker County","Clinch County", "Quitman County"];

}

//------------var for all -----------------------------------------------------------

var race_raw_per = []
  var angles = []
  var alone_race_per = [];
  for (var i = 0; i <=raw_races.length-1; i++) {
    angles.push(raw_races[i]*360)
    race_raw_per.push(raw_races[i]*100)
  }
  for (var i = 0; i <=race_raw_per.length-1; i++) {
    alone_race_per.push(Math.ceil(Math.round(race_raw_per[i])).toString()+"%")
  }

var eachrace_per = [];
var totracialNumber = []
for (var i = 0; i <totalcitynumbers.length; i++) {
    //totracialNumber.push((totalcitynumbers[i]).toString())
    matrixi = raw_races[(6*i)]*totalcitynumbers[i]; matrix2 = raw_races[(6*i)+1]*totalcitynumbers[i]; matrix3 = raw_races[(6*i)+2]*totalcitynumbers[i]; matrix4 = raw_races[(6*i)+3]*totalcitynumbers[i]; matrix5 = raw_races[(6*i)+4]*totalcitynumbers[i]; matrix6 = raw_races[((6*i)+5)]*totalcitynumbers[i];
    eachrace_per.push(matrixi); eachrace_per.push(matrix2);eachrace_per.push(matrix3);eachrace_per.push(matrix4);eachrace_per.push(matrix5);eachrace_per.push(matrix6);
  }


var multiper = [];
for (var i = 0; i <percentages.length; i++) {
    multiper.push(Math.round(percentages[i]).toString()+"%")
  }

var multiracialNumber = [];
  for (var i = 0; i <populations.length; i++) {
    multiracialNumber.push((populations[i]).toString())
  }  

// ------------------------------SETUP FOR LOOKS---------------------------------

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
  textSize(explaintxt);
  var linespace = 19;

  textStyle(BOLD); fill(255); //strokeWeight(2); stroke(255);textStyle(ITALIC)
  text(chosenMR, topicLinex, topicLiney);
  text(chooseSeverity[cs], topicLinex+((chosenMR.length)+(are.length))*linespace, topicLiney);

  textStyle(BOLD); noStroke();
  text("are ", topicLinex+((chosenMR.length)*linespace), topicLiney);
  text("to live in these", topicLinex+((chosenMR.length)+(are.length)+(chooseSeverity[cs].length)-1)*linespace, topicLiney);
  text("counties", topicLinex, topicLiney+explaintxt);

  stroke(255);strokeWeight(3);
  var lengthMost = [100, 206,94]; topicLiney = topicLiney+7;
  line(topicLinex+((chosenMR.length)+(are.length))*linespace+10, topicLiney, topicLinex+((chosenMR.length)+(are.length))*linespace+lengthMost[cs], topicLiney);
  var lengthRace =[ 230, 230, 285, 240, 380, 230, 285, 240, 400, 280, 237, 400, 293, 455, 410];
  line(topicLinex, topicLiney, topicLinex+lengthRace[mr], topicLiney);

  pop();

  // charts

  noStroke();
  var lastAngle = 0;
  var leftx = xcanvas/2; rightx = leftx*3;
  var topy = ycanvas/1.5; bottomy = topy*2.2;
  for (var i = 0; i <= 5; i++) {
    fill(color(gray[i]));
    if( d == 500){
      arc(leftx/2, topy/2, d, d, lastAngle, lastAngle+radians(angles[i+(24*cs)]));
    }
    else{
      arc(leftx/2, topy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i+(24*cs)]));
    }
    lastAngle += radians(angles[i+(24*cs)]);
    fill(color('#152F48')); ellipse(leftx/2, topy/2, smallcircle, smallcircle);
  }
  lastAngle=0;
    for (var i = 6; i <= 11; i++) {
    fill(color(gray[i]));
    arc(rightx/2, topy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i+(24*cs)]));
    lastAngle += radians(angles[i+(24*cs)]);
    fill(color('#152F48')); ellipse(rightx/2, topy/2, smallcircle, smallcircle);
  }
  lastAngle=0;
  for (var i = 12; i <=17; i++) {
    fill(color(gray[i]));
    arc(rightx/2, bottomy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i+(24*cs)]));
    lastAngle += radians(angles[i+(24*cs)]);
    fill(color('#152F48')); ellipse(rightx/2, bottomy/2, smallcircle, smallcircle);
  }
  lastAngle=0;
  for (var i = 18; i <= 23; i++) {
    fill(color(gray[i]));
    arc(leftx/2, bottomy/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i+(24*cs)]));
    lastAngle += radians(angles[i+(24*cs)]);
    fill(color('#152F48')); ellipse(leftx/2, bottomy/2, smallcircle, smallcircle);
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
  for (var i = 0+(24*cs); i <=5+(24*cs); i++) {
    stop = beg + (angles[i]);
    start.push(beg);
    end.push(stop); 
    beg = stop;
  }
  for (var j = 0+(24*cs); j <=5+(24*cs); j++) {
    if (rmag > smallcircle/2 && rmag < diameter/2 && theta < end[j-(24*cs)]+90 && theta > start[j-(24*cs)]+90){
    console.log(alone_race[j]); fill(color('#152F48')); ellipse(leftx, topy, smallcircle, smallcircle);
    textSize(txtsize);   textStyle(BOLD); fill(255); text(alone_race_per[j], leftx,topy-yoffset);
    textSize(smlltxtsz); text(alone_race[j]+" Alone", leftx,topy+racoffset); text(Math.ceil(eachrace_per[j]),leftx,topy+boffset);
    } }

  //upper right
  var leftx = xcanvas/4; rightx = leftx*3; var topy = ycanvas/3; bottomy = topy*2.2; var beg = 0, stop = 0; var start = []; var end = []; var xpos = rightx; var ypos = topy;
  var v = [mouseX-rightx, mouseY-topy], rmag = Math.sqrt((v[0]*v[0])+(v[1]*v[1])), theta = abs(180*(Math.atan2(v[0],v[1]))/PI-180);
  for (var i = 6+(24*cs); i <=11+(24*cs); i++) {
    stop = beg + (angles[i]);
    start.push(beg);
    end.push(stop); 
    beg = stop;
  }
  for (var j = 0+(24*cs); j <=5+(24*cs); j++) {
    if (rmag > smallcircle/2 && rmag < diameter/2 && theta < end[j-(24*cs)]+90 && theta > start[j-(24*cs)]+90){
    console.log(alone_race[j]); fill(color('#152F48')); ellipse(xpos, ypos, smallcircle, smallcircle);
    textSize(txtsize);   textStyle(BOLD); fill(255); text(alone_race_per[j+6], xpos,ypos-yoffset);
    textSize(smlltxtsz); text(alone_race[j]+" Alone", xpos,ypos+racoffset); text(Math.ceil(eachrace_per[j+6]),xpos,ypos+boffset);
    } }

   //bottom right
  var leftx = xcanvas/4; rightx = leftx*3; var topy = ycanvas/3; bottomy = topy*2.2; var beg = 0, stop = 0; var start = []; var end = []; var xpos = rightx; var ypos = bottomy;
  var v = [mouseX-xpos, mouseY-ypos], rmag = Math.sqrt((v[0]*v[0])+(v[1]*v[1])), theta = abs(180*(Math.atan2(v[0],v[1]))/PI-180);
  for (var i = 12+(24*cs); i <=17+(24*cs); i++) {
    stop = beg + (angles[i]);
    start.push(beg);
    end.push(stop); 
    beg = stop;
  }
  for (var j = 0+(24*cs); j <=5+(24*cs); j++) {
    if (rmag > smallcircle/2 && rmag < diameter/2 && theta < end[j-(24*cs)]+90 && theta > start[j-(24*cs)]+90){
    console.log(alone_race[j]); fill(color('#152F48')); ellipse(xpos, ypos, smallcircle, smallcircle);
    textSize(txtsize);   textStyle(BOLD); fill(255); text(alone_race_per[j+12], xpos,ypos-yoffset);
    textSize(smlltxtsz); text(alone_race[j]+" Alone", xpos,ypos+racoffset); text(Math.ceil(eachrace_per[j+12]),xpos,ypos+boffset);
    } }

  //bottom left
  var leftx = xcanvas/4; rightx = leftx*3; var topy = ycanvas/3; bottomy = topy*2.2; var beg = 0, stop = 0; var start = []; var end = []; var xpos = leftx; var ypos = bottomy;
  var v = [mouseX-xpos, mouseY-ypos], rmag = Math.sqrt((v[0]*v[0])+(v[1]*v[1])), theta = abs(180*(Math.atan2(v[0],v[1]))/PI-180);
  for (var i = 18+(24*cs); i <=23+(24*cs); i++) {
    stop = beg + (angles[i]);
    start.push(beg);
    end.push(stop); 
    beg = stop;
  }
  for (var j = 0+(24*cs); j <=5+(24*cs); j++) {
    if (rmag > smallcircle/2 && rmag < diameter/2 && theta < end[j-(24*cs)]+90 && theta > start[j-(24*cs)]+90){
    console.log(alone_race[j]); fill(color('#152F48')); ellipse(xpos, ypos, smallcircle, smallcircle);
    textSize(txtsize);   textStyle(BOLD); fill(255); text(alone_race_per[j+18], xpos,ypos-yoffset);
    textSize(smlltxtsz); text(alone_race[j]+" Alone", xpos,ypos+racoffset); text(Math.ceil(eachrace_per[j+18]),xpos,ypos+boffset);
    }  
  }
  
  pop();

  push();
  var leftx = xcanvas/4; rightx = leftx*3;
  var topy = ycanvas/3; bottomy = topy*2.2; var yoffset = 25;
  textSize(30), textAlign(CENTER); textStyle(BOLD); fill(255);
  diameter = 400;
  text(county[0+(4*cs)]+", " +state[0+(4*cs)], leftx, topy-(diameter/2)-yoffset);
  text(county[3+(4*cs)]+", " +state[1+(4*cs)], leftx, bottomy-(diameter/2)-yoffset);
  text(county[1+(4*cs)]+", " +state[2+(4*cs)], rightx, topy-(diameter/2)-yoffset);
  text(county[2+(4*cs)]+", " +state[3+(4*cs)], rightx, bottomy-(diameter/2)-yoffset);
  pop();

// if within range
// for circle = diamter_big, diamter_big = <500, diatmer_big ++



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




