import btnCompleteTask from './completeTask.js'
import btnDeleteTask from './deleteTask.js'
import { loadTask } from './loadTask.js'

export const handleNewItem = e => {
  e.preventDefault()

  const tasks = JSON.parse(localStorage.getItem('tasks')) || []

  const inputTask = document.querySelector('[data-form-input]')
  // const taskList = document.querySelector('[data-list]')
  const inputValue = inputTask.value

  const calendar = document.querySelector('[data-form-date]')
  const calendarValue = moment(calendar.value)

  const hour = calendarValue.format('HH:mm')

  const formatedDate = calendarValue.format('DD/MM/YYYY')

  const completed = false

  const data = {
    inputValue,
    formatedDate,
    hour,
    completed
  }

  const updatedTasks = [...tasks, data]

  localStorage.setItem('tasks', JSON.stringify(updatedTasks))

  inputTask.value = ' '
  calendar.value = ' '

  loadTask()
}

export const Task = ({ inputValue, hour, completed }, id) => {
  const task = document.createElement('li')
  // task.classList.add('task')
  const taskContent = `<p class="task--content">${hour} &centerdot; ${inputValue}</p>`

  if (completed) {
    task.classList.add('done')
  }
  task.classList.add('task')

  task.innerHTML = taskContent

  task.appendChild(btnCompleteTask(loadTask, id))
  task.appendChild(btnDeleteTask(loadTask, id))

  return task
}
