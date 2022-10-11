const initButtonClose = document.querySelector('.init-button__close')
const initButtonOpen = document.querySelector('.init-button__open')
const btnArrow = document.querySelector('.chat-admin-options .btn-arrow')
const chat = document.querySelector('.chat')

initButtonClose.addEventListener('click', () => {
    initButtonClose.style.transform= 'translateX(-50%)';
    initButtonOpen.style.transform= 'translateX(-50%)';
    chat.classList.add('show');
})

btnArrow.addEventListener('click', () => {
    initButtonClose.style.transform= 'translateX(50%)';
    initButtonOpen.style.transform= 'translateX(50%)';
    chat.classList.remove('show');
})