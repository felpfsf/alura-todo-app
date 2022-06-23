import { removeRepeatedDates, sortDate } from '../service/data.js'
import { createDate } from './createDate.js'
import { Task } from './createTask.js'

export const loadTask = () => {
  const list = document.querySelector('[data-list]')

  const taskSaved = JSON.parse(localStorage.getItem('tasks')) || []

  list.innerHTML = ''
  const uniqueDates = removeRepeatedDates(taskSaved)
  sortDate(uniqueDates)

  uniqueDates.forEach(day => {
    // const day = moment(task.formatedDate, 'DD/MM/YYYY')
    list.appendChild(createDate(day))
  })
}
