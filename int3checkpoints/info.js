//variables for each image 
var piglet= document.getElementById("piglet");
var pooh= document.getElementById("pooh");
//the display div
var display= document.getElementById("display");

//piglet pic action item
piglet.addEventListener("click", function(){
    display.innerHTML="piglet is the classic cartoon sidekick of Pooh Bear."
});

//pooh pic action item
pooh.addEventListener("click", function(){
    display.innerHTML="pooh is the main character in The Adventures of Winnie the Pooh."
    
});