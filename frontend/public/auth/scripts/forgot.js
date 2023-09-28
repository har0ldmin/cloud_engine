const apiUrl = 'http://localhost:3001';

const generalmsg = document.getElementById('forgot-msg');
const errPopup = document.getElementById('forgot-err-popup');
const errmsg = document.getElementById('forgot-err-msg');

const forgotView = document.getElementById('forgot-emailView');
const forgotResetView = document.getElementById('forgot-resetView');

const forgotForm = document.getElementById('forgotForm');
const forgotresetForm = document.getElementById('forgotResetForm');

initialsetup();

forgotForm.addEventListener('submit', async event => {
    event.preventDefault();
    changeMsg('If the email exists, you will receive a password reset link shortly. Please follow instruction on email');

    const data = new FormData(forgotForm);
    const email = data.get('email');

    const forgotData = {
        email: email,
    }

    const response = await fetch(`${apiUrl}/api/forgot_password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(forgotData)
    }).then(response => {
        return response.json();
    }).then(data => {
        if ((data.code != undefined || data.code != null) && (data.code == 'OK')) {

            forgotView.classList.add('d-none');
            forgotResetView.classList.remove('d-none');

        } else {
            showErrPopup(data.message);
            // console.log(data);
        }
    }).catch(err => { console.log('error?', err) });


});

forgotresetForm.addEventListener('submit', async event => {
    event.preventDefault();
    changeMsg('Please wait while we verify your credentials');

    const data = new FormData(forgotresetForm);
    const token = data.get('token');
    const password = data.get('password');

    const forgotResetData = {
        password: password,
    }

    const response = await fetch(`${apiUrl}/api/reset_password/${token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(forgotResetData)
    }).then(response => {
        return response.json();
    }).then(data => {
        if ((data.code != undefined || data.code != null) && (data.code == 'OK')) {
            changeMsg('Your password has been successfully reset. Please login with your new password');

            window.location.href = '../auth/login';
        } else {
            showErrPopup(data.message);
            // console.log(data);
        }
    }).catch(err => { console.log('error?', err) });


});


// Utils
function initialsetup() {
    changeMsg('Please fill in your information below.');
    errmsg.innerHTML = 'Initial setup failed. Please try again later.';
    forgotView.classList.remove('d-none');
    forgotResetView.classList.add('d-none');
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