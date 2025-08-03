document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Define the function to add a task
  function addTask() {
    const taskText = taskInput.value.trim(); // Trim spaces

    // If input is empty, alert the user
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a new "Remove" button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Set onclick to remove the task
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the button to the list item
    li.appendChild(removeBtn);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // Attach event listener to the Add Task button
  addButton.addEventListener("click", addTask);

  // Allow pressing Enter to add task
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
