


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
var xcanvas = 39.43*25
var ycanvas = 28.74*25
var polysides = 6;


function setup() {
  createCanvas(xcanvas, ycanvas);
  background(200);
  query();

    textAlign(LEFT);
var explaintxt = 10;
textSize(explaintxt);
text("a look at the demographics of community with", xcanvas/2+5, 17);
text("regards to multiracial people", xcanvas/2+5, 17+explaintxt);

textAlign(RIGHT);
textSize(20);
textStyle(BOLD);
text("Multiracial Statistics", xcanvas/2, 27);
textStyle(NORMAL);

  //explaination text
  var explaintxt = 10;
  var explaintxtheight = .1
  textSize(explaintxt);
  textAlign(RIGHT);
  text("Click on different a race to look at the community breakdown of", xcanvas/2, ycanvas-(ycanvas*explaintxtheight));
  text("the counties with the highest percentage multiracial people",xcanvas/2, ycanvas-(ycanvas*explaintxtheight)+explaintxt);
  text("of the chosen races.",xcanvas/2, ycanvas-(ycanvas*explaintxtheight)+(explaintxt*2));

  var posrighttxt = xcanvas/2 + 5;
  textAlign(LEFT);
  text("The yellow lines indicate multiracial people. The thicker the line,",posrighttxt, ycanvas-(ycanvas*explaintxtheight));
  text("the higher the population. The center of the polygon indicated the",posrighttxt, ycanvas-(ycanvas*explaintxtheight)+explaintxt);
  text("lowest point (0%) and the tips are the highest point (100%).", posrighttxt, ycanvas-(ycanvas*explaintxtheight)+(explaintxt*2) );
  text("The shapes contained in the polygon indicated the ", posrighttxt, ycanvas-(ycanvas*explaintxtheight)+(explaintxt*3));
  text("demographics of a county. The yellow is 2010, dark blue", posrighttxt, ycanvas-(ycanvas*explaintxtheight)+(explaintxt*4) ); 
  text("2000, and lighter blue 1990.", posrighttxt, ycanvas-(ycanvas*explaintxtheight)+(explaintxt*5)) ;

  fill(color('#34268e'));
  var r = 225;
  var h = (Math.sqrt(3))/2;
  var centerx = (xcanvas/2), centery = (ycanvas/2)-20;
  beginShape();
  vertex(centerx-r/2, centery-(r*h));
  vertex(centerx+r/2, centery-(r*h));
  vertex(centerx + r, centery);
  vertex(centerx+r/2, centery+(r*h));
  vertex(centerx-r/2, centery+(r*h));
  vertex(centerx - r, centery);
  vertex(centerx-r/2, centery-(r*h));
  endShape();

  noFill();
  stroke(color('#6451aa'));
  strokeWeight(3);
  var d = 50
  for (var i = 1; i <= 4; i++) {
  	var r = 225-d*i;
  	beginShape();
  	vertex(centerx-r/2, centery-(r*h));
  	vertex(centerx+r/2, centery-(r*h));
  	vertex(centerx + r, centery);
  	vertex(centerx+r/2, centery+(r*h));
  	vertex(centerx-r/2, centery+(r*h));
  	vertex(centerx - r, centery);
  	vertex(centerx-r/2, centery-(r*h));
  	endShape();
}

fill(color('#231e20'));
var r = 240;
	textSize(20);
stroke(color('#231e20'))
strokeWeight(1);
  textAlign(LEFT)
  text("White",centerx + r, centery);
	text("Hispanic / Latino",centerx+r/2, centery+(r*h)+10);
  text("American Indian",centerx+r/2, centery-(r*h) );
  textAlign(RIGHT)
  text("Asian",centerx - r, centery);
  text("Black / African American",centerx-r/2, centery+(r*h)+10);
  text("Pacific Islander",centerx-r/2, centery-(r*h));

}

//map will go here


// ------------------------------FUNCTIONS SEPERATE FROM INITIAL SETUP FOR LOOKS---------------------------------


/*
To run the query function:
pass in the parameters
*/



var user_key = 'ac34b99eefc48a3f26f41ba60f1f119f76f7fe73';

//white matrix: black(0), american indian(1), asian (2), pacific islander (3), other
//var whitematrix = 'P0080011,P0080012,P0080013,P0080014,P0080015';
var whiteblack = 'P0080011';
var county =  01;
var state = 06;


//try:
//	for i in some range(0-100):
//		call the api with base, url state = i, county = i, race = whatever you say it is -> query(blah blah blah)
//		Stores data in a dictionary
//else:
//	dont fuck up

//Check # of states
/*
function get_all_counties(race){
	try {
	for (var i = 0; i <= 60; i++) {
		for (var j = 0; i <= 254; i++) {
			query(state = i, county = j, race)
		}
	}}
	catch(err){
		console.log("This is the error" + err)
	}

}
*/

//county 001 003




// Run the API call
function query(state, county, race) {
	/*
	states 0 -67 
	PURPOSE:
	Call API to get data for parameter designations. Return data in hashmap object to parse in later functions
	INPUT:
	state - designated in API Call
	county - designated in API Call
	race - race designated in API Call
	OUTPUT:
	hashmap in form of {state: [county, race, numbers], 'California': ['Santa Cruz', 'white', 199181]}
	*/

	//url = 'https://api.census.gov/data/2010/sf1?get='+race+'&for=county:'+county+'&in=state:'+state+'&key=ac34b99eefc48a3f26f41ba60f1f119f76f7fe73';
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

	push();
	textAlign(CENTER);
	var titpos = xcanvas/2;
	textSize(20);
	text('Average County Demographic for the Highest Population of',titpos,70);
		textStyle(BOLD);
	text('Half White & Half Asians',titpos,90)
	pop();

	noStroke();
	fill(33,30,92,55);
  	var h = (Math.sqrt(3))/2;
  	var centerx = (xcanvas/2), centery = (ycanvas/2)-20;
	var r=225;

	for(var opac = 0; opac <=10; opac++){
	beginShape();
	var b = random();
  	vertex(centerx-(r/2)*b, centery-(r*h)*b); var p = random();
  	vertex(centerx+(r/2)*p, centery-(r*h)*p); var p = random();
  	vertex((centerx + r*p), centery); var p = random();
  	vertex(centerx+(r/2)*p, centery+(r*h)*p); var p = random();
  	vertex(centerx-(r/2)*p, centery+(r*h)*p);var p = random();
  	vertex(centerx - (r)*p, centery); var p = random();
  	vertex(centerx-(r/2)*b, centery-(r*h)*b); var p = random();
  	endShape();
  }
  push();
  noFill();
  stroke(color('#feea00'));
  strokeWeight(5);
  beginShape();
	var b = random();
  	vertex(centerx-(r/2)*b, centery-(r*h)*b); var p = random();
  	vertex(centerx+(r/2)*p, centery-(r*h)*p); var p = random();
  	vertex((centerx + r*p), centery); var p = random();
  	vertex(centerx+(r/2)*p, centery+(r*h)*p); var p = random();
  	vertex(centerx-(r/2)*p, centery+(r*h)*p);var p = random();
  	vertex(centerx - (r)*p, centery); var p = random();
  	vertex(centerx-(r/2)*b, centery-(r*h)*b); var p = random();
  	endShape();
  	pop();



}

function mousePressed() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
}

function changeBG() {
  noStroke();
fill(33,30,92,25);
  strokeWeight(3);
  var d = 50
  var r = 200;
  //for (var i = 1; i <= 4; i++) {
  	var r = 225-d*i;
  	beginShape();
  	vertex(centerx-r/2, centery-(r*h));
  	vertex(centerx+r/2, centery-(r*h));
  	vertex(centerx + r, centery);
  	vertex(centerx+r/2, centery+(r*h));
  	vertex(centerx-r/2, centery+(r*h));
  	vertex(centerx - r, centery);
  	vertex(centerx-r/2, centery-(r*h));
  	endShape();
//}
}



/*
function Get(){

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://citysdk.commerce.gov/", false);
xhr.send();
return xmlHttp.responseText
console.log(xmlHttp.responseText)

console.log(xhr.status);
console.log(xhr.statusText);

text(xhr.status,10,50);
text(xmlHttp.responseText,50,70);


	var url = url1;
	var result = url.getText();
	console.log(result);

	  var req = new XMLHttpRequest();
	req.open("GET",url1,false);
	req.send(null);
	console.log(req.responseText);
	return req.responseText;


url = 'http://citysdk.commerce.gov/variable-to-alias?variables=P0010001,P0030001'

loadJSON(url)

}

function draw(){

	//var json_obj = JSON.parse(Get(url1));
	//console.log("This is popiewlsdkc:" +json_obj.P0100019)


	textSize(40);
  textStyle(BOLD);
  text("There are " + numFloors.length + " people in a county in California", 20,40);
  text("There are " + minFloors + " hispanics" , 20,85);
  text("There are " + mostCommonFloorCount + "caucasians", 20,130);
   text("There are " + mostCommonFloorCount + "caucasian and hispanic mixes", 20,175);


 
   */
   




