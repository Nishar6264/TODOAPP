// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");
    newTask.innerHTML = `
        ${taskText}
        <button onclick="removeTask(this)">Delete</button>
    `;
    taskList.appendChild(newTask);

    // Clear the input field
    taskInput.value = "";
}

// Function to remove a task
function removeTask(button) {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentElement);
}
