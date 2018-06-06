//variable for the button
var jump = document.getElementById("jump");
var shape = document.getElementById("shape");

//For the button to jump around, it needs to have a position of absolute.
jump.style.position="absolute";
shape.style.position="absolute";

/*
Math.random will create a random number 
between 0 and 1 which you multiple by 600 (or some other number).  
By adding "px" to the end, you turn it into a string and create 
something like "320px" which is what the positions require.
*/

//BOOP button that jumps accross screen when HAHA button is touched
jump.addEventListener("mousemove", function(){
    shape.style.top= Math.random() * 200 + "px"
    jump.style.bottom= Math.random() * 200 + "px"
    shape.style.left= Math.random() * 300 + "px"
    shape.style.right= Math.random() * 300 + "px"
});

//HAHA botton that jumps accross screen when BOOP button is touched
shape.addEventListener("mousemove", function(){
     jump.style.top= Math.random() * 200 + "px"
     shape.style.bottom=Math.random() * 200 + "px"
     jump.style.left= Math.random() * 300 + "px"
    jump.style.right= Math.random() * 300 + "px"
});

