// get the total number of drum buttons
var button_quantity = document.querySelectorAll(".drum").length;

// add click event listeners to each drum button
for (var i = 0; i < button_quantity; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // get the inner HTML of the clicked button
    var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


// add keypress event listener to the entire document
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// function to play sound based on the key pressed or button clicked
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

// function to add and remove the "pressed" class for button animation
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
