document.addEventListener('DOMContentLoaded', () => {
    const newTaskForm = document.getElementById('new-task-form');
    const newTaskInput = document.getElementById('new-task-input');
    const tasksList = document.getElementById('tasks-list');

    newTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (newTaskInput.value.trim()) {
            const newTask = document.createElement('li');
            newTask.innerHTML = `<span class="task-name">${newTaskInput.value.trim()}</span>
            <div class="task-actions">
                <button class="complete-btn">Completed</button>
                <button class="delete-btn">Delete</button>
            </div>`;
            newTask.querySelector('.complete-btn').addEventListener('click', () => {
                newTask.querySelector('.task-name').classList.toggle('completed');
            });
            newTask.querySelector('.delete-btn').addEventListener('click', () => {
                newTask.remove();
            });
            tasksList.appendChild(newTask);
            newTaskInput.value = '';
        }
    });
});
