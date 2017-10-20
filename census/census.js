
var user_key = 'ac34b99eefc48a3f26f41ba60f1f119f76f7fe73';
var url1= 'https://api.census.gov/data/2010/sf1?get=P0100019,P0030001&for=county:001&in=state:06&key=ac34b99eefc48a3f26f41ba60f1f119f76f7fe73';


var queryResult;

function setup() {
  createCanvas(320*2, 568*2);
  background(255);
query();
}


// Run the API call
function query() {

  // URL for querying
  var url= 'https://api.census.gov/data/2010/sf1?get=P0100019,P0050011,P0030001,P0040003&for=county:001&in=state:06&key=ac34b99eefc48a3f26f41ba60f1f119f76f7fe73';

  // Query the URL, set a callback
  // 'jsonp' is needed for security
  loadJSON(url, gotData, 'json');

}

// Request is completed
function gotData(data) {
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


	textSize(20);
  textStyle(BOLD);
  text("There are " + totpop + " people in a county in California", 20,40);
  text("There are " + hispanics + " hispanics" , 20,85);
  text("There are " + multi + " caucasians", 20,130);
   text("There are " + whitepop + " caucasian and hispanic multiracial", 20,175);



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
   




