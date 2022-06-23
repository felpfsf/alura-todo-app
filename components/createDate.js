import { Task } from './createTask.js'

export const createDate = date => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || []
  const dateMoment = moment(date, 'DD/MM/YYYY')
  const dateTop = document.createElement('li')
  const content = `<p class="content--data">${dateMoment.format(
    'DD/MM/YYYY'
  )}</p>`

  dateTop.innerHTML = content

  tasks.forEach((tasks, id) => {
    const day = moment(tasks.formatedDate, 'DD/MM/YYYY')

    const diff = dateMoment.diff(day)
    if (diff === 0) {
      dateTop.appendChild(Task(tasks, id))
    }
  })

  return dateTop
}
