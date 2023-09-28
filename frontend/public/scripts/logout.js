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