
var s = 0, m = 0, h = 0;
function setup() {
  createCanvas(500,500);
  textFont("Comic Sans MS");
	
}

function draw(){
background(255);

  var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds();
    var hour = ["twelve","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","one","two","three","four","five","six","seven","eight","nine","ten","eleven"];
	var minute = ["zero", "one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty-one","twenty-two","twenty-three","twenty-four","twenty-five","twenty-six","twenty-seven","twenty-eight","twenty-nine","thirty","thirty-one","thirty-two","thirty-three","thirty-four","thirty-five","thirty-six","thirty-seven","thirty-eight","thirty-nine","fourty","fourty-one","fourty-two","fourty-three","fourty-four","fourty-five","fourty-six","fourty-seven","fourty-eight","fourty-nine","fifty","fifty-one","fifty-two","fifty-three","fifty-four","fifty-five","fifty-six","fifty-seven","fifty-eight","fifty-nine", "sixty"];
	var second = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty-one","twenty-two","twenty-three","twenty-four","twenty-five","twenty-six","twenty-seven","twenty-eight","twenty-nine","thirty","thirty-one","thirty-two","thirty-three","thirty-four","thirty-five","thirty-six","thirty-seven","thirty-eight","thirty-nine","fourty","fourty-one","fourty-two","fourty-three","fourty-four","fourty-five","fourty-six","fourty-seven","fourty-eight","fourty-nine","fifty","fifty-one","fifty-two","fifty-three","fifty-four","fifty-five","fifty-six","fifty-seven","fifty-eight","fifty-nine", "sixty"];

	fill(0,0,255);
	textSize(10);
	text(nf(ms,[3],[0]),350, 250);

if( ms > 900){
	fill(0);
	textSize(20);
	text(seconds,320, 250);
	console.log(minutes);
}


if( seconds > 58){
	fill(255,0,0);
	textSize(100);
	text(minutes,200, 250);
}

if( minutes > 58){
	fill(255,0,0);
	textSize(200);
	push()
	textAlign(RIGHT);
	text(hours,90, 250)
	pop()
}
/*
textSize(100);
	text(minutes,200, 250);
textSize(200);
	text(hours,90, 250)

if( seconds > 10){
	fill(0);
	textSize(20);
	text(minute[minutes],350, 250);
	console.log(minutes);
}
*/


} 
