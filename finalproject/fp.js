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
var state


// ------------------------------SETUP---------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color(backgroundcolor));
  OGbottleimg = loadImage("OG.jpg");
  bottleimg =  loadImage("currentBottle.jpg");
}

//-------------------------------DATA---------------------------------------------------------------------------------------
//           60   61    62     63   64   65     66      67    68     69      70    71     72     73     74     75    76     77    78    79    80    81    82   83      84   85     86    87     88    89    90     91     92     93     94     95   96      97    98      99     00    01       02    03   04      05    06    07    08       09   10    11    12    13      14    15     16    17
var coke = [0.05, 0.05, 0.05, 0.05, 0.14, 0.14, 0.14,  0.14,  0.12,  0.12,  0.12,  0.12,  0.12,  0.12,  0.15,  0.15, 0.15,  0.15, 0.15, 0.15, 0.15, 0.15, 0.35, 0.35, 0.35, 0.16,  0.16, 0.16,  0.16, 0.16, 0.16,  0.16,  0.29 , 0.29,  0.17,  0.18, 0.18,  0.18,  0.18,  0.18,  0.18,  0.18,  0.18,  0.18, 0.18, 0.19,  0.19, 0.19,  0.19,  0.37, 0.37, 0.33, 0.33,  0.35,  0.32,  0.32,  0.32,  0.32 ];


// years
var chosenitem = coke;
var time = []; var timeN =[];

for (var i = 1; i <= chosenitem.length-1; i++) {
  var num = 2017-i;
  time.push(num.toString());
  timeN[i]=i;
}

//             1960
var inflate = [1.36,  202,  1.33,  1.64,  0.97,  1.92 , 3.46,  3.04,  4.72,  6.2, 5.57,  3.27,  3.41,  8.71,  12.34, 6.94,  4.86,  6.7, 9.02,  13.29, 12.52, 8.92,  3.83,  3.79,  3.95,  3.8, 1.1, 4.43,  4.42,  4.65,  6.11,  3.06,  2.9, 2.75,  2.67,  2.54,  3.32,  1.7, 1.61,  2.68,  3.39,  1.55,  2.38,  1.88,  3.26,  3.42,  2.54,  4.08,  0.09,  2.72,  1.5, 2.96,  1.74,  1.5, 0.76,  0.73,  2.07,  2.23]
var inflateN = [1.36,  0.37,  1.33,  1.64,  0.97,  1.92 , 3.46,  3.04,  4.72,  6.2, 5.57,  3.27,  3.41,  8.71,  12.34, 6.94,  4.86,  6.7, 9.02,  13.29, 12.52, 8.92,  3.83,  3.79,  3.95,  3.8, 1.1, 4.43,  4.42,  4.65,  6.11,  3.06,  2.9, 2.75,  2.67,  2.54,  3.32,  1.7, 1.61,  2.68,  3.39,  1.55,  2.38,  1.88,  3.26,  3.42,  2.54,  4.08,  0.09,  2.72,  1.5, 2.96,  1.74,  1.5, 0.76,  0.73,  2.07,  2.23]


//-------------------------------FUNCTION---------------------------------------------------------------------------------------

function draw(){
    background(color(backgroundcolor));
    fill(color(textcolor)); 
    var y = windowHeight-topdown+subTxtSize;

    push()

    var yl = y +5; strokeWeight(1)
    var xdimcokeL = windowWidth/leftindent; var xdimcokeR = windowWidth/leftindent+65;
    var xdimcornL = xdimcokeR +5; var xdimcornR = xdimcornR +65;
    var xdimoreoL = xdimcornR +5; var xdimoreoR = xdimoreoL+65;

      console.log(state)
      if(state == 0){
        line(xdimcokeL, yl, xdimcokeR, yl);
      }if(state == 1){
        line(xdimcornL, yl, xdimcornR, yl);
      }if(state == 2){
        line(xdimoreoL, yl, xdimoreoR, yl);
      }


      if(mouseY > yl-40){
      if( mouseX > xdimcokeL){
        if(mouseX < xdimcokeR){
        line(xdimcokeL, yl, xdimcokeR, yl)
        }
      }}
      line(xdimcokeL, yl, xdimcokeR, yl)
   // }
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
    var subTitle = 'America';
    textStyle(ITALIC); 
    text(subTitle, windowWidth/leftindent+400, topdown); 
    pop()

    push(); 
    var economicstat = 'Inflation (%)';
    text(economicstat, windowWidth/leftindent, economicstatdown);

    var itemstat = "Coca Cola Bottle Price ($)";
    text(itemstat, windowWidth/leftindent, windowHeight-economicstatdown+subTxtSize);

    textSize(detailTxt);
    var itemstat1 = "Coca Cola"; var istat1length = itemstat1.length; var cokedetails = "Coke Bottle = $0.05";
    var itemstat2 = "Corn Flakes";
    var itemstat3 = "Oreos";
    text(itemstat1, windowWidth/20, y), text(itemstat2, windowWidth/20+95, y); text(itemstat3,windowWidth/20+205,y);

    // PUT IN an "If" statement about the line underneath and what item stat you're using

    var lengthwordssmall = 350;
    text("Each symbol is representative of the value in 1960", windowWidth-windowWidth/20-lengthwordssmall,y);
    text(cokedetails, windowWidth-lengthwordssmall-(windowWidth/20),y+detailTxt+5);

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
    line(windowWidth/2+(offsetsides*5)+moneyx2, windowHeight/2+10, windowWidth/2+(offsetsides*5)+moneyx2, windowHeight/2-10)
    pop()


    //axis for coke
    push()
    stroke(color(redcolor)); strokeWeight(5);

    var xstart = windowWidth/leftindent+offsetsides; var xright =  windowWidth/2- offsetsides; var xlength = xright - xstart; 
    var ycenter = windowHeight/2; var ymax = economicstatdown + 10; var ylength = ycenter-ymax; var yscaler = .40;
    var xpos; var ypos; 
    var xprev = xstart ;var yprev = ycenter + (chosenitem[0]*ylength/yscaler);
    for (var i = 0; i <= timeN.length-1; i++) {
      xpos = xstart + (i*xlength/timeN.length);
      ypos = ycenter + (chosenitem[i]*ylength/yscaler);
      line(xprev,yprev,xpos,ypos);
      xprev = xpos;
      yprev = ypos;
    }

    pop()

    // axis for inflation
    push()
    stroke(color(moneygreen)); strokeWeight(5);

    var xstart = windowWidth/leftindent+offsetsides; var xright =  windowWidth/2- offsetsides; var xlength = xright - xstart; 
    var ycenter = windowHeight/2; var ymax = economicstatdown + 10; var ylength = ycenter-ymax; var yscaleri = 250;
    var xpos; var ypos; 
    var xprev = xstart ;var yprev = ycenter - (inflate[0]*ylength/yscaleri);
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
    text(time[time.length-1], windowWidth/leftindent+ offsetsides+2, windowHeight/2 + 40)
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
        }
      }
    }
  }
    if (mouseX > (windowWidth/2) - leftindent) {
      yearindex = timeN.length-1;
    }
    var itemprice = coke[yearindex];

  pop()

    var moniesN = 1; var bottlesN

    for (var i = 0; i < yearindex; i++) {
      moniesN = moniesN + (inflateN[i]*moniesN/100);
      bottlesN = Math.round(itemprice/coke[0]);
    }

    //neurath approach
    push()
    fill(color('#5d7f3a')); noStroke(); textAlign(CENTER); strokeWeight(0)
    rect(windowWidth/2+ (offsetsides*3),windowHeight/2-10-moneyy2,moneyx2,moneyy2); fill(255); text("$1",windowWidth/2+ (offsetsides*3)+moneyoffsetx,windowHeight/2-10-moneyoffsety);
    
        //bottle
    image(bottleimg, windowWidth/2+ (offsetsides*3)+ (bottleimg.width/4),windowHeight/2-10+(bottleimg.height/10), bottleimg.width/bottlescaler, bottleimg.height/bottlescaler)
    fill(color(redcolor)); text("$"+itemprice, windowWidth/2+ (offsetsides*3)+ (bottleimg.width/2.5),windowHeight/2+45+(bottleimg.height/bottlescaler) );
    pop()


    //monies stacking
      for (var i = 0; i <= moniesN; i++) {

        var x = windowWidth/2+ (offsetsides*7)+moneyx2+(i*(moneyx2+10));
        var y = windowHeight/2-10-moneyy2 +(0*(moneyy2+10));

        if(i >=4){
          var j = 4;
          var y = windowHeight/2-10-moneyy2 -((moneyy2+10));
          var x = windowWidth/2+ (offsetsides*7)+moneyx2+((i-j)*(moneyx2+10));
        }
        if(i >=8){
          var j = 8;
          var y = windowHeight/2-10-moneyy2 -(2*(moneyy2+10));
          var x = windowWidth/2+ (offsetsides*7)+moneyx2+((i-j)*(moneyx2+10));
        }
        if(i >=12){
          var j = 12;
          var y = windowHeight/2-10-moneyy2 -(3*(moneyy2+10));
          var x = windowWidth/2+ (offsetsides*7)+moneyx2+((i-j)*(moneyx2+10));
        }
        if(i >=16){
          var j = 16;
          var y = windowHeight/2-10-moneyy2 -(4*(moneyy2+10));
          var x = windowWidth/2+ (offsetsides*7)+moneyx2+((i-j)*(moneyx2+10));
        }
        if(i >=20){
          var j = 20;
          var y = windowHeight/2-10-moneyy2 -(5*(moneyy2+10));
          var x = windowWidth/2+ (offsetsides*7)+moneyx2+((i-j)*(moneyx2+10));
        }
        if(i >=24){
          var j = 24;
          var y = windowHeight/2-10-moneyy2 -(6*(moneyy2+10));
          var x = windowWidth/2+ (offsetsides*7)+moneyx2+((i-j)*(moneyx2+10));
        }
        if(i >=28){
          var j = 28;
          var y = windowHeight/2-10-moneyy2 -(7*(moneyy2+10));
          var x = windowWidth/2+ (offsetsides*7)+moneyx2+((i-j)*(moneyx2+10));
        }

        push()
        fill(color('#5d7f3a')); noStroke(); textAlign(CENTER); strokeWeight(0)
        rect(x,y,moneyx2,moneyy2); fill(255); text("$1",x+moneyoffsetx,y +moneyy2 -moneyoffsety); 
        pop()
      
      }



    //bottles stacking
      for (var b = 0; b <= bottlesN-1; b++) {
        var OGheight = (OGbottleimg.height)/bottlescaler; var OGwidth = (OGbottleimg.width)/bottlescaler;
          var x = windowWidth/2+ (offsetsides*9.5)+OGwidth+((b-0)*(OGwidth+10));
        var y = windowHeight/2+10+ OGheight +(0*(OGheight+10));

        if(b >=9){
          var j = 9;
          var y = windowHeight/2+10+OGheight +(1*(OGheight+10));
          var x = windowWidth/2+ (offsetsides*9.5)+OGwidth+((b-j)*(OGwidth+10));
        }
        if(b >=18){
          var j = 18;
          var y = windowHeight/2+10+OGheight +(2*(OGheight+10));
          var x = windowWidth/2+ (offsetsides*9.5)+OGwidth+((b-j)*(OGwidth+10));
        }
        if(b >=27){
          var j = 27;
          var y = windowHeight/2+10+OGheight +(3*(OGheight+10));
          var x = windowWidth/2+ (offsetsides*9.5)+OGwidth+((b-j)*(OGwidth+10));
        }
        if(b >=36){
          var j = 36;
          var y = windowHeight/2+10+OGheight +(4*(OGheight+10));
          var x = windowWidth/2+ (offsetsides*9.5)+OGwidth+((b-j)*(OGwidth+10));
        }
        if(b >=45){
          var j = 45;
          var y = windowHeight/2+10+OGheight +(5*(OGheight+10));
          var x = windowWidth/2+ (offsetsides*9.5)+OGwidth+((b-j)*(OGwidth+10));
        }

        image(OGbottleimg, x+2,y-83, bottleimg.width/bottlescaler, bottleimg.height/bottlescaler); 

      }
  }

function mouseClicked() {
      var yl = y +5;        var y = windowHeight-topdown+subTxtSize;
    var xdimcokeL = windowWidth/leftindent; var xdimcokeR = windowWidth/leftindent+65;
    var xdimcornL = xdimcokeR +5; var xdimcornR = xdimcornR +65;
    var xdimoreoL = xdimcornR +5; var xdimoreoR = xdimoreoL+65;
  if(mouseY > yl-40){
    if( mouseX > xdimcokeL){
    if(mouseX < xdimcokeR){
        var state = 0;
    }
    }
    if( mouseX > xdimcornL){
    if(mouseX < xdimcornR){
        var state = 1;
    }
    }
    if( mouseX > xdimoreoL){
    if(mouseX < xdimoreoR){
        var state = 2;
    }
    }
  }
}

  


// ------------------------------FUNCTIONS for INTERACTION---------------------------------