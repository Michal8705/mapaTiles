var test1 = 0
var test2 = 0
var test3 = 0
var licznik = 100
var licznik2 = 300
var licznikAdd = 100
var mouseXTmp = 0
var mouseYTmp = 0
var wW = 0;
var wH = 0;
var numberOfTilesX = 0;
var numberOfTilesY = 0;
var tilesInXLine = 60;
var mouseChangeX = 500
var mouseChangeY = 9500
var mouseX2 = 0
var mouseY2 = 0
var mouseClick = 0
var firstTileX = 1
var firstTileY = 100
var tileToPreload = 101
var preloadCounter = 0

for (var a = 100; a < 6200; a = a + licznikAdd) {
  for (var b = 1; b < 61; b++) {
   var actualTile = a + b 
   eval('tilea'+actualTile+';');
  } 
 }


function mouseClicked(){
  // mouseX2 = mouseX 
  // mouseClick = 1
}


function mousePressed() {
//   if (mouseClick == 0){
// //    mouseChangeX = abs(mouseChangeX+(mouseX2 - mouseX))
//   }
//   mouseX2 = mouseX;
 }
 


function preload() {
  
 eval('tilea'+tileToPreload+' = loadImage("Tiles/'+tileToPreload+'.JPG");');
}

function setup() {
//  createCanvas(5000, 2500);


}

function draw() {
  wW = document.documentElement.clientWidth;
  wH = document.documentElement.clientHeight; 
 createCanvas(wW, wH);
 background(100,100,100,100)
  var actualWidth = 0
  var actualHeight = 0

  if (mouseIsPressed === true) {
   mouseChangeX = mouseChangeX-(mouseX-mouseX2)
   mouseChangeY = max(0,min(29958-wH,mouseChangeY-(mouseY-mouseY2)))
  }
  if (mouseChangeX < 0){
    mouseChangeX = 29904+mouseChangeX
  }
  if (mouseChangeX > 29904){
    mouseChangeX = mouseChangeX-29904
  }
 
  numberOfTilesX = Math.floor(wW/500)+2
  numberOfTilesY = (Math.floor(wH/500)+2)*licznikAdd
  firstTileX = Math.floor(mouseChangeX/500)+1
  firstTileY = (Math.floor(mouseChangeY/500)+1)*100
  var correctorX = (Math.floor(mouseChangeX/500)+1)*500-mouseChangeX-500
  var correctorY = (Math.floor(mouseChangeY/500)+1)*500-mouseChangeY-500
  mouseX2 = mouseX
  mouseY2 = mouseY
  test1 = firstTileX




  for (var x = firstTileX; x < firstTileX+numberOfTilesX; x = x + 1) {

    var actualTileX = x
    if (actualTileX > 60){
      actualTileX = actualTileX-60
    }
    actualHeight = 0

    for (var y = firstTileY; y < firstTileY+numberOfTilesY+licznikAdd; y = y + licznikAdd) {

      var actualTileY = y
      // if (actualTileY > 6000){
      //   actualTileY = 6000
      // }

      if (1 == 1){
  
       test2 = actualHeight
      }

      
      var actualTile = actualTileX+y
      var nowTilea;
      var possitionX = actualWidth+correctorX;
      var possitionY = actualHeight+correctorY;
      eval('nowTilea = (typeof tilea'+actualTile+' == "object");');
      tileToPreload = actualTile
      if (!nowTilea){
        preload()
      }
      if (nowTilea){
        eval('image(tilea'+actualTile+','+possitionX+','+possitionY+');');
      }

      if (actualTileY == 5900){
        actualHeight = actualHeight+458
      }else{
        actualHeight = actualHeight+500 
      }
    
    } 

    if (actualTileX == 60){
      actualWidth = actualWidth+404
    }else{
       actualWidth = actualWidth+500 
    }    
  }

  if (typeof tilea5101 == "object") {
 // test1 = tilea101.width
  }

  textSize(30);
  stroke(255,0,0,255)
  text(test1,100,100)
  text(test2,100,120)
  text(test3,100,140)


}