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
  startSound.play();
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
  startSound.play();
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
  startSound.play();
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
  startSound.play();
  closeStartMenu();
};

const closeCalc = function () {
  calcWindow.classList.add("window--hidden");
};

openCalcBtn.addEventListener("click", openCalc);
closeCalcBtn.addEventListener("click", closeCalc);

///////////////////////////////////////
// Opening and closing the run window

const openRunBtn = document.querySelector(".open-run-window");
const runWindow = document.querySelector(".run-window");
const closeRunBtn = document.querySelector(".run-window--hidden");

const openRunWindow = () => {
  runWindow.classList.remove("window--hidden");
  closeStartMenu();
};

const closeRunWindow = () => {
  runWindow.classList.add("window--hidden");
};

openRunBtn.addEventListener("click", openRunWindow);
closeRunBtn.addEventListener("click", closeRunWindow);

///////////////////////////////////////
// Opening and closing the notepad

const openNotepadBtn = document.querySelector(".open-notepad-btn");
const closeNotepadBtn = document.querySelector(".notepad-window--hidden");
const notepadWindow = document.querySelector(".notepad-window");

const openNotepad = function () {
  notepadWindow.classList.remove("window--hidden");
  startSound.play();
  closeStartMenu();
};

const closeNotepad = function () {
  notepadWindow.classList.add("window--hidden");
};

openNotepadBtn.addEventListener("click", openNotepad);

closeNotepadBtn.addEventListener("click", closeNotepad);

//////////////////////////////////////
//Opening and closing command prompt

const closeCmdBtn = document.querySelector(".close-cmd-btn");
const openCmdBtn = document.querySelector(".open-cmd-btn");
const cmdWindow = document.querySelector(".cmd-window");

const openCmdWindow = () => {
  cmdWindow.classList.remove("window--hidden");
  startSound.play();
  closeStartMenu();
};

const closeCmdWindow = () => {
  cmdWindow.classList.add("window--hidden");
};

openCmdBtn.addEventListener("click", openCmdWindow);
closeCmdBtn.addEventListener("click", closeCmdWindow);

////////////////////////////////////////
// Opening and closing messenger

const openMessengerBtn = document.querySelector(".open-messenger-btn");
const closeMessengerBtn = document.querySelector(".messenger-window--hidden");
const messengerWindow = document.querySelector(".messenger-window");

const openMessenger = function () {
  messengerWindow.classList.remove("window--hidden");
  startSound.play();
  closeStartMenu();
};

const closeMessenger = function () {
  messengerWindow.classList.add("window--hidden");
};

openMessengerBtn.addEventListener("click", openMessenger);

closeMessengerBtn.addEventListener("click", closeMessenger);

///////////////////////////////////////////
// Opening and closing My Computer
const myComputerSM = document.querySelector(".open-my-computer--sm");

const openMyComputerSM = () => {
  myComputerWindow.classList.remove("window--hidden");
  startSound.play();
  closeStartMenu();
};

myComputerSM.addEventListener("click", openMyComputerSM);

////////////////////////////////////////////
//ERROR MODAL

const errorModal = document.querySelector(".error-modal");
const closeErrorBtn = document.querySelector(".close-error--btn");
const closeErrorBtnOk = document.querySelector(".error-ok--btn");
const errorSound = new Audio("../sounds/error-sound.mp3");

const closeErrorModal = function () {
  errorModal.classList.add("window--hidden");
};

const openErrorModal = function () {
  errorModal.classList.remove("window--hidden");
  closeStartMenu();
  errorSound.play();
};

closeErrorBtn.addEventListener("click", closeErrorModal);
closeErrorBtnOk.addEventListener("click", closeErrorModal);

//Error EventListeners for unbuilt components
const limewireNextBtn = document.querySelector(".next-btn");
limewireNextBtn.addEventListener("click", openErrorModal);

const networkPlacesIcon = document.querySelector(".network-places-icon");
networkPlacesIcon.addEventListener("dblclick", openErrorModal);

const myDocumentsIcon = document.querySelector(".my-documents-icon");
myDocumentsIcon.addEventListener("dblclick", openErrorModal);

const internetExplorerIcon = document.querySelector(".internet-explorer-icon");
internetExplorerIcon.addEventListener("dblclick", openErrorModal);

const generalErrorVariable = document.querySelectorAll(".open-error--modal");
generalErrorVariable.forEach((el) =>
  el.addEventListener("click", openErrorModal)
);

////////////////////////////////////
//START UP
const loadingScreen = document.querySelector(".loading-screen");
const loadingBar = document.querySelector(".loading-bar");
const userProfile = document.querySelector(".login-screen--user-profile");
const startupScreen = document.querySelector(".login-screen");
const bootBtn = document.querySelector(".boot-btn");
const bootScreen = document.querySelector(".boot-screen");
const startupSound = new Audio("../sounds/startup.wav");
const logOffSound = new Audio("../sounds/logoffsound.wav");
const logInSound = new Audio("../sounds/logonsound.wav");
const startSound = new Audio("../sounds/start.wav");
const background = document.querySelector(".background");
const trayNotif = document.getElementById("tray-notif");
const closeTrayNotifBtn = document.querySelector(".close-tray-notif--btn");

const bootPC = () => {
  startSound.play();
  bootScreen.classList.add("window--hidden");
  loadingScreen.classList.remove("window--hidden");
  const loadingBarProgress = (progress) => {
    loadingBar.style.width = `${progress}%`;
  };

  setTimeout(() => loadingBarProgress(22), 1000);
  setTimeout(() => loadingBarProgress(45), 2000);
  setTimeout(() => loadingBarProgress(85), 3600);
  setTimeout(() => loadingBarProgress(98), 4500);
  setTimeout(() => loadingBarProgress(100), 5000);

  const endLoading = () => {
    loadingScreen.classList.add("window--hidden");
    startupScreen.classList.remove("window--hidden");
    startupSound.play();
  };

  setTimeout(endLoading, 5000);
};

bootBtn.addEventListener("click", bootPC);

const openWindows = () => {
  background.classList.remove("window--hidden");
  startupScreen.classList.add("window--hidden");
  logInSound.play();
  trayNotif.classList.remove("window--hidden");
};

closeTrayNotifBtn.addEventListener("click", () => {
  trayNotif.classList.add("tray-notif--animate-show");
});

trayNotif.addEventListener("animationend", function () {
  if (this.classList.contains("tray-notif--animate-show")) {
    this.style.display = "none";
    this.classList.remove("tray-notif--animate-show");
  }
});

trayNotif.addEventListener("click", () => {
  openErrorModal();
  errorSound.play();
  trayNotif.classList.add("tray-notif--animate-show");
});

userProfile.addEventListener("click", openWindows);

////////////////////////////////////////
// Logging off

const logOffBtn = document.querySelector(".log-off");

const logOff = () => {
  closeStartMenu();
  startupScreen.classList.remove("window--hidden");
  logOffSound.play();
};

logOffBtn.addEventListener("click", logOff);

//Shut Down

const shutDownBtn = document.querySelector(".turn-off-pc");
const shutDownBtnLogin = document.querySelector(".login-screen--turn-off");
const shutDownScreen = document.querySelector(".shut-down--screen");
const shutDownSound = new Audio("../sounds/shutdown.wav");
const shutDownModal = document.querySelector(".shut-down--modal");
const shutDownModalCancel = document.querySelector(".shut-down--cancel-btn");
const openShutDownModalBtn = document.querySelector(".open-shut-down--modal");

const removeGrayscale = () => {
  background.style.filter = "grayscale(0)";
};

const openShutDownModal = () => {
  shutDownModal.classList.remove("window--hidden");
  closeStartMenu();
  const grayscale = (progress) => {
    background.style.filter = `grayscale(${progress}%)`;
  };
  setTimeout(() => grayscale(10), 500);
  setTimeout(() => grayscale(20), 750);
  setTimeout(() => grayscale(30), 1000);
  setTimeout(() => grayscale(40), 1250);
  setTimeout(() => grayscale(50), 1500);
  setTimeout(() => grayscale(60), 1750);
  setTimeout(() => grayscale(70), 2000);
  setTimeout(() => grayscale(80), 2250);
  setTimeout(() => grayscale(90), 2500);
  setTimeout(() => grayscale(100), 2750);
};

const closeShutDownModal = () => {
  removeGrayscale();
  shutDownModal.classList.add("window--hidden");
};

openShutDownModalBtn.addEventListener("click", openShutDownModal);
shutDownModalCancel.addEventListener("click", closeShutDownModal);

const shutDownPC = () => {
  background.classList.add("window--hidden");
  shutDownScreen.classList.remove("window--hidden");
  closeShutDownModal();
  closeStartMenu();
  shutDownSound.play();
  setTimeout(() => {
    shutDownScreen.classList.add("window--hidden");
  }, 4000);
  setTimeout(() => {
    bootScreen.classList.remove("window--hidden");
  }, 4000);
};

const shutDownPCLogin = () => {
  startupScreen.classList.add("window--hidden");
  shutDownScreen.classList.remove("window--hidden");
  shutDownSound.play();
  setTimeout(() => {
    shutDownScreen.classList.add("window--hidden");
  }, 4000);
  setTimeout(() => {
    bootScreen.classList.remove("window--hidden");
  }, 4000);
};

shutDownBtn.addEventListener("click", shutDownPC);
shutDownBtnLogin.addEventListener("click", shutDownPCLogin);
