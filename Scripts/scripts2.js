
const STORAGE_KEY = "my-task-list";


function loadTasks() {
  const tasksJSON = localStorage.getItem(STORAGE_KEY);
  return tasksJSON ? JSON.parse(tasksJSON) : [];
}

function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function generateId() {
  return Date.now();
}

document.getElementById("add-task-button").addEventListener("click", () => {
  document.getElementById("task-title").value = "";
  document.getElementById("task-desc").value = "";
  document.getElementById("task-status").value = "todo";
  document.getElementById("task-modal").showModal();
});
