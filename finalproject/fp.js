//http://localhost:8000/Final%20Project/fp.html

// -----------------------------GLOBAL VARIABLES FOR SETUP & DATA--------------------------------

var backgroundcolor ="#e9e6dd"; var redcolor = "#fd0319";
var leftindent = 20;
var headerTxtSize = 35; var subTxtSize = headerTxtSize/1.5; var detailTxt = headerTxtSize/2.5;
var topdown = 70, economicstatdown = topdown*2; 

var textcolor = '#404041'

//money
var moneyx2 = 91.5, moneyy2= 45, moneyoffsety = (moneyy2/3), moneyoffsetx = +(moneyx2/2);

//bottles
var OGbottleimg
var bottleimg
var bottlescaler = 3;
var moneygreen = '#5d7f3a'
var state = 0
var itemprice
var cerealimg
var oreoimg

// ------------------------------SETUP---------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color(backgroundcolor));
  OGbottleimg = loadImage("OG.jpg");
  bottleimg =  loadImage("currentBottle.jpg");
  cerealimg = loadImage("cereal.jpg")
  oreoimg = loadImage("oreo.jpg")
}

//-------------------------------DATA---------------------------------------------------------------------------------------
//           60   61    62     63   64   65     66      67    68     69      70    71     72     73     74     75    76     77    78    79    80    81    82   83      84   85     86    87     88    89    90     91     92     93     94     95   96      97    98      99     00    01       02    03   04      05    06    07    08       09   10    11    12    13      14    15     16    17
var coke = [0.05, 0.05, 0.05, 0.05, 0.14, 0.14, 0.14,  0.14,  0.12,  0.12,  0.12,  0.12,  0.12,  0.12,  0.15,  0.15, 0.15,  0.15, 0.15, 0.15, 0.15, 0.15, 0.35, 0.35, 0.35, 0.16,  0.16, 0.16,  0.16, 0.16, 0.16,  0.16,  0.29 , 0.29,  0.17,  0.18, 0.18,  0.18,  0.18,  0.18,  0.18,  0.18,  0.18,  0.18, 0.18, 0.19,  0.19, 0.19,  0.19,  0.37, 0.37, 0.33, 0.33,  0.35,  0.32,  0.32,  0.32,  0.32 ]; 
//          	 60   	   61    62       63  	 64  	 65    	 66    	  67     68       69     70   	  71     72       73     74   	  75     76      77 	   78    79   	 80   	 81       82     83      84      85      86       87     88      89      90      91      92      93      94       95     96       97     98      99      00      01      02      03       04      05    06        07      08     09       10      11     12      13      14      15       16    17
var cflakes = [ 0.27,	0.35,	0.27,	0.35,	0.44,	0.38,	0.38,	0.44,	0.39,	0.44,	0.38,	0.47,	0.37,	0.38,	0.43,	0.68,	0.69,	0.75,	0.86,	0.89,	0.94,	1.12,	0.13,	0.99,	1.35,	1.09,	1.39,	1.50,	1.48,	1.69,	1.99,	2.19,	1.99,	1.29,	2.18,	2.18,	2.18,	2.59,	2.29,	2.29,	2.99,	2.99,	2.99,	2.99,	4.49,	4.49,	4.49,	4.49,	4.49,	4.49,  4.49,    5.69,	5.69,	5.69,	4.19,	4.19,	4.19,	2.70 ];
var oreo = 		[0.23,	0.41,	0.44,	0.4,	0.35,	0.39,	0.39,	0.44,	0.41,	0.46,	0.43,	0.53,	0.44,	0.47,	0.53,	0.85,	0.75,	0.85,	0.76,	1.01,	0.95,	1.28,	1.25,	1.40,	1.29,	1.64,	1.22,	1.43,	1.79,	1.79,	6.46,	5.74,	1.43,	2.95,	1.79,	3.27,	3.27,	3.27,	3.27,	3.27,	3.27,	3.27,	3.27,	3.27,	2.15,	2.15,	2.15,	2.15,	3.43,	3.43,	3.43,	3.43,	4.26,	4.62,	4.62,	4.62,	4.62,	2.88];

// years
var chosenitem = coke;

//             1960
var inflate = [1.36,  202,  1.33,  1.64,  0.97,  1.92 , 3.46,  3.04,  4.72,  6.2, 5.57,  3.27,  3.41,  8.71,  12.34, 6.94,  4.86,  6.7, 9.02,  13.29, 12.52, 8.92,  3.83,  3.79,  3.95,  3.80, 1.10, 4.43,  4.42,  4.65,  6.11,  3.06,  2.9, 2.75,  2.67,  2.54,  3.32,  1.70, 1.61,  2.68,  3.39,  1.55,  2.38,  1.88,  3.26,  3.42,  2.54,  4.08,  0.09,  2.72,  1.5, 2.96,  1.74,  1.5, 0.76,  0.73,  2.07,  2.23]
var inflateN = [1.36,  0.37,  1.33,  1.64,  0.97,  1.92 , 3.46,  3.04,  4.72,  6.2, 5.57,  3.27,  3.41,  8.71,  12.34, 6.94,  4.86,  6.7, 9.02,  13.29, 12.52, 8.92,  3.83,  3.79,  3.95,  3.8, 1.1, 4.43,  4.42,  4.65,  6.11,  3.06,  2.9, 2.75,  2.67,  2.54,  3.32,  1.7, 1.61,  2.68,  3.39,  1.55,  2.38,  1.88,  3.26,  3.42,  2.54,  4.08,  0.09,  2.72,  1.5, 2.96,  1.74,  1.5, 0.76,  0.73,  2.07,  2.23]

//-------------------------------FUNCTION---------------------------------------------------------------------------------------

function draw(){
    background(color(backgroundcolor));
    fill(color(textcolor)); 
    var y = windowHeight-topdown+subTxtSize;

    push()

    strokeWeight(1)
    var y = windowHeight-topdown+subTxtSize; var yl = y +5;  
    var xdimcokeL = windowWidth/leftindent; var xdimcokeR = windowWidth/leftindent+65;
    var xdimcornL = xdimcokeR +30; var xdimcornR = xdimcokeR +105;
    var xdimoreoL = xdimcornR +35; var xdimoreoR = xdimoreoL+38;

      if(state == 0){
        line(xdimcokeL, yl, xdimcokeR, yl);
        var chosenprice =coke;
        var yscaler = .40
        var yscaleri = 250;
        var itemstat = "Price of a Bottle of Coca Cola ($)";
      }if(state == 255){
        line(xdimcornL, yl, xdimcornR, yl);
        var chosenprice = cflakes
        var yscaler = 5.6
        var yscaleri = 258;
        var itemstat = "Price of a Serving of Corn Flakes ($)";
       // chosenitem = cflakes;
      }if(state == 2){
        line(xdimoreoL, yl, xdimoreoR, yl);
        var chosenprice = oreo;
        var yscaler = 6.46
        var yscaleri = 263.5;
        var itemstat = "Price of a Pack of Oreos ($)";
        //chosenitem = oreo;
      }

    var time = []; var timeN =[];
    for (var i = 1; i <= chosenitem.length-2; i++) {
  		var num = 2017-i;
  		time.push(num.toString());
  		timeN[i]=i;
	}

	if(mouseY > y-15){
  		if(mouseY < y+10){
			if( mouseX > xdimcokeL){
    			if(mouseX < xdimcokeR){
    				line(xdimcokeL, yl, xdimcokeR, yl);
        			//rect(xdimcokeL,y-15,xdimcokeR-xdimcokeL,20)
    			}
   			 }
    		if( mouseX > xdimcornL){
    			if(mouseX < xdimcornR){
    				line(xdimcornL, yl, xdimcornR, yl)
        			//rect(xdimcornL,y-15,xdimcornR-xdimcornL,20)
   				 }
    		}
    		if( mouseX > xdimoreoL){
    			if(mouseX < xdimoreoR){
    				line(xdimoreoL,yl, xdimoreoR,yl)
    			}
    		}
		}
  	}
      
    pop()

    //title
    push() 
    textSize(headerTxtSize);
    var title = 'Individual Economics';
    text(title, windowWidth/leftindent, topdown);
    var titlelength = title.length;
    pop();

    //sub text
    textSize(subTxtSize);

    push(); 
    var subTitle = 'in America';
    textStyle(ITALIC); 
    text(subTitle, windowWidth/leftindent+340, topdown); 
    pop()

    push(); 
    var economicstat = 'Inflation (%)';
    text(economicstat, windowWidth/leftindent, economicstatdown);

    text(itemstat, windowWidth/leftindent, windowHeight-economicstatdown+subTxtSize);

    textSize(detailTxt);
    text("Inflation is something everyone is aware of, but don’t truly understand in context. This graph provides the context by comparing to everyday items.", windowWidth/leftindent,topdown+detailTxt+8)
    var itemstat1 = "Coca Cola"; var istat1length = itemstat1.length; var cokedetails = "Coke Bottle = $0.05";
    var itemstat2 = "Corn Flakes";
    var itemstat3 = "Oreos";
    text(itemstat1, windowWidth/20, y), text(itemstat2, windowWidth/20+95, y); text(itemstat3,windowWidth/20+205,y);

    textAlign(CENTER); textSize(subTxtSize);
//    text("19NA", windowWidth-windowWidth/leftindent-62, economicstatdown);
    var xthi =   windowWidth-windowWidth/leftindent-moneyx2-(leftindent*5.5)+5;
    text("1960", xthi, economicstatdown);

    // PUT IN an "If" statement about the line underneath and what item stat you're using

    //var lengthwordssmall = 350;
    //text("$1 in 1995 is worth $10 in1960", windowWidth-windowWidth/20-lengthwordssmall,windowHeight-economicstatdown+subTxtSize);
    //text(cokedetails, windowWidth-lengthwordssmall-(windowWidth/20),y+detailTxt+5);
    pop()

        //GRAPH

    //graph Lines
    push()
    line(windowWidth/leftindent,windowHeight/2,windowWidth-windowWidth/leftindent,windowHeight/2)

    var offsetsides = 20; strokeWeight(2);  textAlign(CENTER); stroke(color(textcolor));
    line(windowWidth/2- offsetsides, windowHeight/2+10, windowWidth/2 - offsetsides, windowHeight/2-10); // RIGHT  windowWidth/2- offsetsides
    line(windowWidth/leftindent+offsetsides, windowHeight/2+10, windowWidth/leftindent+offsetsides, windowHeight/2-10) // LEFT  windowWidth/leftindent+offsetsides


    //text("2017", windowWidth/2- offsetsides+2, windowHeight/2 +40)
    //text(time[time.length-1], windowWidth/leftindent+ offsetsides+2, windowHeight/2 + 40)
    //money 
    //line(windowWidth/2+(offsetsides*5)+moneyx2, windowHeight/2+10, windowWidth/2+(offsetsides*5)+moneyx2, windowHeight/2-10)
    fill(backgroundcolor); noStroke()
    rect(windowWidth/2, (windowHeight/2) - 10, 2*offsetsides, 20)
    pop()


    //axis for coke
    push()
    stroke(color(redcolor)); strokeWeight(5);

    var xstart = windowWidth/leftindent+offsetsides; var xright =  windowWidth/2- offsetsides; var xlength = xright - xstart; 
    var ycenter = windowHeight/2; var ymax = economicstatdown + 10; var ylength = ycenter-ymax; 
    var xpos; var ypos; 
    var xprev = xstart ;var yprev = ycenter + (chosenitem[0]*ylength/yscaler);
    for (var i = 0; i <= timeN.length-1; i++) {
      xpos = xstart + (i*xlength/timeN.length);
      ypos = ycenter + (chosenprice[i]*ylength/yscaler);
      line(xprev,yprev,xpos,ypos);
      xprev = xpos;
      yprev = ypos;
    }

    pop()

    // axis for inflation
    push()
    stroke(color(moneygreen)); strokeWeight(5);

    //var xstart = windowWidth/leftindent+offsetsides; var xright =  windowWidth/2- offsetsides; var xlength = xright - xstart; var ycenter = windowHeight/2; var ymax = economicstatdown + 10; var ylength = ycenter-ymax; 
    xprev = xstart; 
    yprev = ycenter - (inflate[0]*ylength/yscaleri);
    for (var i = 1; i <= timeN.length; i++) {
      xpos = xstart + (i*xlength/timeN.length);
      ypos = ypos - (inflate[i]*ylength/yscaleri);
      line(xprev,yprev,xpos,ypos);
      xprev = xpos;
      yprev = ypos;
    }
    pop()


    push()
    var offsetsides = 20; strokeWeight(2);  textAlign(CENTER);
    text("2017", windowWidth/2- offsetsides+2, windowHeight/2 +40)
    text("1960", windowWidth/leftindent+ offsetsides+2, windowHeight/2 + 40)
    pop()

    push()
    strokeWeight(2); fill(color(textcolor));; var scrubheight = windowHeight/2- economicstatdown; textAlign(CENTER); textSize(headerTxtSize); stroke(color(textcolor));

    //scrubber
    if (mouseX < (windowWidth/2) - leftindent) {
      if (mouseY < (windowHeight/2) + scrubheight) {
        if(mouseY > (windowHeight/2) - scrubheight) {
          if(mouseX > windowWidth/leftindent+leftindent){

            line(mouseX, windowHeight/2-10, mouseX, windowHeight/2+10);
            var scrublen = (windowWidth/2) - leftindent - (windowWidth/leftindent+leftindent); var leftx = windowWidth/leftindent+leftindent; var mousepos = mouseX-leftx;
            var mouseper = (mousepos)/scrublen;
            noStroke(); 
            var yearindex = Math.round(mouseper*timeN.length)
            text((Math.round(mouseper*timeN.length)+1960).toString(),mouseX,windowHeight/2 - 20);
            stroke(64,64,65,30);
            line(mouseX, (windowHeight/2) + scrubheight -20, mouseX, (windowHeight/2) - scrubheight +20);

            var moniesN = 1; ; var bottlesN
   			 for (var i = 0; i < yearindex; i++) {
      			moniesN = moniesN + (inflateN[i]*moniesN/100);
      			itemprice = chosenprice[yearindex];
      			bottlesN = Math.round(itemprice/chosenprice[0]); 
    		}
    		noStroke()
            textAlign(RIGHT); textSize(subTxtSize)
    		text("$1 in " + "1960" +" is worth $"+ Math.round((moniesN.toString())*100)/100 + " in "+(Math.round(mouseper*timeN.length)+1960).toString(), windowWidth-windowWidth/leftindent, windowHeight-economicstatdown+subTxtSize);
        	
        	textAlign(CENTER); 
        	text((Math.round(mouseper*timeN.length)+1960).toString(), windowWidth-windowWidth/leftindent-62, economicstatdown);
        }
      }
    }
  }

    // on the right of the center
 	var moniesN = 1; ; var bottlesN
   	for (var i = 0; i < yearindex; i++) {
     	moniesN = moniesN + (inflateN[i]*moniesN/100);
     	itemprice = chosenprice[yearindex];
      	bottlesN = Math.round(itemprice/chosenprice[0]); 
   	}


// right side of the page
    if (mouseX > (windowWidth/2) - leftindent-3.5) {
      yearindex = timeN.length-1;
      push()
      textAlign(RIGHT); textSize(subTxtSize); noStroke()
     text("$1 in " + "1960" + " is worth $8.19 in 2017", windowWidth-windowWidth/leftindent, windowHeight-economicstatdown+subTxtSize);
     textAlign(CENTER)
     text("2017", windowWidth-windowWidth/leftindent-62, economicstatdown);
     if(state == 0){
        moniesN =8.19;
     	bottlesN = 6;
      }if(state == 255){
        moniesN =8.19;
    	bottlesN = 16;
      }if(state == 2){
        moniesN =8.19;
    	bottlesN = 20;
      }
      pop()
    }
    if (mouseX < windowWidth/leftindent+19) {
      yearindex = timeN.length-1;
      push()
      textAlign(RIGHT); textSize(subTxtSize); noStroke()
      text("$1 in " + "1960" + " is worth $8.19 in 2017", windowWidth-windowWidth/leftindent, windowHeight-economicstatdown+subTxtSize);
      textAlign(CENTER)
      text("2017", windowWidth-windowWidth/leftindent-62, economicstatdown);
      if(state == 0){
        moniesN =8.19;
     	bottlesN = 6;
      }if(state == 255){
        moniesN =8.19;
    	bottlesN = 16;
      }if(state == 2){
        moniesN =8.19;
    	bottlesN = 20;
      }
      pop()
    }
    if (mouseY < economicstatdown) {
    	yearindex = timeN.length-1;
      push()
      textAlign(RIGHT); textSize(subTxtSize); noStroke()
      text("$1 in " + "1960" + " is worth $8.19 in 2017", windowWidth-windowWidth/leftindent, windowHeight-economicstatdown+subTxtSize);
      textAlign(CENTER)
      text("2017", windowWidth-windowWidth/leftindent-62, economicstatdown);
      if(state == 0){
        moniesN =8.19;
     	bottlesN = 6;
      }if(state == 255){
        moniesN =8.19;
    	bottlesN = 16;
      }if(state == 2){
        moniesN =8.19;
    	bottlesN = 20;
      }
      pop()
    }
    if (mouseY > windowHeight-economicstatdown-10) {
    	yearindex = timeN.length-1;
      push()
      textAlign(RIGHT); textSize(subTxtSize); noStroke()
      text("$1 in " + "1960" + " is worth $8.19 in 2017", windowWidth-windowWidth/leftindent, windowHeight-economicstatdown+subTxtSize);
      textAlign(CENTER)
      text("2017", windowWidth-windowWidth/leftindent-62, economicstatdown);
      if(state == 0){
        moniesN =8.19;
     	bottlesN = 6;
      }if(state == 255){
        moniesN =8.19;
    	bottlesN = 16;
      }if(state == 2){
        moniesN =8.19;
    	bottlesN = 20;
      }
      pop()
    }
    
    itemprice  = chosenprice[yearindex];
    textAlign(RIGHT);
    console.log(bottlesN)


  pop()


  //neurath approach
  push()
    fill(color('#5d7f3a')); noStroke(); textAlign(CENTER); strokeWeight(0)
    //rect(windowWidth/2+ (offsetsides*3),windowHeight/2-10-moneyy2,moneyx2,moneyy2); 
	rect(windowWidth-windowWidth/leftindent-moneyx2-leftindent, windowHeight/2-10-moneyy2,moneyx2,moneyy2); 
    fill(255); text("$1", windowWidth-windowWidth/leftindent-moneyx2-leftindent+moneyoffsetx,windowHeight/2-10-moneyoffsety); 

  //bottle
    //image(bottleimg, windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler-5,windowHeight/2-10+(bottleimg.height/10), bottleimg.width/bottlescaler, bottleimg.height/bottlescaler)
  //  fill(color(redcolor)); text("$"+itemprice, windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler+12,windowHeight/2+45+(bottleimg.height/bottlescaler) );
   	 
   	var linedivx = windowWidth-windowWidth/leftindent-moneyx2- offsetsides*2;
   	stroke(64,64,65,30); strokeWeight(2)
    line(linedivx, (windowHeight/2) + scrubheight -20, linedivx, (windowHeight/2) - scrubheight +20);

    fill(color(backgroundcolor)); textSize(detailTxt); textAlign(CENTER, RIGHT)
    var moneyyearx = windowWidth/2+ (offsetsides*3)+moneyx2-12; var moneyyeary = windowHeight/2-15;

    // if(yearindex+60 >=100){
    //   if(yearindex+60 >=110){
    // text(("'"+ (yearindex-40)).toString(), moneyyearx, moneyyeary);
    // } else{
    // text(("'0"+ (yearindex-40)).toString(), moneyyearx, moneyyeary);
    // }
    // }
    // else{
    // text(("'"+ (yearindex+60)).toString(), moneyyearx, moneyyeary);
    // }
  pop()

   	var linedivx = windowWidth-windowWidth/leftindent-moneyx2- offsetsides*2;

    //monies stacking
      for (var i = 0; i <= Math.round(moniesN)-1; i++) {

        var x =linedivx-(moneyx2+ offsetsides)*(i+1); ///2+ (offsetsides*7)+moneyx2+(i*(moneyx2+10));
        var y = windowHeight/2-10-moneyy2 +(0*(moneyy2+10));

        if(i >=4){
          var j = 3;
          var y = windowHeight/2-10-moneyy2 -((moneyy2+10));
          var x =linedivx-(moneyx2+ offsetsides)*(i-j);        }
        if(i >=8){
          var j = 8;
          var y = windowHeight/2-10-moneyy2 -(2*(moneyy2+10));
          var x =linedivx-(moneyx2+ offsetsides)*(i-j);
        }
        if(i >=12){
          var j = 12;
          var y = windowHeight/2-10-moneyy2 -(3*(moneyy2+10));
          var x =linedivx-(moneyx2+ offsetsides)*(i-j);
        }
        if(i >=16){
          var j = 16;
          var y = windowHeight/2-10-moneyy2 -(4*(moneyy2+10));
          var x =linedivx-(moneyx2+ offsetsides)*(i-j);;
        }
        if(i >=20){
          var j = 20;
          var y = windowHeight/2-10-moneyy2 -(5*(moneyy2+10));
          var x =linedivx-(moneyx2+ offsetsides)*(i-j);
        }
        if(i >=24){
          var j = 24;
          var y = windowHeight/2-10-moneyy2 -(6*(moneyy2+10));
          var x =linedivx-(moneyx2+ offsetsides)*(i-j);
        }
        if(i >=28){
          var j = 28;
          var y = windowHeight/2-10-moneyy2 -(7*(moneyy2+10));
          var x =linedivx-(moneyx2+ offsetsides)*(i-j);
        }

        push()
        fill(color('#5d7f3a')); noStroke(); textAlign(CENTER); strokeWeight(0)
        rect(x,y,moneyx2,moneyy2); fill(255); text("$1",x+moneyoffsetx,y +moneyy2 -moneyoffsety); 

        fill(color(backgroundcolor)); textSize(detailTxt); textAlign(CENTER, RIGHT)
        var stackyearx = x+moneyx2-12; var stackyeary = y+moneyy2-5;
        //text("'60", stackyearx, stackyeary);
        pop()
      }

    //bottles stacking
    if (state ==0) {
    	push()

   		image(bottleimg, windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler-5,windowHeight/2-10+(bottleimg.height/10), bottleimg.width/bottlescaler, bottleimg.height/bottlescaler)
    	textAlign(CENTER)
    	fill(color(redcolor)); text("$"+itemprice, windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler+12,windowHeight/2+45+(bottleimg.height/bottlescaler) );

    	pop()
      for (var b = 0; b <= bottlesN-1; b++) {
        var OGheight = (OGbottleimg.height)/bottlescaler; var OGwidth = (OGbottleimg.width)/bottlescaler;

        var x = windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler-2 - (offsetsides*4)-OGwidth;
        x = x - (17 + OGwidth)*b;
        var y = windowHeight/2+(bottleimg.height/10) - 10;

       // var x = windowWidth/2+ (offsetsides*9.5)+OGwidth+((b-0)*(OGwidth+10));
       // var y = windowHeight/2+10+ OGheight +(0*(OGheight+10));

        if(b >=8){
          var j = 8;
          y = y + OGheight + 5;
          x = windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler-2 - (offsetsides*4)-OGwidth;
          x = x - ((OGwidth +17)*(b-j));
        }
        if(b >=16){
          var j = 16;
          y = y + (OGheight + 5);
          x = windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler-2 - (offsetsides*4)-OGwidth;
          x = x - ((OGwidth +17)*(b-j));        }
        if(b >=24){
          var j = 24;
          y = y + (OGheight + 5);
          x = windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler-2 - (offsetsides*4)-OGwidth;
          x = x - ((OGwidth +17)*(b-j));
        }
        if(b >=32){
          var j = 32;
          y = y + (OGheight + 5);
          x = windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler-2 - (offsetsides*4)-OGwidth;
          x = x - ((OGwidth +17)*(b-j));
        }
        if(b >=40){
          var j = 40;
          y = y + (OGheight + 5);
          x = windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler-2 - (offsetsides*4)-OGwidth;
          x = x - ((OGwidth +17)*(b-j));
        }
        image(OGbottleimg, x,y, bottleimg.width/bottlescaler, bottleimg.height/bottlescaler); 
      }
  	}

  	if (state ==255) {
    	push()

    	var cornx = 40, corny = 60; noStroke(); fill(color(redcolor)); 

   		//image(bottleimg, windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler-5,windowHeight/2-10+(bottleimg.height/10), bottleimg.width/bottlescaler, bottleimg.height/bottlescaler)
    	rect(windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler-5,windowHeight/2+(bottleimg.height/10)+8, cornx,corny);
    	textAlign(CENTER)
    	text("$"+itemprice, windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler+12,windowHeight/2+45+(bottleimg.height/bottlescaler) );

    	
      for (var b = 0; b <= bottlesN-1; b++) {
        var OGheight = (OGbottleimg.height)/bottlescaler; var OGwidth = (OGbottleimg.width)/bottlescaler;

        var x = windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler-2 - (offsetsides*4)-OGwidth;
        x = x - (27 + OGwidth)*b;
        var y = windowHeight/2+(bottleimg.height/10) - 10;

        if(b >=7){
          var j = 7;
          y = y + OGheight - 17;
          x = windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler-2 - (offsetsides*4)-OGwidth;
          x = x - ((OGwidth +27)*(b-j));
        }
        if(b >=14){
          var j = 14;
          y = y + OGheight - 17;
          x = windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler-2 - (offsetsides*4)-OGwidth;
          x = x - ((OGwidth +27)*(b-j));        }
        if(b >=21){
          var j = 21;
          y = y + OGheight - 17;
          x = windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler-2 - (offsetsides*4)-OGwidth;
          x = x - ((OGwidth +27)*(b-j));
        }
        if(b >=32){
          var j = 32;
          y = y + OGheight - 17;
          x = windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler-2 - (offsetsides*4)-OGwidth;
          x = x - ((OGwidth +27)*(b-j));
        }
        if(b >=40){
          var j = 40;
          y = y + OGheight - 17;
          x = windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler-2 - (offsetsides*4)-OGwidth;
          x = x - ((OGwidth +27)*(b-j));
        }
        //image(cerealimg, x,y, bottleimg.width/bottlescaler, bottleimg.height/bottlescaler); 
        rect(x,y,cornx, corny)
      }
      pop()
  	}

  	if (state ==2) {
    	push()

   		//image(bottleimg, windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler-5,windowHeight/2-10+(bottleimg.height/10), bottleimg.width/bottlescaler, bottleimg.height/bottlescaler)
    	fill(color(redcolor)); var oreoc = 50; noStroke();
    	ellipse(windowWidth-windowWidth/leftindent-oreoc-13, windowHeight/2+(bottleimg.height/10+35), oreoc, oreoc)
    	textAlign(CENTER)
    	text("$"+itemprice, windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/bottlescaler+12,windowHeight/2+45+(bottleimg.height/bottlescaler) );
    	oreoc =45;
    	
      for (var b = 0; b <= bottlesN-1; b++) {
      	var oreoscaler = 5;
        var OGheight = (oreoimg.height)/oreoscaler; var OGwidth = (oreoimg.width)/oreoscaler;

        var x = windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/oreoscaler-4 - (offsetsides)-OGwidth;
        x = x - (2+ OGwidth)*b;
        var y = windowHeight/2+(bottleimg.height/10) +5;

       // var x = windowWidth/2+ (offsetsides*9.5)+OGwidth+((b-0)*(OGwidth+10));
       // var y = windowHeight/2+10+ OGheight +(0*(OGheight+10));

        if(b >=6){
          var j = 6;
       	  x = windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/oreoscaler-4 - (offsetsides)-OGwidth;
          x = x - (2+ OGwidth)*(b-j);
          y = y + (OGheight + 23);
        }
        if(b >=12){
          var j = 12;
       	  x = windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/oreoscaler-4 - (offsetsides)-OGwidth;
          x = x - (2+ OGwidth)*(b-j);
          y = y + (OGheight + 23);
             }
        if(b >=18){
          var j = 18;
       	  x = windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/oreoscaler-4 - (offsetsides)-OGwidth;
          x = x - (2+ OGwidth)*(b-j);
          y = y + (OGheight + 23);
        }
        if(b >=24){
          var j = 24;
       	  x = windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/oreoscaler-4 - (offsetsides)-OGwidth;
          x = x - (2+ OGwidth)*(b-j);
          y = y + (OGheight + 23);
        }
        if(b >=40){
          var j = 40;
       	  x = windowWidth-windowWidth/leftindent-moneyx2-leftindent+bottleimg.width/oreoscaler-4 - (offsetsides)-OGwidth;
          x = x - (2+ OGwidth)*(b-j);
          y = y + (OGheight + 23);
        }
        //image(oreoimg, x,y, bottleimg.width/oreoscaler*2, bottleimg.height/oreoscaler); 
       	ellipse(x,y,oreoc,oreoc)
      }
      pop()
  	}

  }


function mouseClicked() {
    var yl = y +5;        var y = windowHeight-topdown+subTxtSize;
    var xdimcokeL = windowWidth/leftindent; var xdimcokeR = windowWidth/leftindent+65;
   

    var xdimcornL = xdimcokeR +30; var xdimcornR = xdimcokeR +110;
   // rect(xdimcornL,y-15,xdimcornR-xdimcornL,20)

    var xdimoreoL = xdimcornR +30; var xdimoreoR = xdimoreoL+50;
     //rect(xdimoreoL,y-15,xdimoreoR-xdimoreoL,20)

  if(mouseY > y-15){
  	if(mouseY < y+10){
		if( mouseX > xdimcokeL){
    		if(mouseX < xdimcokeR){
        		state = 0;
        		//rect(xdimcokeL,y-15,xdimcokeR-xdimcokeL,20)
    		}
   		 }
    	if( mouseX > xdimcornL){
    		if(mouseX < xdimcornR){
        		state = 255;
        		//rect(xdimcornL,y-15,xdimcornR-xdimcornL,20)
        		//value = 0;
   			 }
    	}
    	if( mouseX > xdimoreoL){
    		if(mouseX < xdimoreoR){
        		state = 2;
    		}
    	}
	}
  }
}
