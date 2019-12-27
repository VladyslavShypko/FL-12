// Your code goes here

let login = 0;
let password = 0;
let check = 1;
let changePassword;
let oldPassword = 0;
let newPassword = 0;
let newPasswordAgain = 0;
const five = 5;
const six = 6;

while (login !== 'user@gmail.com' && login !== 'admin@gmail.com' && check) {
    login = prompt('enter your login');

    if (login === null || login.trim().length === 0) {
        alert('Canceled');
        check = 0;

    } else if (typeof login === 'string' && login.length < five) {
        alert('I don’t know any emails having name length less than 5 symbols');

    } else if (login !== 'user@gmail.com' && login !== 'admin@gmail.com') {
        alert('I don’t know you');
    }
}

if (login === 'user@gmail.com') {
    check = 1;

    while (password !== 'UserPass' && check) {
        password = prompt('enter your password');
        if (password === null || password.trim().length === 0) {
            alert('Canceled');
            check = 0;
        } else if (password !== 'UserPass') {
            alert('Wrong password');
        }
    }
}

if (login === 'admin@gmail.com') {
    check = 1;

    while (password !== 'AdminPass' && check) {
        password = prompt('enter your password');
        if (password === null || password.trim().length === 0) {
            alert('Canceled');
            check = 0;
        } else if (password !== 'AdminPass') {
            alert('Wrong password');
        }
    }
}

if (password === 'UserPass' || password === 'AdminPass') {
    changePassword = confirm('Do you want to change your password?');

    if (!changePassword) {
        alert('You have failed the change');
    } else {
        check = 1;
        while (oldPassword !== password && check) {
            oldPassword = prompt('enter your old password');
            if (oldPassword === null || oldPassword.trim().length === 0) {
                alert('Canceled');
                check = 0;
            } else if (oldPassword !== password) {
                alert('Wrong password');
            }
        }

        if (oldPassword === password || check) {
            check = 1;

            while (check) {
                newPassword = prompt('enter new password');
                if (newPassword === null || newPassword.trim().length === 0) {
                    alert('Canceled');
                    check = 0;
                } else if (newPassword.length < six) {
                    alert('It’s too short password. Sorry');
                } else {
                    while (newPassword !== newPasswordAgain) {
                        newPasswordAgain = prompt('enter your password again');

                        if (newPassword !== newPasswordAgain) {
                            alert('You wrote the wrong password.');
                        } else {
                            alert('You have successfully changed your password');
                        }
                    }

                    check = 0;
                }
            }
        }
    }
}