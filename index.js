const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function square() {
  try {
    let value = eval(display.value);
    display.value = value * value;
  } catch (error) {
    display.value = "Error";
  }
}

function cube() {
  try {
    let value = eval(display.value);
    display.value = value * value * value;
  } catch (error) {
    display.value = "Error";
  }
}
