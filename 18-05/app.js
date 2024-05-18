const mySubmitBtn = document.querySelector('#submitBtn');
mySubmitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const name = document.querySelector('#nameInput').value;
    const surname = document.querySelector('#surnameInput').value;
    const email = document.querySelector('#emailInput').value;
    const passwd = document.querySelector('#passInput').value;
    const passwdCheck = document.querySelector('#passCheckInput').value;
    const gpdrCheck = document.querySelector('#gpdrCheck').checked;

    if (passwd !== passwdCheck) {
        alert('Passwords do not match!');
        return;
    }
    if(gpdrCheck === false){
        alert('You must agree to the processing of personal data!');
        return;
    }

    const user = {
        name,
        surname,
        email,
        passwd,
        gpdrCheck
    };

    // const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));

});
