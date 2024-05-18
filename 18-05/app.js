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
    if (gpdrCheck === false) {
        alert('You must agree to the processing of personal data!');
        return;
    }

    const user = {
        id : Date.now() + Math.random() + name.substring(0, 3),
        name,
        surname,
        email,
        passwd,
        gpdrCheck
    };

    const usersFromLocalStorage = JSON.parse(localStorage.getItem('users') || '[]');

    // check email is exist

    const isEmailExist = usersFromLocalStorage.some((user) => user.email === email);
    if (isEmailExist) {
        alert('Email is already exist!');
        return;
    }

    // use another way
    // const isEmailExist = usersFromLocalStorage.find((user) => user.email === email);

    // use foreach
    // let isEmailExist = false;
    // usersFromLocalStorage.forEach((user) => {
    //     if (user.email === email) {
    //         isEmailExist = true;
    //     }
    // });
    // if (isEmailExist) {
    //     alert('Email is already exist!');
    //     return;
    // }
    usersFromLocalStorage.push(user);
    localStorage.setItem('users', JSON.stringify(usersFromLocalStorage));
});