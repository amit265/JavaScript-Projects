const container = document.getElementsByClassName(".container");
const newTask = document.getElementById("new-task");
const listContainer = document.getElementById("todo-list");
const addTaskButton = document.getElementById("add-task");

console.log(newTask.value)

addTaskButton.addEventListener("click", function() {
    if (newTask.value === "") {
        alert("Please enter a task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = newTask.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    newTask.value = "";
    saveData();
});

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();             