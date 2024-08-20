let seconds = 0;
let minutes = 0;
let hours = 0;
let timerInterval = null;
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

function updateDisplay() {
  document.getElementById("seconds").innerHTML = String(seconds).padStart(
    2,
    "0"
  );
  document.getElementById("minutes").innerHTML = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");
}

function startStopwatch() {
  timerInterval = setInterval(() => {
    seconds += 1;

    if (seconds === 60) {
      seconds = 0;
      minutes += 1;
    }

    if (minutes === 60) {
      minutes = 0;
      hours += 1;
    }
    updateDisplay();
  }, 500);

  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
}

function stopStopwatch() {
  clearInterval(timerInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

function resetStopwatch() {
  stopStopwatch();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}

updateDisplay();
