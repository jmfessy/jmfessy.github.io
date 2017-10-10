var s = 0;
	var s = 0;
	var m = 0;
	var h = 0;
	var xpos = 0;
	var ypos = 21; 
	var gap = 21;
	var textLength = 25;

function setup() {
  createCanvas(500,500);
  textSize(20);
  textFont("Comic Sans MS");
  var linelength = 0; // assign each number a linelength
	var endCanvas = 500;
	background(0);
	
}

function draw(){

  var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
	fill(255);
	
if(seconds<=9){
	textLength = 12.5;	
}
if(seconds>=10){
	textLength =25;
}

//seconds
if (s != seconds){
	console.log(seconds)
	text(seconds,xpos,ypos)
	//text(str(myarray), 20, 20, 1000, 1000);
	s = seconds;
	xpos += textLength;
	console.log(textLength)
}

//minutes
if (m != minutes){
	console.log(minutes)
	text(minutes,xpos,ypos)
	//text(str(myarray), 20, 20, 1000, 1000);
	m = minutes;
	textLength = 25;
	xpos += textLength;
}


//hours
if (h != hours){
	console.log(hours)
	text(hours,xpos,ypos)
	//text(str(myarray), 20, 20, 1000, 1000);
	h = hours;
	textLength = 25;
	xpos += textLength;
}

if( xpos >= 500){
	xpos = 0;
	ypos += gap;
}

if ( ypos >= 500){
	ypos = 21;
	background(0);
}


//if (seconds > 9) {
//	linelength = linelength + 2
//	}
//	else{
//	linelength = linelength + 1
//	}
//if (linelength > endCanvas ){
//	linelength = 0;
//}


} 