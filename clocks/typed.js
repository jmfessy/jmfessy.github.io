function setup() {
  // create canvas
  createCanvas(500, 500);
  textSize(15);
  noStroke();

}

function draw() {
	 var hour = ["12","1","2","3","4","5","6","7","8","9","10","11","12","1","2","3","4","5","6","7","8","9","10","11"];
  var minute = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"];
  var second = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60"];
  var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    xhour = 30,
    ystart = 500,
    dy = -42,
    ms = date.getMilliseconds();
    background(255)

    h = hours;
if (hours > 12){
    var h = hours-12;
  }

textSize(40);
  for (i = 0; i <= h; i++) {
    text("hour",xhour,ystart+(dy*i))
  }


textSize(9.75)

var xmin = 125, ymin = ystart, dymin =8;

for (var i = 0; i <=minutes; i++) {
  text("minute", xmin,ymin-(dymin*i))
}

textSize(6)
var xsec = 160, ysec = ystart, dysec = 8;
for (var i = 0; i <=seconds; i++) {
  text("second", xsec,ysec-(dysec*i))
}

}
