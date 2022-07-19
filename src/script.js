//Time
function currentTime() {
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
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
  secs = secs < 10 ? "0" + secs : secs;

  let time = hours + ":" + mins + " " + session;

  document.querySelector(".time").innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();
