document.getElementById('task-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskItem.addEventListener('click', function () {
      this.classList.toggle('completed');
    });

    document.getElementById('task-list').appendChild(taskItem);
    taskInput.value = '';
  }
});
