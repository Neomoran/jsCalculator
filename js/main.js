//get all buttons
const btns = document.querySelectorAll(".btn");
//get the input i.e .screen
const screen = document.querySelector(".screen");
//get the equal sign button
const equalBtn = document.querySelector(".btn-equal");
//get the clear button
const clearBtn = document.querySelector(".btn-clear");

//Loop through all other buttons then add event listener
btns.forEach(function(everyBtn) {
  everyBtn.addEventListener("click", function() {
    //on click show the number or value on each button
    //shown by the value of the attribute.
    let number = everyBtn.getAttribute("data-num");
    screen.value += number;
  });
});

//Making the equal button do its work
equalBtn.addEventListener("click", function() {
  //if value on screen is empty, print 'enter values'
  if (screen.value === "") {
    screen.value = `please enter a value`; //template literal
  } else {
    //if there are values on screen, evaluate using the eval()
    let evaluation = eval(screen.value);
    screen.value = evaluation;
  }
});

//Make the clear button do its work too
clearBtn.addEventListener("click", function() {
  screen.value = "";
});
