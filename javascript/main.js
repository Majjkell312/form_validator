const allInputs = document.querySelectorAll('input')
const usernameInput = document.querySelector('#username')
const passInput = document.querySelector('#password')
const rePassInput = document.querySelector('#password2')
const emailInput = document.querySelector('#email')
const clearBtn = document.querySelector('.clear')
const sendBtn = document.querySelector('.send')
const closePopup = document.querySelector('.close')
const popup = document.querySelector('.popup')


const clearAll = () => {
    allInputs.forEach(singleInput => {
        singleInput.value = "";
    });

}

closePopup.addEventListener('click', () => {
    popup.classList.remove('show-popup');
})

clearBtn.addEventListener('click', clearAll);