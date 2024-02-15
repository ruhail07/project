function addTask() {
    const inputField = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (inputField.value.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            ${inputField.value}
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(newTask);
        inputField.value = '';
    }
}

function deleteTask(btn) {
    const taskItem = btn.parentNode;
    taskItem.remove();
}