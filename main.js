const addTodo = document.getElementById('add-todo');
const todoList = document.querySelector('.todo-list');
const taskInput = document.getElementById('task');

addTodo.addEventListener('submit', handleSubmitTodoForm);

async function handleSubmitTodoForm(event) {
  event.preventDefault();

  let formData = new FormData(addTodo);
  const task = formData.get('task');

  if (task) {
    addTaskToList(task);
    taskInput.value = '';
    return;
  }

  alert('Please enter a task');
}

function addTaskToList(task) {
  const taskContainer = document.createElement('li');
  taskContainer.classList.add('list-item');

  const taskName = document.createElement('p');
  taskName.classList.add('task-name');
  taskName.innerText = task;

  taskContainer.appendChild(taskName);

  const taskActions = document.createElement('div');
  taskActions.classList.add('item-actions');

  const completedTaskBtn = document.createElement('button');
  completedTaskBtn.innerHTML = '<img src="./assets/icons/check-solid.svg" />';

  completedTaskBtn.addEventListener('click', function () {
    const isCompletedTask = taskName.classList.contains('task-done');

    if (isCompletedTask) {
      taskName.classList.remove('task-done');
      return;
    }

    taskName.classList.add('task-done');
  });

  taskActions.appendChild(completedTaskBtn);

  const removeTaskBtn = document.createElement('button');
  removeTaskBtn.innerHTML = '<img src="./assets/icons/minus-solid.svg" />';

  removeTaskBtn.addEventListener('click', function () {
    taskContainer.remove();
  });

  taskActions.appendChild(removeTaskBtn);
  taskContainer.appendChild(taskActions);
  todoList.append(taskContainer);
}
