// Selection of an Element

var a = document.querySelector("h1");
console.log(a);

// Changing HTML

// 1st Method
document.querySelector("h1").innerHTML = "hui";

// 2nd Method
var a = document.querySelector("h1");
a.innerHTML = "Changed HTML";

// Changing CSS

var a = document.querySelector("h1");
a.style.color = "chartreuse";
a.style.backgroundColor = "black"; //Use camelCase

// Selection of an Element
var a = document.querySelector("p");
console.log(a);

// Changing HTML
var a = document.querySelector("p");
a.innerHTML = "Changed HTML for Paragraph";

// Changing CSS
var a = document.querySelector("p");
a.style.color = "darkmagenta";
a.style.backgroundColor = "black";

// Event Listner

var a = document.querySelector("h1");

a.addEventListener("click", function () {
  a.innerHTML = "Soon You Will Be In Top IT Companies";
  a.style.color = "Yellow";
  a.style.backgroundColor = "Black";
});

// Four Pillar Of DOM

var x = document.querySelector("h3");

// Selection of an Element

var x = document.querySelector("h3");

// Changing HTML

var x = document.querySelector("h3");
a.innerHTML = "Selection of an Element";

// Changing CSS

var x = document.querySelector("h3");
x.style.color = "blue";
x.style.backgroundColor = "black";

// Event Listner

var x = document.querySelector("h3");
x.addEventListener("click", function () {
  x.innerHTML = "Changed HTML and CSS with the help of Event Listner";
  x.style.color = "pink";
  x.style.backgroundColor = "black";
});


var h = document.querySelectorAll("h2");
console.log(h);
