// -----------------------------GLOBAL VARIABLES FOR SETUP & DATA--------------------------------

var backgroundcolor ="#e9e6dd";
var leftindent = 20;
var headerTxtSize = 35; var subTxtSize = headerTxtSize/1.5; var detailTxt = headerTxtSize/2.5;
var topdown = 70, economicstatdown = topdown*2;

// ------------------------------SETUP---------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color(backgroundcolor));
}

// ------------------------------GLOBAL VARIABLES FOR LOOKS---------------------------------
  



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
    var economicstat = 'Inflation';
    text(economicstat, windowWidth/leftindent, economicstatdown);

    var itemstat = "Coca Cola Bottle";
    text(itemstat, windowWidth/leftindent, windowHeight-economicstatdown);

    textSize(detailTxt);
    var itemstat1 = "Coca Cola"; var istat1length = itemstat1.length; var cokedetails = "Coke Bottle = $0.05";
    var itemstat2 = "Corn Flakes";
    var itemstat3 = "Oreos";
    text(itemstat1, windowWidth/20, windowHeight-topdown), text(itemstat2, windowWidth/20+95, windowHeight-topdown); text(itemstat3,windowWidth/20+205,windowHeight-topdown);

    // PUT IN an "If" statement about the line underneath and what item stat you're using

    var lengthwordssmall = 350;
    text("Each symbol is representative of the value in 1960", windowWidth-windowWidth/20-lengthwordssmall,windowHeight-topdown);
    text(cokedetails, windowWidth-lengthwordssmall-(windowWidth/20),windowHeight-topdown+detailTxt);

    pop()

    //graph
    line(windowWidth/leftindent,windowHeight/2,windowWidth-windowWidth/leftindent,windowHeight/2)


  }

// ------------------------------FUNCTIONS for INTERACTION---------------------------------
