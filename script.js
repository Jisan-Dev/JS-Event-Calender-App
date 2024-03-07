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
