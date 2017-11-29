//http://localhost:8000/Final%20Project/fp.html

// -----------------------------GLOBAL VARIABLES FOR SETUP & DATA--------------------------------

var backgroundcolor ="#e9e6dd"; var redcolor = "#fd0319";
var leftindent = 20;
var headerTxtSize = 35; var subTxtSize = headerTxtSize/1.5; var detailTxt = headerTxtSize/2.5;
var topdown = 70, economicstatdown = topdown*2;

//money
var moneyx2 = 90, moneyy2= 45, moneyoffsety = (moneyy2/3), moneyoffsetx = +(moneyx2/2);

//bottles
var OGbottleimg
var bottleimg
var bottlescaler = 3;


// test code
var moniesN = 14;
var bottlesN = 17;
var itemprice = "$0.80";

// ------------------------------SETUP---------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color(backgroundcolor));
  OGbottleimg = loadImage("OG.jpg");
  bottleimg =  loadImage("currentBottle.jpg");
}

//-------------------------------FUNCTION---------------------------------------------------------------------------------------

function draw(){
    background(color(backgroundcolor));
    fill(0);

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
    text(itemstat, windowWidth/leftindent, windowHeight-economicstatdown);

    textSize(detailTxt);
    var itemstat1 = "Coca Cola"; var istat1length = itemstat1.length; var cokedetails = "Coke Bottle = $0.05"; var beginning = "1960"; 
    var itemstat2 = "Corn Flakes";
    var itemstat3 = "Oreos";
    text(itemstat1, windowWidth/20, windowHeight-topdown), text(itemstat2, windowWidth/20+95, windowHeight-topdown); text(itemstat3,windowWidth/20+205,windowHeight-topdown);

    // PUT IN an "If" statement about the line underneath and what item stat you're using

    var lengthwordssmall = 350;
    text("Each symbol is representative of the value in 1960", windowWidth-windowWidth/20-lengthwordssmall,windowHeight-topdown);
    text(cokedetails, windowWidth-lengthwordssmall-(windowWidth/20),windowHeight-topdown+detailTxt+5);

    pop()

    //graph
    push()
    line(windowWidth/leftindent,windowHeight/2,windowWidth-windowWidth/leftindent,windowHeight/2)

    var offsetsides = 20; strokeWeight(2)
    line(windowWidth/2- offsetsides, windowHeight/2+10, windowWidth/2 - offsetsides, windowHeight/2-10); textAlign(CENTER)
    text("2017", windowWidth/2- offsetsides+2, windowHeight/2 +40)
    line(windowWidth/leftindent+offsetsides, windowHeight/2+10, windowWidth/leftindent+offsetsides, windowHeight/2-10)
    text(beginning, windowWidth/leftindent+ offsetsides+2, windowHeight/2 + 40)
    line(windowWidth/2+(offsetsides*5)+moneyx2, windowHeight/2+10, windowWidth/2+(offsetsides*5)+moneyx2, windowHeight/2-10)

    pop()

    //neurath approach
    push()
    fill(color('#5d7f3a')); noStroke(); textAlign(CENTER); strokeWeight(0)
    rect(windowWidth/2+ (offsetsides*3),windowHeight/2-10-moneyy2,moneyx2,moneyy2); fill(255); text("$1",windowWidth/2+ (offsetsides*3)+moneyoffsetx,windowHeight/2-10-moneyoffsety);
    
        //bottle
    image(bottleimg, windowWidth/2+ (offsetsides*3)+ (bottleimg.width/4),windowHeight/2-10+(bottleimg.height/10), bottleimg.width/bottlescaler, bottleimg.height/bottlescaler)
    fill(color(redcolor)); text(itemprice, windowWidth/2+ (offsetsides*3)+ (bottleimg.width/2.5),windowHeight/2+45+(bottleimg.height/bottlescaler) );
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

        push()
        fill(color('#5d7f3a')); noStroke(); textAlign(CENTER); strokeWeight(0)
        rect(x,y,moneyx2,moneyy2); fill(255); text("$1",x+moneyoffsetx,y +moneyy2 -moneyoffsety); 
        pop()
      
      }
    

    //bottles stacking
      for (var b = 0; b <= bottlesN; b++) {
        var OGheight = (OGbottleimg.height)/bottlescaler; var OGwidth = (OGbottleimg.width)/bottlescaler;
          var x = windowWidth/2+ (offsetsides*9.5)+OGwidth+((b-0)*(OGwidth+10));
        var y = windowHeight/2+10+ OGheight +(0*(OGheight+10));

        if(b >=8){
          var j = 8;
          var y = windowHeight/2+10+OGheight +(1*(OGheight+10));
          var x = windowWidth/2+ (offsetsides*9.5)+OGwidth+((b-j)*(OGwidth+10));
        }
        if(b >=16){
          var j = 16;
          var y = windowHeight/2+10+OGheight +(2*(OGheight+10));
          var x = windowWidth/2+ (offsetsides*9.5)+OGwidth+((b-j)*(OGwidth+10));
        }
        if(b >=24){
          var j = 24;
          var y = windowHeight/2+10+OGheight +(3*(OGheight+10));
          var x = windowWidth/2+ (offsetsides*9.5)+OGwidth+((b-j)*(OGwidth+10));
        }
        if(b >=32){
          var j = 32;
          var y = windowHeight/2+10+OGheight +(4*(OGheight+10));
          var x = windowWidth/2+ (offsetsides*9.5)+OGwidth+((b-j)*(OGwidth+10));
        }
        if(b >=40){
          var j = 40;
          var y = windowHeight/2+10+OGheight +(5*(OGheight+10));
          var x = windowWidth/2+ (offsetsides*9.5)+OGwidth+((b-j)*(OGwidth+10));
        }

        image(OGbottleimg, x+2,y-83, bottleimg.width/bottlescaler, bottleimg.height/bottlescaler); 

      }
    


  }

// ------------------------------FUNCTIONS for INTERACTION---------------------------------