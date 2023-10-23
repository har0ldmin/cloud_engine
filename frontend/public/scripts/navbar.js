const apiUrl = 'http://localhost:3001';

const guestOptions = document.getElementById('GuestOption');
const userOptions = document.getElementById('UserOption');
const guestOptionsz = document.getElementById('GuestOptionz');
const userOptionsz = document.getElementById('UserOptionz');
initialsetup();

async function logout() {

    console.log('logging out...');

    const logoutData = {
        createToken: localStorage.getItem('token'),
        userId: localStorage.getItem('id')
    }

    console.log("test: ", logoutData);

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
            // Remove all local storage
            localStorage.removeItem('ec2');
            localStorage.removeItem('CreatedHistory');
            localStorage.removeItem('TerminatedHistory');
            localStorage.removeItem('ec2Name');
            localStorage.removeItem('wishlist');
            localStorage.removeItem('gcp');
            initialsetup();
            // location.reload();
            window.location.href = '/';
        } else {
            console.log(data);
        }
    }).catch(err => {
        console.log('error?', err);
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        // Remove all local storage
        localStorage.removeItem('ec2');
        localStorage.removeItem('CreatedHistory');
        localStorage.removeItem('TerminatedHistory');
        localStorage.removeItem('ec2Name');
        localStorage.removeItem('wishlist');
        localStorage.removeItem('gcp');
        // location.reload();
        window.location.href = '/';  
    });

}

function initialsetup() {
    if (localStorage.getItem('token') != null) {
        userOptions.classList.remove('d-none');
        guestOptions.classList.add('d-none');
        userOptionsz.classList.remove('d-none');
        guestOptionsz.classList.add('d-none');
    } else {
        userOptions.classList.add('d-none');
        guestOptions.classList.remove('d-none');
        userOptionsz.classList.add('d-none');
        guestOptionsz.classList.remove('d-none')
    }
}