
let tasks = loadTasks();

document.getElementById("create-task-button").addEventListener("click", () => {
  const title = document.getElementById("task-title").value.trim();
  const description = document.getElementById("task-desc").value.trim();
  const status = document.getElementById("task-status").value;


  const newTask = {
    id: generateId(),
    title,
    description,
    status
  };

  tasks.push(newTask);           
  saveTasks(tasks);            
  clearExistingTasks();        
  renderTasks(tasks);            
  document.getElementById("task-modal").close();  
});