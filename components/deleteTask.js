const btnDeleteTask = (update, id) => {
  const btnDeleteTask = document.createElement('button')

  btnDeleteTask.classList.add('delete--button')
  btnDeleteTask.innerText = 'Erase'

  btnDeleteTask.addEventListener('click', () => deleteTask(update, id))

  return btnDeleteTask
}

const deleteTask = (update, id) => {
  // const buttonDelete = e.target

  // const taskCompleted = buttonDelete.parentElement

  // taskCompleted.remove()

  // return buttonDelete
  const i = id
  const taskSaved = JSON.parse(localStorage.getItem('tasks'))

  taskSaved.splice(i, 1)

  localStorage.setItem('tasks', JSON.stringify(taskSaved))

  update()
}

export default btnDeleteTask
