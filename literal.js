// Sketch for using the darksky API
// https://darksky.net/dev/docs
// This sketch requires you to start a local server or run it on a server
// See more about how to do that here:
// https://github.com/processing/p5.js/wiki/Local-server

var queryResult;
var xcanvas = 320;
var ycanvas = 568;
var strokepast = 3.5;

function setup() {
	// see pixeldensity in reference
  pixelDensity(3.0);
  /*
  this is the logical resolution for iphone 6 without the browser chrome at the top
  adjust it for your phone accordingly
  */
   createCanvas(xcanvas, ycanvas);
  	background(255);
	query();
}

// Run the API call
function query() {

  // URL for querying
  var url= 'https://api.darksky.net/forecast/c5ba1926039ed66a1ff75a8daa820cb8/42.361936, -71.097309';
  //var url= 'https://api.darksky.net/forecast/436fdc35bab87ffdf2f6cf130fc5ddc5/42.361936, -71.097309,daily';

  // Query the URL, set a callback
  // 'jsonp' is needed for security
  loadJSON(url, gotData, 'jsonp');
  loadJSON(url, onepast, 'jsonp');
  loadJSON(url, twopast, 'jsonp');
  loadJSON(url, threepast, 'jsonp');
  loadJSON(url,	fourpast, 'jsonp');
  loadJSON(url,	fivepast, 'jsonp');
  loadJSON(url,	tenpast, 'jsonp');
  loadJSON(url,	twentypast, 'jsonp');
  loadJSON(url,	thirtypast, 'jsonp');
  loadJSON(url,	fourtypast, 'jsonp');
  loadJSON(url,	fourtysevenpast, 'jsonp');
}

function fourtysevenpast(data) {
	queryResult = data;
	var currentWeather = queryResult.currently;
	var pastTime = new Date(currentWeather.time*1000);
	pastTime.setFullYear(pastTime.getFullYear() - 47);
	console.log(pastTime.getTime()/1000);
	var url= 'https://api.darksky.net/forecast/c5ba1926039ed66a1ff75a8daa820cb8/42.361936, -71.097309, ' + pastTime.getTime()/1000;
	loadJSON(url, fourtysevendata, 'jsonp');
}

function fourtysevendata(data){
	queryResult = data;
	var dailyWeather = queryResult.daily;

  	var xPos = 20;  
  	var yPos = 40;
  	var yGap = 60; 
  	var textSizeLarge = 35;
  	var textSizeSmall = 20;
 	var xGap = 50;
 	var yTopGap = 70;
 	var yBottomGap = 115;
 	var length = ycanvas-yBottomGap-yTopGap;
 	var tabH = 5;
 	var tabL = 3.5;
 	var width = xcanvas-(2*xGap);

	stroke(0,51,102,75);
  	strokeWeight(strokepast);
line(xGap+2,yTopGap+length-((dailyWeather.data[0].temperatureMin+18)/122*length), xGap+width-1,yTopGap+length-((dailyWeather.data[0].temperatureMax+18)/122*length));

}

function fourtypast(data) {
	queryResult = data;
	var currentWeather = queryResult.currently;
	var pastTime = new Date(currentWeather.time*1000);
	pastTime.setFullYear(pastTime.getFullYear() - 40);
	console.log(pastTime.getTime()/1000);
	var url= 'https://api.darksky.net/forecast/c5ba1926039ed66a1ff75a8daa820cb8/42.361936, -71.097309, ' + pastTime.getTime()/1000;
	loadJSON(url, fourtydata, 'jsonp');
}

function fourtydata(data){
	queryResult = data;
	var dailyWeather = queryResult.daily;

  	var xPos = 20;  
  	var yPos = 40;
  	var yGap = 60; 
  	var textSizeLarge = 35;
  	var textSizeSmall = 20;
 	var xGap = 50;
 	var yTopGap = 70;
 	var yBottomGap = 115;
 	var length = ycanvas-yBottomGap-yTopGap;
 	var tabH = 5;
 	var tabL = 3.5;
 	var width = xcanvas-(2*xGap);

	stroke(0,51,102,75);
  	strokeWeight(strokepast);
line(xGap+2,yTopGap+length-((dailyWeather.data[0].temperatureMin+18)/122*length), xGap+width-1,yTopGap+length-((dailyWeather.data[0].temperatureMax+18)/122*length));

}

function thirtypast(data) {
	queryResult = data;
	var currentWeather = queryResult.currently;
	var pastTime = new Date(currentWeather.time*1000);
	pastTime.setFullYear(pastTime.getFullYear() - 30);
	console.log(pastTime.getTime()/1000);
	var url= 'https://api.darksky.net/forecast/c5ba1926039ed66a1ff75a8daa820cb8/42.361936, -71.097309, ' + pastTime.getTime()/1000;
	loadJSON(url, thirtydata, 'jsonp');
}

function thirtydata(data){
	queryResult = data;
	var dailyWeather = queryResult.daily;

  	var xPos = 20;  
  	var yPos = 40;
  	var yGap = 60; 
  	var textSizeLarge = 35;
  	var textSizeSmall = 20;
 	var xGap = 50;
 	var yTopGap = 70;
 	var yBottomGap = 115;
 	var length = ycanvas-yBottomGap-yTopGap;
 	var tabH = 5;
 	var tabL = 3.5;
 	var width = xcanvas-(2*xGap);

	stroke(0,51,102,75);
  	strokeWeight(strokepast);
line(xGap+2,yTopGap+length-((dailyWeather.data[0].temperatureMin+18)/122*length), xGap+width-1,yTopGap+length-((dailyWeather.data[0].temperatureMax+18)/122*length));

}

function twentypast(data) {
	queryResult = data;
	var currentWeather = queryResult.currently;
	var pastTime = new Date(currentWeather.time*1000);
	pastTime.setFullYear(pastTime.getFullYear() - 20);
	console.log(pastTime.getTime()/1000);
	var url= 'https://api.darksky.net/forecast/c5ba1926039ed66a1ff75a8daa820cb8/42.361936, -71.097309, ' + pastTime.getTime()/1000;
	loadJSON(url, twentydata, 'jsonp');
}

function twentydata(data){
	queryResult = data;
	var dailyWeather = queryResult.daily;

  	var xPos = 20;  
  	var yPos = 40;
  	var yGap = 60; 
  	var textSizeLarge = 35;
  	var textSizeSmall = 20;
 	var xGap = 50;
 	var yTopGap = 70;
 	var yBottomGap = 115;
 	var length = ycanvas-yBottomGap-yTopGap;
 	var tabH = 5;
 	var tabL = 3.5;
 	var width = xcanvas-(2*xGap);

	stroke(0,51,102,75);
  	strokeWeight(strokepast);
line(xGap+2,yTopGap+length-((dailyWeather.data[0].temperatureMin+18)/122*length), xGap+width-1,yTopGap+length-((dailyWeather.data[0].temperatureMax+18)/122*length));

}

function tenpast(data) {
	queryResult = data;
	var currentWeather = queryResult.currently;
	var pastTime = new Date(currentWeather.time*1000);
	pastTime.setFullYear(pastTime.getFullYear() - 10);
	console.log(pastTime.getTime()/1000);
	var url= 'https://api.darksky.net/forecast/c5ba1926039ed66a1ff75a8daa820cb8/42.361936, -71.097309, ' + pastTime.getTime()/1000;
	loadJSON(url, tendata, 'jsonp');
}

function tendata(data){
	queryResult = data;
	var dailyWeather = queryResult.daily;

  	var xPos = 20;  
  	var yPos = 40;
  	var yGap = 60; 
  	var textSizeLarge = 35;
  	var textSizeSmall = 20;
 	var xGap = 50;
 	var yTopGap = 70;
 	var yBottomGap = 115;
 	var length = ycanvas-yBottomGap-yTopGap;
 	var tabH = 5;
 	var tabL = 3.5;
 	var width = xcanvas-(2*xGap);

	stroke(0,51,102,75);
  	strokeWeight(strokepast);
line(xGap+2,yTopGap+length-((dailyWeather.data[0].temperatureMin+18)/122*length), xGap+width-1,yTopGap+length-((dailyWeather.data[0].temperatureMax+18)/122*length));

}

function fivepast(data) {
	queryResult = data;
	var currentWeather = queryResult.currently;
	var pastTime = new Date(currentWeather.time*1000);
	pastTime.setFullYear(pastTime.getFullYear() - 5);
	console.log(pastTime.getTime()/1000);
	var url= 'https://api.darksky.net/forecast/c5ba1926039ed66a1ff75a8daa820cb8/42.361936, -71.097309, ' + pastTime.getTime()/1000;
	loadJSON(url, fiveData, 'jsonp');
}

function fiveData(data){
	queryResult = data;
	var dailyWeather = queryResult.daily;

  	var xPos = 20;  
  	var yPos = 40;
  	var yGap = 60; 
  	var textSizeLarge = 35;
  	var textSizeSmall = 20;
 	var xGap = 50;
 	var yTopGap = 70;
 	var yBottomGap = 115;
 	var length = ycanvas-yBottomGap-yTopGap;
 	var tabH = 5;
 	var tabL = 3.5;
 	var width = xcanvas-(2*xGap);

	stroke(0,51,102,75);
  	strokeWeight(strokepast);
line(xGap+2,yTopGap+length-((dailyWeather.data[0].temperatureMin+18)/122*length), xGap+width-1,yTopGap+length-((dailyWeather.data[0].temperatureMax+18)/122*length));

}

function fourpast(data) {
	queryResult = data;
	var currentWeather = queryResult.currently;
	var pastTime = new Date(currentWeather.time*1000);
	pastTime.setFullYear(pastTime.getFullYear() - 4);
	console.log(pastTime.getTime()/1000);
	var url= 'https://api.darksky.net/forecast/c5ba1926039ed66a1ff75a8daa820cb8/42.361936, -71.097309, ' + pastTime.getTime()/1000;
	loadJSON(url, fourData, 'jsonp');
}

function fourData(data){
	queryResult = data;
	var dailyWeather = queryResult.daily;

  	var xPos = 20;  
  	var yPos = 40;
  	var yGap = 60; 
  	var textSizeLarge = 35;
  	var textSizeSmall = 20;
 	var xGap = 50;
 	var yTopGap = 70;
 	var yBottomGap = 115;
 	var length = ycanvas-yBottomGap-yTopGap;
 	var tabH = 5;
 	var tabL = 3.5;
 	var width = xcanvas-(2*xGap);

	stroke(0,51,102,75);
  	strokeWeight(strokepast);
line(xGap+2,yTopGap+length-((dailyWeather.data[0].temperatureMin+18)/122*length), xGap+width-1,yTopGap+length-((dailyWeather.data[0].temperatureMax+18)/122*length));

}

function threepast(data) {
	queryResult = data;
	var currentWeather = queryResult.currently;
	var pastTime = new Date(currentWeather.time*1000);
	pastTime.setFullYear(pastTime.getFullYear() - 3);
	console.log(pastTime.getTime()/1000);
	var url= 'https://api.darksky.net/forecast/c5ba1926039ed66a1ff75a8daa820cb8/42.361936, -71.097309, ' + pastTime.getTime()/1000;
	loadJSON(url, threeData, 'jsonp');
}

function threeData(data){
	queryResult = data;
	var dailyWeather = queryResult.daily;

  	var xPos = 20;  
  	var yPos = 40;
  	var yGap = 60; 
  	var textSizeLarge = 35;
  	var textSizeSmall = 20;
 	var xGap = 50;
 	var yTopGap = 70;
 	var yBottomGap = 115;
 	var length = ycanvas-yBottomGap-yTopGap;
 	var tabH = 5;
 	var tabL = 3.5;
 	var width = xcanvas-(2*xGap);

	stroke(0,51,102,75);
  	strokeWeight(strokepast);
	line(xGap+2,yTopGap+length-((dailyWeather.data[0].temperatureMin+18)/122*length), xGap+width-1,yTopGap+length-((dailyWeather.data[0].temperatureMax+18)/122*length));

}

function twopast(data) {
	queryResult = data;
	var currentWeather = queryResult.currently;
	var pastTime = new Date(currentWeather.time*1000);
	pastTime.setFullYear(pastTime.getFullYear() - 2);
	console.log(pastTime.getTime()/1000);
	var url= 'https://api.darksky.net/forecast/c5ba1926039ed66a1ff75a8daa820cb8/42.361936, -71.097309, ' + pastTime.getTime()/1000;
	loadJSON(url, twoData, 'jsonp');
}

function twoData(data){
	queryResult = data;
	var dailyWeather = queryResult.daily;

  	var xPos = 20;  
  	var yPos = 40;
  	var yGap = 60; 
  	var textSizeLarge = 35;
  	var textSizeSmall = 20;
 	var xGap = 50;
 	var yTopGap = 70;
 	var yBottomGap = 115;
 	var length = ycanvas-yBottomGap-yTopGap;
 	var tabH = 5;
 	var tabL = 3.5;
 	var width = xcanvas-(2*xGap);

	stroke(0,51,102,75);
  	strokeWeight(strokepast);
  	line(xGap+2,yTopGap+length-((dailyWeather.data[0].temperatureMin+18)/122*length), xGap+width-1,yTopGap+length-((dailyWeather.data[0].temperatureMax+18)/122*length));

}


function onepast(data) {
	queryResult = data;
	var currentWeather = queryResult.currently;
	var pastTime = new Date(currentWeather.time*1000);
	pastTime.setFullYear(pastTime.getFullYear() - 1);
	console.log(pastTime.getTime()/1000);
	var url= 'https://api.darksky.net/forecast/c5ba1926039ed66a1ff75a8daa820cb8/42.361936, -71.097309, ' + pastTime.getTime()/1000;
	loadJSON(url, oneData, 'jsonp');
}

function oneData(data){
	queryResult = data;
	var dailyWeather = queryResult.daily;

  	var xPos = 20;  
  	var yPos = 40;
  	var yGap = 60; 
  	var textSizeLarge = 35;
  	var textSizeSmall = 20;
 	var xGap = 50;
 	var yTopGap = 70;
 	var yBottomGap = 115;
 	var length = ycanvas-yBottomGap-yTopGap;
 	var tabH = 5;
 	var tabL = 3.5;
 	var width = xcanvas-(2*xGap);

	stroke(0,51,102, 75);
  	strokeWeight(strokepast);
  	line(xGap+2,yTopGap+length-((dailyWeather.data[0].temperatureMin+18)/122*length), xGap+width-1,yTopGap+length-((dailyWeather.data[0].temperatureMax+18)/122*length));

}





// Request is completed
function gotData(data) {
  // console.log(data);
  queryResult = data;

  // only look at current results:
  var currentWeather = queryResult.currently;
  var dailyWeather = queryResult.daily;


  
  // a few variables for text formatting
  var xPos = 20;  
  var yPos = 40;
  var yGap = 60; 
  var textSizeLarge = 35;
  var textSizeSmall = 20;

  var xGap = 50;
  var yTopGap = 70;
  var yBottomGap = 115;
  var length = ycanvas-yBottomGap-yTopGap;
  var tabH = 5;
  var tabL = 3.5;

  // List relevant items of information

  stroke(100);
  noFill();
  rect(xGap,0,xcanvas-(2*xGap),ycanvas-yBottomGap);

  var width = xcanvas-(2*xGap);

  fill(255);
  noStroke();
  rect(0,0,xcanvas, yTopGap);

  //rect(0,ycanvas-yBottomGap,xcanvas, 2);

  fill(color('#EE3937'));
  textSize(textSizeLarge);
  textAlign(CENTER);
  text(Math.round(currentWeather.temperature)+" F", xcanvas/2, 53);

  fill(100);
  textSize(textSizeSmall);
  textAlign(RIGHT);
  text("Low",xGap,yTopGap-10);

  textAlign(LEFT);
  text("High",xGap+width,yTopGap-10);

// LINE

push();
 //fill(color('#EE3937'));
  stroke(color('#EE3937'))
  strokeWeight(5)
  line(xGap+2,yTopGap+length-((dailyWeather.data[0].temperatureMin+18)/122*length), xGap+width-2,yTopGap+length-((dailyWeather.data[0].temperatureMax+18)/122*length));
pop();

// Tabs on the side
  noStroke()
  //low
  textSize(18);
  rect(xGap-tabH,yTopGap+length-((dailyWeather.data[0].temperatureMin+18)/122*length),tabH,tabL);
  push();
  textAlign(RIGHT,CENTER);
  text(Math.round(dailyWeather.data[0].temperatureMin),xGap-tabH-5,yTopGap+length-((dailyWeather.data[0].temperatureMin+18)/122*length));
  pop()

  //High
  rect(xGap+width+1,yTopGap+length-((dailyWeather.data[0].temperatureMax+18)/122*length),tabH,tabL);
  push();
  textAlign(LEFT,CENTER);
  text(Math.round(dailyWeather.data[0].temperatureMax),xGap+width+5+tabH,yTopGap+length-((dailyWeather.data[0].temperatureMax+18)/122*length)+tabL);
  pop();

//humidity
 push();
 //fill(color('#EE3937'));
  stroke(color('#EE3937'))
  strokeWeight(3)
  line(xGap+1,ycanvas-((3/4)*yBottomGap)+yBottomGap/2, xGap+width-1,ycanvas-((3/4)*yBottomGap)+yBottomGap/2-((dailyWeather.data[0].humidity)*yBottomGap/2));
  console.log(dailyWeather.data[0].humidity);
pop();

//percipitation

push();
 //fill(color('#EE3937'));
  stroke(0,51,102)
  strokeWeight(3)
  line(xGap+1,ycanvas-((3/4)*yBottomGap)+yBottomGap/2, xGap+width-1,ycanvas-((3/4)*yBottomGap)+yBottomGap/2-((dailyWeather.data[0].precipIntensity)*yBottomGap/2));
  console.log(dailyWeather.data[0].precipIntensity);
pop();

// bottom graph
  stroke(100);
  noFill();
  rect(xGap,ycanvas-((3/4)*yBottomGap),width,yBottomGap/2);

  noStroke();
  fill(100);
  textAlign(RIGHT);
  textSize(12);
  text("0%",xGap-3,ycanvas-((1/4)*yBottomGap));

  	textAlign(LEFT);
    fill(100);
  	text(Math.round(dailyWeather.data[0].humidity*100) +"%",xGap+width+3,ycanvas-((3/4)*yBottomGap)+yBottomGap/2-((dailyWeather.data[0].humidity)*yBottomGap/2));
  	textAlign(RIGHT,TOP);
  	fill(color('#EE3937'));
  	rect(xGap+width-68,ycanvas-((1/4)*yBottomGap)+10,5,5);
  	fill(100);
	text("Humidity",xGap+width-10,ycanvas-((1/4)*yBottomGap)+5);

	textAlign(LEFT,BOTTOM);
    fill(100);
  	text(Math.round(dailyWeather.data[0].precipIntensity*100) +"%",xGap+width+3,ycanvas-((3/4)*yBottomGap)+yBottomGap/2-((dailyWeather.data[0].precipIntensity)*yBottomGap/2));
	textAlign(RIGHT,TOP);
	fill(0,51,102);
	rect(xGap+width-160,ycanvas-((1/4)*yBottomGap)+10,5,5)
	fill(100);
	text("Precipitation",xGap+width-80,ycanvas-((1/4)*yBottomGap)+5);
  


  // The location is not liive data, just entered manually
  /*
  textSize(textSizeSmall);
  text("Location",20, yPos);
  yPos+=textSizeLarge;
  textSize(textSizeLarge);
  text("Cambridge",20, yPos);
  yPos+=yGap;

  textSize(textSizeSmall);
  text("Weather",20, yPos);
  yPos+=textSizeLarge;
  textSize(textSizeLarge);
  text(currentWeather.summary,20, yPos);
  yPos+=yGap;

    textSize(textSizeSmall);
  text("Precipitation",20, yPos);
  yPos+=textSizeLarge;
  textSize(textSizeLarge);
  text(currentWeather.precipIntensity + "%",20, yPos);
  yPos+=yGap;
  
  textSize(textSizeSmall);
  text("Humidity",20, yPos);
  yPos+=textSizeLarge;
  textSize(textSizeLarge);
  text(currentWeather.humidity + "%",20, yPos);
  yPos+=yGap;

  */


  //text(dailyWeather.data[0].temperatureMin+ " F",20, yPos);

  



}