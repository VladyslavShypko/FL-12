// Your code goes here
let login;
let password;
let changePassword;
let oldPassword;
let newPassword;
let newPasswordAgain;
let dataUser = {
    'user@gmail.com': 'UserPass',
    'admin@gmail.com': 'AdminPass'
}
const MAX_LENGTH_FIVE = 5;
const MAX_LENGTH_SIX = 6;

login = prompt('Enter your email:');
if (login === null || login.trim().length === 0) {
    alert('Canceled');
} else if (login.length < MAX_LENGTH_FIVE) {
    alert('I don’t know any emails having name length less than 5 symbols');
} else if (!dataUser[login]) {
    alert('I don’t know you');
} else {
    password = prompt('Enter your password:');
    if (password === null || password.trim().length === 0) {
        alert('Canceled');
    } else if (password !== dataUser[login]) {
        alert('Wrong password');
    } else {
        changePassword = confirm('Do you want to change your password?');
        if (!changePassword) {
            alert('You have failed the change');
        } else {
            oldPassword = prompt('Enter your old password');
            if (oldPassword === null || oldPassword.trim().length === 0) {
                alert('Canceled');
            } else if (oldPassword !== password) {
                alert('Wrong password');
            } else {
                newPassword = prompt('Enter new password');
                if (newPassword === null || newPassword.trim().length === 0) {
                    alert('Canceled');
                } else if (newPassword.length < MAX_LENGTH_SIX) {
                    alert('It’s too short password. Sorry');
                } else {
                    newPasswordAgain = prompt('Enter your new password again');
                    if (newPassword !== newPasswordAgain) {
                        alert('You wrote the wrong password');
                    } else {
                        alert('You have successfully changed your password');
                    }
                }
            }
        }
    }
}
