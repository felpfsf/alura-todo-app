import { handleNewItem } from './components/createTask.js'
import { loadTask } from './components/loadTask.js'

const addNewTask = document.querySelector('[data-form-button]')

addNewTask.addEventListener('click', handleNewItem)

loadTask()
