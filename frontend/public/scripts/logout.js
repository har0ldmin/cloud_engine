async function logout() {

    console.log('logging out...');

    const logoutData = {
        createToken: localStorage.getItem('token'),
        userId: localStorage.getItem('id'),
        ec2: localStorage.getItem('ec2'),
        createdhistory: localStorage.getItem('CreatedHistory'),
        terminatedhistory: localStorage.getItem('TerminatedHistory')
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
            localStorage.removeItem('ec2');
            localStorage.removeItem('CreatedHistory');
            localStorage.removeItem('TerminatedHistory');
            localStorage.removeItem('ec2Name')
            initialsetup();
            location.reload();
        } else {
            console.log(data);
        }
    }).catch(err => {
        console.log('error?', err);
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('ec2');
        localStorage.removeItem('CreatedHistory');
        localStorage.removeItem('TerminatedHistory')
        localStorage.removeItem('ec2Name')
        location.reload();
    });

}