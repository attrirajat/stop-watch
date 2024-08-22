let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;
let laps = 1;

const startStopButton = document.getElementById("startStopButton");
const resetButton = document.getElementById("reset");
const lapsButton = document.getElementById("lap");
const lapData = document.getElementById("laps");

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

function toggleStopwatch() {
  if (isRunning) {
    clearInterval(timerInterval);
    startStopButton.innerHTML = "Start";
    startStopButton.style.backgroundColor = "#27ae60";
  } else {
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

    startStopButton.innerHTML = "Stop";
    startStopButton.style.backgroundColor = "rgb(194, 34, 34)";
  }

  isRunning = !isRunning;
  resetButton.disabled = false;
}

function lapInterval() {
  lapDisplay =
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");
}

lapsButton.addEventListener("click", () => {
  const linebelowSpan = document.createElement("hr");
  const newData = document.createElement("span");
  newData.textContent = "Lap " + laps + "- " + lapDisplay;
  lapData.appendChild(newData);
  lapData.appendChild(linebelowSpan);
  laps += 1;
});

function resetStopwatch() {
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  laps = 1;
  isRunning = false;

  updateDisplay();
  startStopButton.innerHTML = "Start";
  startStopButton.style.backgroundColor = "rgb(11, 185, 43)";
  lapData.innerHTML = "";
  startStopButton.disabled = false;
  resetButton.disabled = true;
}
