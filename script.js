window.onload = () => {
  generateCalender();
};

const generateCalender = () => {
  const calender = document.getElementById('calender');
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const firstDayOfWeek = firstDayOfMonth.getDay();
  const totalDays = lastDayOfMonth.getDate();

  for (let i = 0; i < firstDayOfWeek; i++) {
    const blankDay = document.createElement('div');
    calender.appendChild(blankDay);
  }

  for (let day = 1; day <= totalDays; day++) {
    const daySquare = document.createElement('div');
    daySquare.className = 'calender-day';
    daySquare.classList.add('flex', 'flex-col', 'items-center', 'bg-white', 'text-[#c4c4c4]', 'p-4', 'rounded-lg', 'min-h-16', 'shadow-lg');
    daySquare.textContent = day;
    daySquare.id = `day-${day}`;
    calender.appendChild(daySquare);
  }
};

function showAddTaskModal() {
  document.getElementById('addTaskModal').style.display = 'block';
}

function closeAddTaskModal() {
  document.getElementById('addTaskModal').style.display = 'none';
}

function deleteTask(taskElement) {
  if (confirm('Are you sure you want to delete this task?')) {
    taskElement.parentNode.removeChild(taskElement);
  }
}

function editTask(taskElement) {
  const newTaskDescription = prompt('Edit your task', taskElement.textContent);
  if ((newTaskDescription !== null) & (newTaskDescription.trim() !== '')) {
    taskElement.textContent = newTaskDescription;
  }
}

function addTask() {
  const taskDate = new Date(document.getElementById('task-date').value);
  const taskDesc = document.getElementById('task-desc').value;

  if (taskDesc && !isNaN(taskDate.getDate())) {
    const calenderDays = document.getElementById('calender').children;
    for (let i = 0; i < calenderDays.length; i++) {
      const day = calenderDays[i];
      if (parseInt(day.textContent) === taskDate.getDate()) {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.classList.add('bg-black');
        taskElement.textContent = taskDesc;

        taskElement.addEventListener('contextmenu', function (event) {
          event.preventDefault();
          deleteTask(taskElement);
        });

        taskElement.addEventListener('click', function () {
          editTask(taskElement);
        });

        day.appendChild(taskElement);
        break;
      }
    }
    closeAddTaskModal();
  } else {
    alert('Please enter a valid date & task description');
  }
}
