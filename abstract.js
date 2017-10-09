// Sketch for using the darksky API
// https://darksky.net/dev/docs
// This sketch requires you to start a local server or run it on a server
// See more about how to do that here:
// https://github.com/processing/p5.js/wiki/Local-server

var queryResult;
var xcanvas = 320;
var ycanvas = 568;

/*var SFPro;
function preload() {
  SFPro = loadFont('assets/SF-Pro-Display-Light.otf');
}
*/
function setup() {
  // see pixeldensity in reference
  pixelDensity(3.0);
  /*
  this is the logical resolution for iphone 6 without the browser chrome at the top
  adjust it for your phone accordingly
  */
   createCanvas(xcanvas, ycanvas);
    background(255);
   // textFont(SFPro);
  query();

}


// Run the API call
function query() {

  // URL for querying
  var url= 'https://api.darksky.net/forecast/c5ba1926039ed66a1ff75a8daa820cb8/42.361936, -71.097309';
  //var url= 'https://api.darksky.net/forecast/436fdc35bab87ffdf2f6cf130fc5ddc5/42.361936, -71.097309,daily';

  // Query the URL, set a callback
  // 'jsonp' is needed for security
   loadJSON(url, timemachine, 'jsonp');
  loadJSON(url, gotData, 'jsonp');
  loadJSON(url, twodays, 'jsonp');
  loadJSON(url, threedays, 'jsonp');
  loadJSON(url, fourdays, 'jsonp');
  loadJSON(url, fivedays, 'jsonp');
  loadJSON(url, sixdays, 'jsonp');

}


function sixdays(data) {
	queryResult = data;
	var currentWeather = queryResult.currently;
	var pastTime = new Date(currentWeather.time*1000);
	pastTime.setDate(pastTime.getDate() + 6);
	console.log(pastTime.getTime()/1000);


	var url= 'https://api.darksky.net/forecast/c5ba1926039ed66a1ff75a8daa820cb8/42.361936, -71.097309, ' + pastTime.getTime()/1000;
	loadJSON(url, sixdayo, 'jsonp');
}

function sixdayo(data){
	queryResult = data;
	var past = queryResult.daily.data[0];
	console.log(past.time);

	var currentWeather = past;
  	var dailyWeather = past;

	var xPos = 20;  
 	 var yPos = 40;
 	 var yGap = 60; 
 	 var textSizeLarge = 40;
 	 var textSizeSmall = 21;
 	 var borderGap = 40;
 	 var borderGraph = 4.5;
 	 var bottomGap = 22;
 	 angleMode(DEGREES);
 	 var width = (xcanvas-(2*borderGap));
 	 var length = (ycanvas - (2*borderGap)-bottomGap);
 	 var tabh = 20;


 	 var shapeWidth = (Math.abs(currentWeather.precipIntensity - currentWeather.humidity))*width;
if(currentWeather.precipIntensity > currentWeather.humidity){
  var shapex = (borderGap+borderGraph+((currentWeather.precipIntensity)*width))-(shapeWidth/2);
}  
else{
  var shapex = (borderGap+borderGraph+((currentWeather.humidity)*width))-(shapeWidth/2); 
}
var shapeHeight=(((past.temperatureMax - past.temperatureMin))/122)*length;  

var shapey = (borderGap+borderGraph+length-((past.temperatureMin+18)/122*length))-(shapeHeight/2);;


console.log(shapeWidth);
  fill(241, 121, 30, 50);
  //(0)
  //rotate(3.14);
  ellipse(shapex,shapey,shapeWidth,shapeHeight);
}



function fivedays(data) {
	queryResult = data;
	var currentWeather = queryResult.currently;
	var pastTime = new Date(currentWeather.time*1000);
	pastTime.setDate(pastTime.getDate() + 5);
	console.log(pastTime.getTime()/1000);


	var url= 'https://api.darksky.net/forecast/c5ba1926039ed66a1ff75a8daa820cb8/42.361936, -71.097309, ' + pastTime.getTime()/1000;
	loadJSON(url, fivedayo, 'jsonp');
}

function fivedayo(data){
	queryResult = data;
	var past = queryResult.daily.data[0];
	console.log(past.time);

	var currentWeather = past;
  	var dailyWeather = past;

	var xPos = 20;  
 	 var yPos = 40;
 	 var yGap = 60; 
 	 var textSizeLarge = 40;
 	 var textSizeSmall = 21;
 	 var borderGap = 40;
 	 var borderGraph = 4.5;
 	 var bottomGap = 22;
 	 angleMode(DEGREES);
 	 var width = (xcanvas-(2*borderGap));
 	 var length = (ycanvas - (2*borderGap)-bottomGap);
 	 var tabh = 20;


 	 var shapeWidth = (Math.abs(currentWeather.precipIntensity - currentWeather.humidity))*width;
if(currentWeather.precipIntensity > currentWeather.humidity){
  var shapex = (borderGap+borderGraph+((currentWeather.precipIntensity)*width))-(shapeWidth/2);
}  
else{
  var shapex = (borderGap+borderGraph+((currentWeather.humidity)*width))-(shapeWidth/2); 
}
var shapeHeight=(((past.temperatureMax - past.temperatureMin))/122)*length;  

var shapey = (borderGap+borderGraph+length-((past.temperatureMin+18)/122*length))-(shapeHeight/2);;


console.log(shapeWidth);
  fill(241, 121, 30, 50);
  //(0)
  //rotate(3.14);
  ellipse(shapex,shapey,shapeWidth,shapeHeight);
}

function fourdays(data) {
	queryResult = data;
	var currentWeather = queryResult.currently;
	var pastTime = new Date(currentWeather.time*1000);
	pastTime.setDate(pastTime.getDate() + 4);
	console.log(pastTime.getTime()/1000);


	var url= 'https://api.darksky.net/forecast/c5ba1926039ed66a1ff75a8daa820cb8/42.361936, -71.097309, ' + pastTime.getTime()/1000;
	loadJSON(url, fourdayo, 'jsonp');
}

function fourdayo(data){
	queryResult = data;
	var past = queryResult.daily.data[0];
	console.log(past.time);

	var currentWeather = past;
  	var dailyWeather = past;

	var xPos = 20;  
 	 var yPos = 40;
 	 var yGap = 60; 
 	 var textSizeLarge = 40;
 	 var textSizeSmall = 21;
 	 var borderGap = 40;
 	 var borderGraph = 4.5;
 	 var bottomGap = 22;
 	 angleMode(DEGREES);
 	 var width = (xcanvas-(2*borderGap));
 	 var length = (ycanvas - (2*borderGap)-bottomGap);
 	 var tabh = 20;


 	 var shapeWidth = (Math.abs(currentWeather.precipIntensity - currentWeather.humidity))*width;
if(currentWeather.precipIntensity > currentWeather.humidity){
  var shapex = (borderGap+borderGraph+((currentWeather.precipIntensity)*width))-(shapeWidth/2);
}  
else{
  var shapex = (borderGap+borderGraph+((currentWeather.humidity)*width))-(shapeWidth/2); 
}
var shapeHeight=(((past.temperatureMax - past.temperatureMin))/122)*length;  

var shapey = (borderGap+borderGraph+length-((past.temperatureMin+18)/122*length))-(shapeHeight/2);;


console.log(shapeWidth);
  fill(241, 121, 30, 50);
  //(0)
  //rotate(3.14);
  ellipse(shapex,shapey,shapeWidth,shapeHeight);
}



function threedays(data) {
	queryResult = data;
	var currentWeather = queryResult.currently;
	var pastTime = new Date(currentWeather.time*1000);
	pastTime.setDate(pastTime.getDate() + 3);
	console.log(pastTime.getTime()/1000);


	var url= 'https://api.darksky.net/forecast/c5ba1926039ed66a1ff75a8daa820cb8/42.361936, -71.097309, ' + pastTime.getTime()/1000;
	loadJSON(url, threedayo, 'jsonp');
}

function threedayo(data){
	queryResult = data;
	var past = queryResult.daily.data[0];
	console.log(past.time);

	var currentWeather = past;
  	var dailyWeather = past;

	var xPos = 20;  
 	 var yPos = 40;
 	 var yGap = 60; 
 	 var textSizeLarge = 40;
 	 var textSizeSmall = 21;
 	 var borderGap = 40;
 	 var borderGraph = 4.5;
 	 var bottomGap = 22;
 	 angleMode(DEGREES);
 	 var width = (xcanvas-(2*borderGap));
 	 var length = (ycanvas - (2*borderGap)-bottomGap);
 	 var tabh = 20;


 	 var shapeWidth = (Math.abs(currentWeather.precipIntensity - currentWeather.humidity))*width;
if(currentWeather.precipIntensity > currentWeather.humidity){
  var shapex = (borderGap+borderGraph+((currentWeather.precipIntensity)*width))-(shapeWidth/2);
}  
else{
  var shapex = (borderGap+borderGraph+((currentWeather.humidity)*width))-(shapeWidth/2); 
}
var shapeHeight=(((past.temperatureMax - past.temperatureMin))/122)*length;  

var shapey = (borderGap+borderGraph+length-((past.temperatureMin+18)/122*length))-(shapeHeight/2);;


console.log(shapeWidth);
  fill(241, 121, 30, 50);
  //(0)
  //rotate(3.14);
  ellipse(shapex,shapey,shapeWidth,shapeHeight);
}




function twodays(data) {
	queryResult = data;
	var currentWeather = queryResult.currently;
	var pastTime = new Date(currentWeather.time*1000);
	pastTime.setDate(pastTime.getDate() + 2);
	console.log(pastTime.getTime()/1000);


	var url= 'https://api.darksky.net/forecast/c5ba1926039ed66a1ff75a8daa820cb8/42.361936, -71.097309, ' + pastTime.getTime()/1000;
	loadJSON(url, twodayo, 'jsonp');
}

function twodayo(data){
	queryResult = data;
	var past = queryResult.daily.data[0];
	console.log(past.time);

	var currentWeather = past;
  	var dailyWeather = past;

	var xPos = 20;  
 	 var yPos = 40;
 	 var yGap = 60; 
 	 var textSizeLarge = 40;
 	 var textSizeSmall = 21;
 	 var borderGap = 40;
 	 var borderGraph = 4.5;
 	 var bottomGap = 22;
 	 angleMode(DEGREES);
 	 var width = (xcanvas-(2*borderGap));
 	 var length = (ycanvas - (2*borderGap)-bottomGap);
 	 var tabh = 20;


 	 var shapeWidth = (Math.abs(currentWeather.precipIntensity - currentWeather.humidity))*width;
if(currentWeather.precipIntensity > currentWeather.humidity){
  var shapex = (borderGap+borderGraph+((currentWeather.precipIntensity)*width))-(shapeWidth/2);
}  
else{
  var shapex = (borderGap+borderGraph+((currentWeather.humidity)*width))-(shapeWidth/2); 
}
var shapeHeight=(((past.temperatureMax - past.temperatureMin))/122)*length;  

var shapey = (borderGap+borderGraph+length-((past.temperatureMin+18)/122*length))-(shapeHeight/2);;


console.log(shapeWidth);
  fill(241, 121, 30, 50);
  //(0)
  //rotate(3.14);
  ellipse(shapex,shapey,shapeWidth,shapeHeight);
}



function timemachine(data) {
	queryResult = data;
	var currentWeather = queryResult.currently;
	var pastTime = new Date(currentWeather.time*1000);
	pastTime.setDate(pastTime.getDate() + 1);
	console.log(pastTime.getTime()/1000);


	var url= 'https://api.darksky.net/forecast/c5ba1926039ed66a1ff75a8daa820cb8/42.361936, -71.097309, ' + pastTime.getTime()/1000;
	loadJSON(url, pastData, 'jsonp');
}

function pastData(data){
	queryResult = data;
	var past = queryResult.daily.data[0];
	console.log(past.time);

	var currentWeather = past;
  	var dailyWeather = past;

	var xPos = 20;  
 	 var yPos = 40;
 	 var yGap = 60; 
 	 var textSizeLarge = 40;
 	 var textSizeSmall = 21;
 	 var borderGap = 40;
 	 var borderGraph = 4.5;
 	 var bottomGap = 22;
 	 angleMode(DEGREES);
 	 var width = (xcanvas-(2*borderGap));
 	 var length = (ycanvas - (2*borderGap)-bottomGap);
 	 var tabh = 20;


 	 var shapeWidth = (Math.abs(currentWeather.precipIntensity - currentWeather.humidity))*width;
if(currentWeather.precipIntensity > currentWeather.humidity){
  var shapex = (borderGap+borderGraph+((currentWeather.precipIntensity)*width))-(shapeWidth/2);
}  
else{
  var shapex = (borderGap+borderGraph+((currentWeather.humidity)*width))-(shapeWidth/2); 
}
var shapeHeight=(((past.temperatureMax - past.temperatureMin))/122)*length;  

var shapey = (borderGap+borderGraph+length-((past.temperatureMin+18)/122*length))-(shapeHeight/2);;


console.log(shapeWidth);
  fill(241, 121, 30, 50);
  //(0)
  //rotate(3.14);
  ellipse(shapex,shapey,shapeWidth,shapeHeight);
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
  var textSizeLarge = 40;
  var textSizeSmall = 21;
  var borderGap = 40;
  var borderGraph = 4.5;
  var bottomGap = 22;
  angleMode(DEGREES);
  var width = (xcanvas-(2*borderGap));
  var length = (ycanvas - (2*borderGap)-bottomGap);
  var tabh = 20;

	push();
	textSize(textSizeSmall);
  	fill(0);
  	textAlign(RIGHT);
	text("L", 33, 505);
	pop();


  // List relevant items of information

  noStroke();
  fill(color('#003366'));
  rect( borderGap, borderGap,(xcanvas-(2*borderGap)),(ycanvas - (2*borderGap)-bottomGap));

  fill(255);
  rect(borderGap+borderGraph,borderGap+borderGraph,(xcanvas-(2*(borderGap+borderGraph))),(ycanvas - (2*(borderGap+borderGraph))-bottomGap));


  fill(0);
  // The location is not live data, just entered manually
  textSize(textSizeSmall);
  text(Math.round(currentWeather.temperature)+ " Degrees F",5, ycanvas-10);

  // The location is not live data, just entered manually

  text("Humidity (%)",borderGap, borderGap-5);
  fill(color('#003366'));
  rect(borderGap+borderGraph+((currentWeather.humidity)*width),borderGap,borderGraph,tabh);



  fill(0)
  text("H",borderGraph+borderGap+width, borderGap+borderGraph+12);
  fill(color('#003366'));
  rect(borderGap-borderGraph+width-tabh,borderGap+borderGraph+length-((dailyWeather.data[0].temperatureMax+18)/122*length),tabh,borderGraph);

  //text(dailyWeather.data[0].temperatureMax + " F",50 50);

  push();
  fill(0)
  textAlign(RIGHT);
  text("Precipitation (%)", width+borderGap, length+borderGap+(4.7*borderGraph));
  fill(color('#003366'));
  rect(borderGap+borderGraph+((currentWeather.precipIntensity)*width),borderGap+length-tabh-borderGraph+1,borderGraph,tabh);
  pop();
  
   //rotate(90);
  //fill(0)
  //text("Low (F)",borderGraph, borderGraph+borderGap+length-10);
  fill(color('#003366'));
  rect(borderGap+borderGraph-1,borderGap+borderGraph+length-((dailyWeather.data[0].temperatureMin+18)/122*length),tabh,borderGraph);
  var helpme= borderGraph+borderGap+length-10;
  console.log(helpme)

var shapeWidth = (Math.abs(currentWeather.precipIntensity - currentWeather.humidity))*width;
if(currentWeather.precipIntensity > currentWeather.humidity){
  var shapex = (borderGap+borderGraph+((currentWeather.precipIntensity)*width))-(shapeWidth/2);
}  
else{
  var shapex = (borderGap+borderGraph+((currentWeather.humidity)*width))-(shapeWidth/2); 
}
var shapeHeight=(((dailyWeather.data[0].temperatureMax - dailyWeather.data[0].temperatureMin))/122)*length;  

var shapey = (borderGap+borderGraph+length-((dailyWeather.data[0].temperatureMin+18)/122*length))-(shapeHeight/2);;


console.log(shapeWidth);
  fill(color('#003366'));
  //rotate(3.14);
  ellipse(shapex,shapey,shapeWidth,shapeHeight);

  // plus the next day's forcast

}



