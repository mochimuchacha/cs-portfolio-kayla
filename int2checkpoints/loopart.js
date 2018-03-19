/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400,400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(153, 204, 255);

draw = function() {

for(var i = 0; i < width; i+=10) {
        for(var j = 0; j < height; j+=10){
                fill(102, 255, 102);
                strokeWeight(random(2),random(2),random(2))
                var size = random(10);
                ellipse(i,j,size,size);
        }
}

ellipse(200,200,200,200);

mouseClicked = function() {
    fill(0);
    text(mouseX, mouseY);
    textSize(50);
    text(":)",188,210);

};

}
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);