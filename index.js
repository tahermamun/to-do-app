let newTask = document.getElementById('new-task');
let addTaskBtn = document.getElementById('addTask');
let incompleteTaskList = document.getElementById("incomplete-task");
let completeTaskList = document.getElementById("complete-task");


function createNewTask(task) {

  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let label = document.createElement("label");
  label.innerText = task;
  checkBox.type = "checkbox";
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  return listItem;
};

function addTask() {
  if (newTask.value) {
    let listItem = createNewTask(newTask.value);
    incompleteTaskList.appendChild(listItem);
    newTask.value = "";
    incompleteItems(listItem, completeTask);
  } else {
    alert('Write Something')
  }
};

function completeTask() {

  let listItem = this.parentNode;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);
  let checkBox = listItem.querySelector("input[type=checkbox]");
  checkBox.remove();
  completeTaskList.appendChild(listItem);
  completeItems(listItem, deleteTask);

};

function deleteTask() {
  let listItem = this.parentNode;
  let completeList = listItem.parentNode;
  completeList.removeChild(listItem);

};

function incompleteItems(taskItem, checkBoxClick) {

  let checkBox = taskItem.querySelector("input[type=checkbox]");
  checkBox.onchange = checkBoxClick;
};

function completeItems(taskItem, deleteButtonPress) {

  let deleteButton = taskItem.querySelector(".delete");
  deleteButton.onclick = deleteButtonPress;

};


for (var i = 0; i < incompleteTaskList.children.length; i++) {
  incompleteItems(incompleteTaskList.children[i], completeTask);
}

for (var i = 0; i < completeTaskList.children.length; i++) {
  completeItems(completeTaskList.children[i], deleteTask);
}

addTaskBtn.addEventListener("click", addTask);

