const mySubmitBtn = document.querySelector('#submitBtn');
mySubmitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const name = document.querySelector('#nameInput').value;
    const surname = document.querySelector('#surnameInput').value;
    const email = document.querySelector('#emailInput').value;
    const passwd = document.querySelector('#passInput').value;
    const gpdrCheck = document.querySelector('#gpdrCheck').checked;

    const user = {
        name,
        surname,
        email,
        passwd,
        gpdrCheck
    };
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
});