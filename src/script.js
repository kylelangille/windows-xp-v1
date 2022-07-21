"use strict";
/////////////////////////////////////////////////////////
// TASKBAR
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

//Opening and Closing the Recycling Bin
const recyclingBinWindow = document.querySelector(".recycling-window");
const btnCloseRecyclingBin = document.querySelector(
  ".recycling-window--hidden"
);
const btnOpenRecyclingBin = document.querySelector(".recycling-window--open");

const openRecyclingBin = function () {
  recyclingBinWindow.classList.remove("recycling-window--hidden");
};

const closeRecyclingBin = function () {
  recyclingBinWindow.classList.add("recycling-window--hidden");
};

btnCloseRecyclingBin.addEventListener("click", closeRecyclingBin);
btnOpenRecyclingBin.addEventListener("dblclick", openRecyclingBin);

/////////////////////////////////////////////////////////
// START MENU
// Opening and Closing Start Menu
const startMenu = document.querySelector(".start-menu");
const startMenuBtn = document.querySelector(".start-btn");

const openStartMenu = function () {
  startMenu.classList.remove("start-menu--hidden");
};

const closeStartMenu = function () {
  startMenu.classList.add("start-menu--hidden");
};

startMenuBtn.addEventListener("click", function () {
  if (startMenu.classList.contains("start-menu--hidden")) {
    openStartMenu();
  } else if (!startMenu.classList.contains("start-menu--hidden")) {
    closeStartMenu();
  }
});

// Escape Key Closing the Start Menu
document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    !startMenu.classList.contains("start-menu--hidden")
  ) {
    closeStartMenu();
  }
});
