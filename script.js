let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function formatTime(time) {
    let milliseconds = Math.floor((time % 1000) / 10);
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / (1000 * 60)) % 60);

    return (
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0") + ":" +
        String(milliseconds).padStart(2, "0")
    );
}

function start() {
    if (timerInterval) return;

    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        document.getElementById("display").textContent = formatTime(elapsedTime);
    }, 10);
}

function pause() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function reset() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (!elapsedTime) return;

    const lapTime = document.createElement("li");
    lapTime.textContent = formatTime(elapsedTime);
    document.getElementById("laps").appendChild(lapTime);
}
