console.log("events.js loaded");

var outputTarget = document.getElementById("output-target");
var headline = document.getElementById("page-title");
var inputField = document.getElementById("keypress-input");
var pig = document.getElementById("guinea-pig");
var colorBtn = document.getElementById("add-color");
var largeBtn = document.getElementById("make-large");
var borderBtn = document.getElementById("add-border");
var roundBtn = document.getElementById("add-rounding");

document.addEventListener("click", function(event) {
	console.log(event.target);
	outputTarget.innerHTML = "You clicked on the " + event.target.innerHTML + " section";

});

headline.addEventListener("mouseover", function() {
	outputTarget.innerHTML = "You hovered of the headline, boss";
});

headline.addEventListener("mouseleave", function() {
	outputTarget.innerHTML = "Where you go?";
});

inputField.addEventListener("keyup", function() {
	outputTarget.innerHTML = inputField.value;
});

colorBtn.addEventListener("click", function() {
	outputTarget.classList.toggle("color");
});

largeBtn.addEventListener("click", function() {
	outputTarget.classList.toggle("large");
});

borderBtn.addEventListener("click", function() {
	outputTarget.classList.toggle("border");
});

roundBtn.addEventListener("click", function() {
	outputTarget.classList.toggle("rounded");
});


