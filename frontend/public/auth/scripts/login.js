
const apiUrl = 'http://localhost:3001';

const generalmsg = document.getElementById('login-msg');
const errPopup = document.getElementById('login-err-popup');
const errmsg = document.getElementById('login-err-msg');

const loginForm = document.getElementById('loginForm');

initialsetup();

loginForm.addEventListener('submit', async event => {
    event.preventDefault();
    changeMsg('Please wait while we verify your credentials');

    const data = new FormData(loginForm);
    const email = data.get('email');
    const password = data.get('password');

    const loginData = {
        email: email,
        password: password
    }

    const response = await fetch(`${apiUrl}/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(loginData)
    }).then(response => {
        return response.json();
    }).then(data => {
        if ((data.code != undefined || data.code != null) && (data.code == 'OK')) {
            changeMsg('Login Successful! Redirecting to home page');
            localStorage.setItem('token', data.createToken);
            localStorage.setItem('id', data.userId);
            // console.log( data.createToken);
            // console.log(localStorage.getItem('token'));
            window.location.href = '/instance';
        } else {
            showErrPopup(data.message);
            // console.log(data);
        }
    }).catch(err => { console.log('error?', err) });

});



// Utils
function initialsetup() {
    changeMsg('Welcome Back!');
    errmsg.innerHTML = 'Initial setup failed. Please try again later.';
} function showErrPopup(msg) {
    errPopup.classList.remove('d-none');
    generalmsg.classList.add('d-none');

    errmsg.innerHTML = msg;
} function resetErrPopup() {
    errPopup.classList.add('d-none');
    generalmsg.classList.remove('d-none');
} function changeMsg(msg) {
    generalmsg.innerHTML = msg;
    resetErrPopup();
}