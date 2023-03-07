const form = document.querySelector('.login-form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password },} = event,currentTarget;
        const inputValue = {
            Email: `${email.value}`,
            Password: `${password.value}`,
        }
        console.log(inputValue)
        if (email.value ==='' || password.value === ''){
            window.alert("Все Поля должны быть заполненны!");
        }
    event.target.reset()
});