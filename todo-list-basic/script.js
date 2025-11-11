const container = document.getElementsByClassName(".container");
const newTaskInput = document.getElementById("new-task");
const listContainer = document.getElementById("todo-list");
const addTaskButton = document.getElementById("add-task");

const addTask = () => {
  const taskText = newTaskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const listItem = document.createElement("li");
  listItem.className = "task-item";

  const taskSpan = document.createElement("span");
  taskSpan.innerText = taskText;
  listItem.appendChild(taskSpan);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete-button";
  deleteButton.addEventListener("click", () => {
    listContainer.removeChild(listItem);
  });
  listItem.appendChild(deleteButton);

  listContainer.appendChild(listItem);
  newTaskInput.value = "";
};

addTaskButton.addEventListener("click", addTask);

newTaskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

console.log(
  "Todo List Script Loaded",
  container,
  newTaskInput,
  listContainer,
  addTaskButton
);


