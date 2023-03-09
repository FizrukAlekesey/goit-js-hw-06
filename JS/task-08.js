const form = document.querySelector('.login-form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password },} = event,currentTarget;
        if (email.value ==='' || password.value === ''){
            window.alert("Все Поля должны быть заполненны!");
        }
        const inputValue = {
            Email: `${email.value}`,
            Password: `${password.value}`,
        }
        console.log(inputValue)
        
    event.target.reset()
});