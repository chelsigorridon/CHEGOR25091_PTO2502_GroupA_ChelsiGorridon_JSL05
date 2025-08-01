import { initialTasks } from "../Data/initialData.js";


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
