const btnCompleteTask = (update, id) => {
  const btnCompleteTask = document.createElement('button')

  btnCompleteTask.classList.add('check--button')
  btnCompleteTask.innerText = 'Complete'

  btnCompleteTask.addEventListener('click', () => completeTask(update, id))

  return btnCompleteTask
}

const completeTask = (update, id) => {
  // const buttonComplete = e.target

  // const taskCompleted = buttonComplete.parentElement

  // taskCompleted.classList.toggle('done')

  const taskSaved = JSON.parse(localStorage.getItem('tasks'))

  taskSaved[id].completed = !taskSaved[id].completed

  localStorage.setItem('tasks', JSON.stringify(taskSaved))

  update()
}

export default btnCompleteTask
