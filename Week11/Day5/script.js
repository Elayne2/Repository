document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    // Load tasks from local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to render tasks
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskItem = document.createElement('div');
            taskItem.innerHTML = `
                <p>Name: ${task.name}</p>
                <p>Start Date: ${task.startDate}</p>
                <p>Days Left: ${calculateDaysLeft(task.startDate, task.endDate)}</p>
                <p>Description: ${task.description}</p>
                <input type="checkbox" id="task${index}" ${task.isCompleted ? 'checked' : ''}>
                <button class="delete-button" data-index="${index}">X</button>
                <button class="edit-button" data-index="${index}">Edit</button>
            `;
            taskList.appendChild(taskItem);
        });
    }

    // Function to calculate days left
    function calculateDaysLeft(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const today = new Date();
        const daysLeft = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
        return daysLeft > 0 ? daysLeft : 0;
    }

    // Event listener for adding a new task
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const isCompleted = false;

        const newTask = { name, description, startDate, endDate, isCompleted };
        tasks.push(newTask);

        // Save tasks to local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Clear form fields
        taskForm.reset();

        // Render updated task list
        renderTasks();
    });

    // Initial rendering of tasks
    renderTasks();
});
