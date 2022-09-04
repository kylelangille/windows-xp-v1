"use strict";
/////////////////////////////////////////////////////////
// TASKBAR
/////////////////////////
// Time in Taskbar
function currentTime() {
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let session = "AM";

  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  mins = mins < 10 ? "0" + mins : mins;

  let time = hours + ":" + mins + " " + session;

  document.querySelector(".time").innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();

///////////////////////////////////////////////////////
// DESKTOP ICONS

//////////////////////////////////
//Opening and Closing My Computer
const myComputerWindow = document.querySelector(".my-computer-window");
const btnCloseMyComputer = document.querySelector(".close-my-computer-btn");
const btnOpenMyComputer = document.querySelector(".my-computer--open");

const openMyComputer = () => {
  myComputerWindow.classList.remove("window--hidden");
};

const closeMyComputer = () => {
  myComputerWindow.classList.add("window--hidden");
};
btnOpenMyComputer.addEventListener("dblclick", openMyComputer);
btnCloseMyComputer.addEventListener("click", closeMyComputer);

////////////////////////////////////////
// Opening and Closing the Recycling Bin
const recyclingBinWindow = document.querySelector(".recycling-window");
const btnCloseRecyclingBin = document.querySelector(
  ".close-btn--recycling-bin"
);
const btnOpenRecyclingBin = document.querySelector(".recycling-window--open");

const openRecyclingBin = function () {
  recyclingBinWindow.classList.remove("window--hidden");
};

const closeRecyclingBin = function () {
  recyclingBinWindow.classList.add("window--hidden");
};

btnCloseRecyclingBin.addEventListener("click", closeRecyclingBin);
btnOpenRecyclingBin.addEventListener("dblclick", openRecyclingBin);

//////////////////////////////////////
// Opening and Closing LimeWire
const limewireWindow = document.querySelector(".limewire-window");
const btnCloseLimewire = document.querySelector(".close-limewire");
const btnOpenLimeWire = document.querySelector(".limewire-icon--open");
const btnCloseLimeWireCancel = document.querySelector(".cancel-btn");

const openLimewire = function () {
  limewireWindow.classList.remove("window--hidden");
};

const closeLimewire = function () {
  limewireWindow.classList.add("window--hidden");
};

btnOpenLimeWire.addEventListener("dblclick", openLimewire);
btnCloseLimewire.addEventListener("click", closeLimewire);
btnCloseLimeWireCancel.addEventListener("click", closeLimewire);

/////////////////////////////////////////////////////////
// START MENU
// Opening and Closing Start Menu
const startMenu = document.querySelector(".start-menu");
const startMenuBtn = document.querySelector(".start-btn");
const overlay = document.querySelector(".overlay");

const openStartMenu = function () {
  startMenu.classList.remove("start-menu--hidden");
  overlay.classList.remove("overlay--hidden");
  overlay.classList.add("overlay");
};

const closeStartMenu = function () {
  startMenu.classList.add("start-menu--hidden");
  overlay.classList.remove("overlay--hidden");
  overlay.classList.remove("overlay");
};

startMenuBtn.addEventListener("click", function () {
  startMenu.classList.contains("start-menu--hidden")
    ? openStartMenu()
    : closeStartMenu();
});

overlay.addEventListener("click", closeStartMenu);

// Escape Key Closing the Start Menu
document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    !startMenu.classList.contains("start-menu--hidden")
  ) {
    closeStartMenu();
  }
});

////////////////////////////////////
// Opening and closing the calculator
const openCalcBtn = document.querySelector(".open-calc-btn");
const closeCalcBtn = document.querySelector(".calc-window--hidden");
const calcWindow = document.querySelector(".calc-window");

const openCalc = function () {
  calcWindow.classList.remove("window--hidden");
};

const closeCalc = function () {
  calcWindow.classList.add("window--hidden");
};

openCalcBtn.addEventListener("click", openCalc);
closeCalcBtn.addEventListener("click", closeCalc);

///////////////////////////////////////
// Opening and closing the notepad

const openNotepadBtn = document.querySelector(".open-notepad-btn");
const closeNotepadBtn = document.querySelector(".notepad-window--hidden");
const notepadWindow = document.querySelector(".notepad-window");

const openNotepad = function () {
  notepadWindow.classList.remove("window--hidden");
};

const closeNotepad = function () {
  notepadWindow.classList.add("window--hidden");
};

openNotepadBtn.addEventListener("click", openNotepad);

closeNotepadBtn.addEventListener("click", closeNotepad);

////////////////////////////////////////
// Opening and closing messenger

const openMessengerBtn = document.querySelector(".open-messenger-btn");
const closeMessengerBtn = document.querySelector(".messenger-window--hidden");
const messengerWindow = document.querySelector(".messenger-window");

const openMessenger = function () {
  messengerWindow.classList.remove("window--hidden");
};

const closeMessenger = function () {
  messengerWindow.classList.add("window--hidden");
};

openMessengerBtn.addEventListener("click", openMessenger);

closeMessengerBtn.addEventListener("click", closeMessenger);
