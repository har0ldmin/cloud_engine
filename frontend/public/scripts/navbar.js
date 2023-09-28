const apiUrl = 'http://localhost:3001';

const guestOptions = document.getElementById('GuestOption');
const userOptions = document.getElementById('UserOption');
initialsetup();

async function logout() {

    console.log('logging out...');

    const logoutData = {
        createToken: localStorage.getItem('token'),
        userId: localStorage.getItem('id')
    }

    console.log(logoutData);

    const response = await fetch(`${apiUrl}/api/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(logoutData)
    }).then(response => {
        return response.json();
    }).then(data => {
        if ((data.code != undefined || data.code != null) && (data.code == 'OK')) {
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            initialsetup();
        } else {
            console.log(data);
        }
    }).catch(err => { console.log('error?', err);
    localStorage.removeItem('token');
    localStorage.removeItem('id'); });
}

function initialsetup() {
    if (localStorage.getItem('token') != null) {
        userOptions.classList.remove('d-none');
        guestOptions.classList.add('d-none');
    } else {
        userOptions.classList.add('d-none');
        guestOptions.classList.remove('d-none');
    }
}