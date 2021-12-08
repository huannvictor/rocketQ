import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal .buttons button')

// setting activity buttons
const checkButtons = document.querySelectorAll('.actions a.check')
const deleteButtons = document.querySelectorAll('.actions a.delete')

// catching button activities 
// changing modal according to the buttons' behavior 

checkButtons.forEach(button => {
  button.addEventListener('click', handleClick)
})

deleteButtons.forEach(button => {
  button.addEventListener('click', (event) => handleClick(event, false))
})

// setting the modal's changing according to the buttons' behavior 

function handleClick (event, check = true){
  modalTitle.innerHTML = check ? 'Marcar como lida' : 'Excluir pergunta'
  modalDescription.innerHTML = check 
    ? 'Tem certeza que você deseja marcar esta pergunta como lida?'
    : 'Tem certeza que você deseja excluir esta pergunta?'
  modalButton.innerHTML = check ? 'Sim' : 'Sim, excluir'
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  modal.open()
}