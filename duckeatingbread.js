/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(1360, 640);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var duck = [];

draw = function() {
    noCursor(); 
    noStroke();
    
    
//pond background
    background(153, 204, 255);
//pond
    fill(51, 153, 255);
    rect(0, 450, 3000, 300, 100);
//land
    fill(0, 153, 51);
    rect(0,440,90,300,100);
    
//flower 1
    fill(217, 102, 255);
    ellipse(20,440,15,15);
    ellipse(28,445,15,15);
    ellipse(25,455,15,15);
    ellipse(14,455,15,15);
    ellipse(12,445,15,15);
    fill(128, 0, 64);
    ellipse(20,448,10,10);
//flower 2
    fill(230, 0, 115);
    ellipse(60,490,15,15);
    ellipse(68,495,15,15);
    ellipse(65,505,15,15);
    ellipse(54,505,15,15);
    ellipse(52,495,15,15);
    fill(255, 255, 77);
    ellipse(60,498,10,10);
//flower 3
    fill(255, 204, 230);
    ellipse(74,455,10,10);
    ellipse(80,460,10,10);
    ellipse(77,467,10,10);
    ellipse(69,467,10,10);
    ellipse(67,459,10,10);
    fill(255, 166, 77);
    ellipse(73,462,8,8);
    

//clouds
    for(var i = 100; i < width; i+=300) {
        for(var j = 0; j < 400; j+=250){
                fill(255,255,255)
                ellipse(i,j,200,100);
                ellipse(i-50,j-35,100,110)
                ellipse(i+50,j-20,100,100)
                ellipse(i-55,j-15,100,100)
                ellipse(i-5,j-35,100,130)
        }
}

//sun
    fill(255, 255, 0)
    ellipse(10,0,200,200)
    
    
//bread crumbs on top
for(var k=0; k < width; k+=200) {
    fill(204, 153, 102);
    rect(k+300,490,20,20,10);
}

//bread crumbs on bottom
for(var m=0; m < width; m+=200) {
    fill(204, 153, 102);
    rect(m+190,560,20,20,10)
}

//duck eating bread
    function duckEats (x,y){
    fill(51, 153, 255);
    rect(x+90,y-44,20,20);
}

//duck bite square appear
for(var i = 0; i < duck.length; i++){
    duckEats(duck[i].x,duck[i].y);
}

 mouseClicked = function(){
        
    duck.push({x:mouseX,y:mouseY});
    }

//duck with no wings
if(mouseY>400){
        fill(255, 255, 0);
        triangle(mouseX + 40,mouseY-30,mouseX-50,mouseY+10,mouseX-90,mouseY-35); //tail
        ellipse(mouseX,mouseY,130,100); //body
}

//duck with wings
else if(mouseY<400){ 
        fill(255, 255, 0);
       triangle(mouseX+40,mouseY-30,mouseX-50,mouseY+10,mouseX-90,mouseY-35); //tail
       ellipse(mouseX,mouseY,130,100); //body
        ellipse(mouseX-10,mouseY-50,40,90);//wingpart1
       ellipse(mouseX-30,mouseY-50,20,50);//wingpart2
}

//duck head
        fill(255, 153, 51)
        ellipse(mouseX+90,mouseY-53,35,30); //bill
        fill(255, 255, 0);
        ellipse(mouseX+55,mouseY-50,70,70); //head
        fill(0)
        ellipse(mouseX+70,mouseY-57,15,20); //eye



}

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);