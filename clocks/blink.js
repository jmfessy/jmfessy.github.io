
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
	var minute = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty-one","twenty-two","twenty-three","twenty-four","twenty-five","twenty-six","twenty-seven","twenty-eight","twenty-nine","thirty","thirty-one","thirty-two","thirty-three","thirty-four","thirty-five","thirty-six","thirty-seven","thirty-eight","thirty-nine","fourty","fourty-one","fourty-two","fourty-three","fourty-four","fourty-five","fourty-six","fourty-seven","fourty-eight","fourty-nine","fifty","fifty-one","fifty-two","fifty-three","fifty-four","fifty-five","fifty-six","fifty-seven","fifty-eight","fifty-nine"];
	var second = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty-one","twenty-two","twenty-three","twenty-four","twenty-five","twenty-six","twenty-seven","twenty-eight","twenty-nine","thirty","thirty-one","thirty-two","thirty-three","thirty-four","thirty-five","thirty-six","thirty-seven","thirty-eight","thirty-nine","fourty","fourty-one","fourty-two","fourty-three","fourty-four","fourty-five","fourty-six","fourty-seven","fourty-eight","fourty-nine","fifty","fifty-one","fifty-two","fifty-three","fifty-four","fifty-five","fifty-six","fifty-seven","fifty-eight","fifty-nine"];

if( minutes == 0){
	fill(255,0,0);
	textSize(100);
	text(hour[hours],250, 250)
}

if( seconds == 0){
	fill(0)
	textSize(50);
	text(minute[minutes],250, 250)
}

if( ms > 900){
	fill(0)
	textSize(20);
	text(second[seconds],350, 250)
}

	fill(0,0,255);
	textSize(10);
	text(nf(ms,[3],[0]),450, 250)


} 
