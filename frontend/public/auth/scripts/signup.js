const apiUrl = 'http://localhost:3001';

const generalmsg = document.getElementById('signup-msg');
const errPopup = document.getElementById('signup-err-popup');
const errmsg = document.getElementById('signup-err-msg');

const signupOtpView = document.getElementById('signup-otpView');
const emailverifView = document.getElementById('signup-evView');
const signupView = document.getElementById('signup-mainView');
const msgBtnView = document.getElementById('signup-msgBtnView');

const signupOtpForm = document.getElementById('signup-otpForm');
const signupEvForm = document.getElementById('signup-evForm');
const signupForm = document.getElementById('signup-mainForm');

initialsetup();

// Signup first step (otp)
signupOtpForm.addEventListener('submit', async event => {
    event.preventDefault();
    changeMsg('Please wait while we verify your email');

    const data = new FormData(signupOtpForm);

    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const email = data.get('email');

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);

    const otpData = {
        email: email,
    }

    const response = await fetch(`${apiUrl}/api/otp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(otpData)
    }).then(response => {
        return response.json();
    }
    ).then(data => {
        // console.log(data);
        if ((data.code != undefined || data.code != null) && (data.code == 'OK')) {
            signupOtpView.classList.add('d-none');
            emailverifView.classList.remove('d-none');
            changeMsg('Please enter the OTP sent to your email');
        } else {
            showErrPopup(data.message);
        }
    }).catch(err => { console.log('error?', err) });

});

// Signup second step (email verification)
signupEvForm.addEventListener('submit', async event => {
    event.preventDefault();
    changeMsg('Please wait while we verify your OTP');

    const data = new FormData(signupEvForm);

    const email = localStorage.getItem('email');
    const otp = data.get('otp');

    // console.log(email, otp);

    const otpData = {
        email: email,
        otp: otp
    }

    const response = await fetch(`${apiUrl}/api/validate_otp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(otpData)
    }).then(response => {
        return response.json();
    }
    ).then(data => {
        // console.log(data);
        if ((data.code != undefined || data.code != null) && (data.code == 'OK')) {
            emailverifView.classList.add('d-none');
            signupView.classList.remove('d-none');
            changeMsg('Please fill in your information below');
        } else {
            showErrPopup(data.message);
        }
    }).catch(err => { console.log('error?', err) });


});

// Signup third step (main signup)
signupForm.addEventListener('submit', async event => {
    event.preventDefault();
    const data = new FormData(signupForm);

    const password = data.get('password');
    const confirmPassword = data.get('confirmPassword');

    if (password != confirmPassword) {
        showErrPopup('Passwords do not match');
    } else if (password.length < 8 || password.length > 20) {
        showErrPopup('Password must be in between 8 - 20 characters long');
    } else {
        changeMsg('Please wait while we create your account');
        const registerData = {
            firstName: localStorage.getItem('firstName'),
            surname: localStorage.getItem('lastName'),
            email: localStorage.getItem('email'),
            password: password,
        }

        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        localStorage.removeItem('email');

        const response = await fetch(`${apiUrl}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(registerData)
        }).then(response => {
            return response.json();
        }
        ).then(data => {
            // console.log(data);
            if ((data.code != undefined || data.code != null) && (data.code == 'OK')) {
                signupView.classList.add('d-none');
                msgBtnView.classList.remove('d-none');
                changeMsg('Welcome to Cloud Engine!<br>Thank you for joining us.');
            } else {
                showErrPopup(data.message);
            }
        }).catch(err => { console.log('error?', err) });
    }
});

// Utils
function initialsetup() {
    changeMsg('Please fill your information below');
    errmsg.innerHTML = 'Initial setup failed. Please try again later.';

    emailverifView.classList.add('d-none');
    signupView.classList.add('d-none');
    msgBtnView.classList.add('d-none');

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