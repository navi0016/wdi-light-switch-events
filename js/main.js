document.addEventListener('DOMContentLoaded', function() {

var body = document.querySelector('body');
var button = document.querySelector('button');
var text = document.querySelector('h1')


button.addEventListener('click',function () {
    if(button.className === "switch on") {
    button.className = "switch off";
    body.className= 'dark'
    text.innerText = "Hey, who turned off the lights?";
  } else if (button.className === "switch off") {
    button.className = 'switch on';
    body.className = 'light';
    text.innerText = "It's so bright in here!";

  };

});

});
