


const correctInputEl = document.querySelector(‘#validation-input’);
correctInputEl.addEventListener(‘blur’, (event) => {
    const inputLength = Number(correctInputEl.dataset.length); //6
    if (inputLength === event.target.value.length) {
        correctInputEl.classList.add('valid')
        correctInputEl.classList.remove('invalid')
    } else {
        correctInputEl.classList.add('invalid')
        correctInputEl.classList.remove('valid')
    };
});

