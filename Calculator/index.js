"use strict";

const outputScreen = document.querySelector(".screen");
const numberBtn = document.querySelectorAll(".number-btn");
const operatorBtn = document.querySelectorAll(".operator-btn");
const equalBtn = document.querySelector(".equal-btn");
const allClearBtn = document.querySelector(".all-clear");
const deleteBtn = document.querySelector(".delete");
const decimalBtn = document.querySelector(".decimal");

// displaying the clicked number on screen
numberBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let inputValue = e.target.innerText;
    outputScreen.textContent += inputValue;
  });
});

// displaying the clicked operator on screen

operatorBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let inputValue = e.target.innerText;
    if (outputScreen.textContent.at(-1) == "+") {
      outputScreen.textContent += "";
    } else if (outputScreen.textContent.at(-1) == "-") {
      outputScreen.textContent += "";
    } else if (outputScreen.textContent.at(-1) == "*") {
      outputScreen.textContent += "";
    } else if (outputScreen.textContent.at(-1) == "/") {
      outputScreen.textContent += "";
    } else {
      outputScreen.textContent += inputValue;
    }
  });
});

// showing decimal value on click
decimalBtn.addEventListener("click", (e) => {
  let inputValue = e.target.innerText;
  if (
    outputScreen.textContent.at(-1) == inputValue ||
    outputScreen.textContent.includes(".")
  ) {
    outputScreen.textContent += "";
  } else {
    outputScreen.textContent += inputValue;
  }
});

// displaying the evaluated value on equal button clik
equalBtn.addEventListener("click", () => {
  try {
    let result = eval(outputScreen.textContent);
    outputScreen.textContent = "";
    outputScreen.textContent = result;
  } catch {
    outputScreen.innerText = "";
    outputScreen.innerText = "Invaild Input";
  }
});

// clearing all values from screen
allClearBtn.addEventListener("click", () => (outputScreen.textContent = ""));

// clearing lastEntered value from screen
deleteBtn.addEventListener("click", () => {
  let string = outputScreen.textContent;
  let updatedString = string.slice(0, string.length - 1);
  outputScreen.textContent = updatedString;
});
