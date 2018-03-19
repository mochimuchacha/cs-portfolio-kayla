/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(2);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

    var xPos= 2;
    var yPos= 2;
    var transperency = 80
    var size = 10
    var width= 290

draw = function() {
    
    //line of puple circles
    noStroke();
    fill(221,160,221,transperency);
    ellipse(xPos,yPos,width, size);
    xPos=xPos+3;
    yPos=yPos+3;
    transperency = transperency+5
    
     //line of puple circles
    noStroke();
    fill(221,160,221,transperency);
    ellipse(xPos,yPos,width,size);
    xPos=xPos+3;
    yPos=yPos+3;
    transperency = transperency+5
    
    //line of purple rectangles
     fill(221,160,221, transperency);
    rect(height-xPos,yPos,size,size,);
    xPos=xPos+3;
    yPos=yPos+3;

    //line of blue circles
    fill(135,206,250, transperency)
    ellipse (height-xPos,yPos,width,size);
    xPos=xPos+3;
    yPos=yPos+3;
    
    //line of blue rectangles
     fill(135,206,250);
    rect(height-xPos,yPos,size,size);
    xPos=xPos+3;
    yPos=yPos+3;
    
     //line of small blue circles
    fill(135,206,250,transperency)
    ellipse (xPos,yPos,5,5);
    xPos=xPos+5;
    yPos=yPos+5;
    size=size-2
    
};    
    
    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
