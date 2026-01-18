// TIME & DATE
function updateTime() {
  const now = new Date();
  document.getElementById("time").textContent =
    now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  document.getElementById("date").textContent = now.toDateString();
}
setInterval(updateTime, 1000);
updateTime();

// QUOTES
const quotes = [
  "Slow down. You’re doing fine.",
  "Focus on one thing.",
  "Small steps matter.",
  "Calm mind, strong results."
];
document.getElementById("quote").textContent =
  quotes[Math.floor(Math.random() * quotes.length)];

// TASK STORAGE
const input = document.getElementById("taskInput");
const button = document.getElementById("saveBtn");
const savedText = document.getElementById("savedTask");

function saveTask() {
  const task = input.value.trim();
  localStorage.setItem("task", task);
  showTask();
}

function showTask() {
  const task = localStorage.getItem("task");
  if (task) {
    savedText.textContent = "Today's focus: " + task;
    input.value = task;
  }
}

// EVENT LISTENERS (CSP SAFE)
button.addEventListener("click", saveTask);
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") saveTask();
});

// LOAD STORED TASK
showTask();
