const initButtonClose = document.querySelector('.init-button__close')
const initButtonOpen = document.querySelector('.init-button__open')
const btnArrow = document.querySelector('.chat-admin-options .btn-arrow')
const chat = document.querySelector('.chat')
const initText = document.querySelector('.init-text')

initButtonClose.addEventListener('click', () => {
    initButtonClose.style.transform= 'translateX(-50%)';
    initButtonOpen.style.transform= 'translateX(-50%)';
    initText.style.display = "none";
    chat.classList.add('show');
})

btnArrow.addEventListener('click', () => {
    initButtonClose.style.transform= 'translateX(50%)';
    initButtonOpen.style.transform= 'translateX(50%)';
    initText.style.display = "flex";
    chat.classList.remove('show');
})