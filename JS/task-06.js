


const correctInputEl = document.querySelector(‘#validation-input’);
correctInputEl.addEventListener(‘blur’, () => {
    const inputLength = correctInputEl.dataset.length; //6
    if (inputLength >= 6) {
        correctInputEl.classList.add('valid')
    } else {
        correctInputEl.classList.remove('invalid')
    };
});

