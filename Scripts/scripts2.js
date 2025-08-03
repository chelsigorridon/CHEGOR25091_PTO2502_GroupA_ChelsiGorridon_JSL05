// Key used to store and retrieve tasks from localStorage
const STORAGE_KEY = "my-task-list";

/**
 * Loads tasks from localStorage.
 * If no tasks are found, returns an empty array.
 */
function loadTasks() {
  const tasksJSON = localStorage.getItem(STORAGE_KEY);
  return tasksJSON ? JSON.parse(tasksJSON) : [];
}

/**
 * Saves the given array of tasks to localStorage.
 * @param {Array} tasks - Array of task objects to be saved
 */
function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}


/**
 * Generates a unique ID for each task based on the current timestamp.
 * @returns {number} A unique task ID
 */

function generateId() {
  return Date.now();
}

// Handle "Add Task" button click
// Opens a blank modal for the user to enter a new task

document.getElementById("add-task-button").addEventListener("click", () => {
  document.getElementById("task-title").value = "";
  document.getElementById("task-desc").value = "";
  document.getElementById("task-status").value = "";
  document.getElementById("task-modal").showModal();
});


// Handle "Close" button in the modal
// Closes the modal without saving

document.getElementById("close-modal-btn").addEventListener("click", () => {
  document.getElementById("task-modal").close();
});

