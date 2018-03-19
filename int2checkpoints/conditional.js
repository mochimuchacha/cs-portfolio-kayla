/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


draw = function() {
background();
  
    noStroke();
    noCursor();
  
    
    if (mouseX<100){
            rect(mouseX,mouseY,40,40)      
            fill(204, 153, 255);
    }
    else if(mouseX<200){
            ellipse(mouseX,mouseY,50,50)
            fill(255, 153, 204)
    }
    else if(mouseX<300){
            rect(mouseX,mouseY,40,40)
            fill(102, 153, 255)
    }
    else if(mouseX<400){
            ellipse(mouseX,mouseY,50,50)
            fill(102, 255, 153)
    }

   
}
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
