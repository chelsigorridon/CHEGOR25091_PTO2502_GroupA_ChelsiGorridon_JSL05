import { initialTasks } from "../Data/initialData.js";


const STORAGE_KEY = "my-task-list";


function loadTasks() {
  const tasksJSON = localStorage.getItem(STORAGE_KEY);
  return tasksJSON ? JSON.parse(tasksJSON) : [];
}