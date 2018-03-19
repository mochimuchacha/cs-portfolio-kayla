//creates variables and saves DOM elements to each one
var newColors = document.getElementById("newColors");
var colorsButton = document.getElementById("colorsButton");

//changes the background color when typed in
colorsButton.addEventListener("click", function(){
    document.body.style.backgroundColor=newColors.value;
});