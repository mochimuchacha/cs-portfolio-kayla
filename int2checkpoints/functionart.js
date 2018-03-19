/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(2000, 2000);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

  background(153, 204, 255);
  
    drawPiggy = function(x, y){
    
    fill(255, 153, 204);
    ellipse(x,y,150,150);
    ellipse(x,y + 30,75,65);
    
    fill(255, 102, 204);
    ellipse(x + 20, y +30,20,25);
    ellipse(x - 20, y +30,20,25)
    
    fill(0);
    ellipse(x - 30, y - 5,20,20);
    ellipse(x + 30, y - 5,20,20);
    
    fill(255);
    ellipse(x - 25, y - 7,10,10);
    ellipse(x + 34.5, y - 7,10,10);
    
    fill(255, 102, 204);
    triangle(x + 50, y - 50, x +100, y - 50, x + 85, y);
    triangle(x - 100, y - 50, x - 50, y - 50, x - 85, y);
    }
    
   mouseClicked = function() {
        
    drawPiggy(mouseX,mouseY);
    
};
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);