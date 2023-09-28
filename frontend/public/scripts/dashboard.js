const apiUrl = 'http://localhost:5501';

async function logout() {

    console.log('logging out...');

    const logoutData = {
        createToken: localStorage.getItem('token'),
        userId: localStorage.getItem('id')
    }

    // console.log(logoutData);

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
            localStorage.xItem('token');
            localStorage.removeItem('id');
        } else {
            console.log(data);
        }
    }).catch(err => {
        console.log('error?', err);
        localStorage.removeItem('token');
        localStorage.removeItem('id');
    });
}


/* 
Chart, Feather
*/
(function () {
    'use strict'

    feather.replace({ 'aria-hidden': 'true' })

    var ctx = document.getElementById('myChart')
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
            datasets: [{
                data: [
                    15339,
                    21345,
                    18483,
                    24003,
                    23489,
                    24092,
                    12034,
                    13037,
                    15032,
                    17034,
                    20000,
                    22000
                ],
                lineTension: 0,
                backgroundColor: 'transparent',
                borderColor: '#007bff',
                borderWidth: 4,
                pointBackgroundColor: '#007bff'
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            },
            legend: {
                display: false
            }
        }
    })
})()


/* side nav bar */
function toggleItems() {
    const dashboardHeading = document.getElementById('dashboard-heading');
    const otherItems = document.querySelectorAll('.nav-item:not(.nav-link.active)');
    const plusIcon = dashboardHeading.querySelector('.plus-icon');
    const minusIcon = dashboardHeading.querySelector('.minus-icon');


    if (otherItems[0].style.display === 'none' || otherItems[0].style.display === '') {
        otherItems.forEach(item => {
            item.style.display = 'block';
        });
        plusIcon.style.display = 'none';
        minusIcon.style.display = 'inline-block';
    } else {
        otherItems.forEach(item => {
            item.style.display = 'none';
        });
        plusIcon.style.display = 'inline-block';
        minusIcon.style.display = 'none';
    }
}



// My profile
async function fetchUserProfile() {
    try {

        const response = await fetch('/api/user/profile', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            },
        });

        // route to login if not logged in
        if (!response.ok) {
            // window.location.href = '../auth/login';
            // return;
        }

        const userProfileData = await response.json();

        // retrieve data
        document.querySelector('#firstname').placeholder = userProfileData.firstName;
        document.querySelector('#surname').placeholder = userProfileData.surname;

    } catch (error) {
        console.error('Error:', error);
    }
}
window.addEventListener('load', fetchUserProfile);








