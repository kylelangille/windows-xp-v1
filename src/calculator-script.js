"use strict";

let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");
const backspaceBtn = document.getElementById("backspace-btn");
const allClearBtn = document.getElementById("all-clear-btn");
const equalsBtn = document.getElementById("equals-btn");
const decimalBtn = document.getElementById("decimal-btn");
const previousOperand = document.getElementById("previous-operand");
const currentOperand = document.getElementById("current-operand");

numberBtns.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
});

operationBtns.forEach((button) => {
  button.addEventListener("click", () => setOperation(button.textContent));
});

const appendNumber = (number) => {
  if (currentOperand.textContent === "0" || shouldResetScreen) resetScreen();
  currentOperand.textContent += number;
};

const resetScreen = () => {
  currentOperand.textContent = "";
  shouldResetScreen = false;
};

const clear = () => {
  currentOperand.textContent = "0";
  previousOperand.textContent = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
};

const addDecimal = () => {
  if (shouldResetScreen) resetScreen();
  if (currentOperand.textContent === "") currentOperand.textContent = "0";
  if (currentOperand.textContent.includes(".")) return;
  currentOperand.textContent += ".";
};

const backspace = () => {
  currentOperand.textContent = currentOperand.textContent
    .toString()
    .slice(0, -1);
};

const setOperation = (operator) => {
  if (currentOperation !== null) evaluate();
  firstOperand = currentOperand.textContent;
  currentOperation = operator;
  previousOperand.textContent = `${firstOperand} ${currentOperation}`;
  shouldResetScreen = true;
};

const evaluate = () => {
  if (currentOperation === null || shouldResetScreen) return;
  if (currentOperation === "/" && currentOperand === "0") return;
  secondOperand = currentOperand.textContent;
  currentOperand.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  );
  previousOperand.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  currentOperation = null;
};

const roundResult = (number) => {
  return Math.round(number * 1000) / 1000;
};

const handleKeyboardInput = (e) => {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
  if (e.key === ".") addDecimal();
  if (e.key === "=" || e.key === "Enter") evaluate();
  if (e.key === "backspace") backspace();
  if (e.key === "Escape") clear();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
    setOperation(convertOperator(e.key));
};

const convertOperator = (keyboardOperator) => {
  if (keyboardOperator === "/") return "/";
  if (keyboardOperator === "*") return "*";
  if (keyboardOperator === "-") return "-";
  if (keyboardOperator === "+") return "+";
};

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const operate = (operator, a, b) => {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
};

window.addEventListener("keydown", handleKeyboardInput);
equalsBtn.addEventListener("click", evaluate);
decimalBtn.addEventListener("click", addDecimal);
allClearBtn.addEventListener("click", clear);
backspaceBtn.addEventListener("click", backspace);
