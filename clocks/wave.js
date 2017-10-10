
var xspacing = 10;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 75.0; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
var cyvalues;
var camplitude = 250;

function setup() {
  createCanvas(500, 500);
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
  cyvalues = new Array(floor(w/xspacing));
}

function draw() {
    var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds();
  background(0);
  calcWave();
  renderWave();
  amplitude = minutes*4.1;
}

function calcWave() { 
    // hour determines the amplitude

  // Increment theta (try different values for 
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }

  for (var i = 0; i < cyvalues.length; i++) {
    cyvalues[i] = sin(x)*camplitude;
    x+=dx;
  }
  
}

function renderWave() {
     var date = new Date();
    var hours = date.getHours();

if (hours > 12) {
    hours = hours - 12;
}


fill(255);
  // A simple way to draw the wave with an ellipse at each location
  var j = 1;
  if ( j < hours) {
    for (var x = 0; x < yvalues.length; x++) {
        ellipse((x*xspacing)-(20*j), height/2+cyvalues[x], 20, 20);
    }
}
var j = 2;
  if ( j < hours) {
    for (var x = 0; x < yvalues.length; x++) {
        ellipse((x*xspacing)-(20*j), height/2+cyvalues[x], 20, 20);
    }
}
var j = 3;
  if ( j < hours) {
    for (var x = 0; x < yvalues.length; x++) {
        ellipse((x*xspacing)-(20*j), height/2+cyvalues[x], 20, 20);
    }
}
var j = 4;
  if ( j < hours) {
    for (var x = 0; x < yvalues.length; x++) {
        ellipse((x*xspacing)-(20*j), height/2+cyvalues[x], 20, 20);
    }
}
var j = 5;
  if ( j < hours) {
    for (var x = 0; x < yvalues.length; x++) {
        ellipse((x*xspacing)-(20*j), height/2+cyvalues[x], 20, 20);
    }
}
var j = 6;
  if ( j < hours) {
    for (var x = 0; x < yvalues.length; x++) {
        ellipse((x*xspacing)-(20*j), height/2+cyvalues[x], 20, 20);
    }
}
var j = 7;
  if ( j < hours) {
    for (var x = 0; x < yvalues.length; x++) {
        ellipse((x*xspacing)-(20*j), height/2+cyvalues[x], 20, 20);
    }
}
var j = 8;
  if ( j < hours) {
    for (var x = 0; x < yvalues.length; x++) {
        ellipse((x*xspacing)-(20*j), height/2+cyvalues[x], 20, 20);
    }
}
var j = 9;
  if ( j < hours) {
    for (var x = 0; x < yvalues.length; x++) {
        ellipse((x*xspacing)-(20*j), height/2+cyvalues[x], 20, 20);
    }
}
var j = 10;
  if ( j < hours) {
    for (var x = 0; x < yvalues.length; x++) {
        ellipse((x*xspacing)-(20*j), height/2+cyvalues[x], 20, 20);
    }
}
var j = 11;
  if ( j < hours) {
    for (var x = 0; x < yvalues.length; x++) {
        ellipse((x*xspacing)-(20*j), height/2+cyvalues[x], 20, 20);
    }
}
var j = 12;
  if ( j < hours) {
    for (var x = 0; x < yvalues.length; x++) {
        ellipse((x*xspacing)-(20*j), height/2+cyvalues[x], 20, 20);
    }
}


fill(255,0,0,)
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/2+yvalues[x], 15, 15);
  }


  
  }

