
let tasks = [];

function loadTasks() {
  const storedTasks = localStorage.getItem("tasks");

  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  } else {
    tasks = defaultTasks;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}


localStorage.setItem("key", JSON.stringify(data));
let value = JSON.parse(localStorage.getItem("key"));