import Modal from './modal.js'

const modal = Modal()

// when the option 'marcar com lido' is clicked

const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  button.addEventListener('click', event => modal.open())
})

// when the option 'excluir' is clicked

const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach(button => {
  button.addEventListener('click', event => modal.open())
})
