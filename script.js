const display = document.getElementById("display");

const appendToDisplay = (input) => {
  display.value += input;
};

const deleteDisplay = () => {
  display.value = display.value.slice(0, -1);
};

const clearDisplay = () => {
  display.value = "";
};

const caculate = () => {
  try {
    display.value = eval(display.value);
  } catch (err) {
    return;
  }
};
