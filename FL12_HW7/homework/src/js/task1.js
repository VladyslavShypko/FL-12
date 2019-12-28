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

//Validation of the entered email.

while (login !== 'user@gmail.com' && login !== 'admin@gmail.com' && check) {
    login = prompt('enter your login');

    //If the input is an empty line or Esc – shows “Canceled" and the program are finished(check = 0).

    if (login === null || login.trim().length === 0) {
        alert('Canceled');
        check = 0;

        // If the input length is less than 5 characters, a warning message is displayed;

    } else if (typeof login === 'string' && login.length < five) {
        alert('I don’t know any emails having name length less than 5 symbols');

        //If the user enters something other than "user@gmail.com" or "admin@gmail.com", show "I don’t know you";

    } else if (login !== 'user@gmail.com' && login !== 'admin@gmail.com') {
        alert('I don’t know you');
    }
}

//If the user entered the login - "user@gmail.com", ask for a password.

if (login === 'user@gmail.com') {
    check = 1;

    //Checked the password until the user enters "UserPass" or an empty string or Esc.

    while (password !== 'UserPass' && check) {
        password = prompt('enter your password');

        //For an empty string or cancelled input, show "Canceled" and the program are finished(check = 0).

        if (password === null || password.trim().length === 0) {
            alert('Canceled');
            check = 0;

            //If the user entered password is not "UserPass", show “Wrong password”.

        } else if (password !== 'UserPass') {
            alert('Wrong password');
        }
    }
}

//If the user entered the login - "admin@gmail.com", ask for a password.

if (login === 'admin@gmail.com') {
    check = 1;

    //Checked the password until the user enters "AdminPass" or an empty string or Esc.

    while (password !== 'AdminPass' && check) {
        password = prompt('enter your password');

        //For an empty string or cancelled input, show "Canceled" and the program are finished(check = 0).

        if (password === null || password.trim().length === 0) {
            alert('Canceled');
            check = 0;

        //If the user entered password is not "UserPass", show “Wrong password”.

        } else if (password !== 'AdminPass') {
            alert('Wrong password');
        }
    }
}

//If entered correct password for email "user@gmail.com" or for "admin@gmail.com", suggest  to change password.

if (password === 'UserPass' || password === 'AdminPass') {
    changePassword = confirm('Do you want to change your password?');

    // In case the user clicks the 'Cancel' button, the message "You have failed the change".

    if (!changePassword) {
        alert('You have failed the change');

        // If user clicked ‘Ok’ – ask to write the old password. 

    } else {
        check = 1;

        //Validation that the user entered old password correctly.

        while (oldPassword !== password && check) {
            oldPassword = prompt('enter your old password');

            //For an empty string or cancelled input, show "Canceled" and the program are finished(check = 0).

            if (oldPassword === null || oldPassword.trim().length === 0) {
                alert('Canceled');
                check = 0;

            // If the user entered an incorrect old password, show "Wrong password".

            } else if (oldPassword !== password) {
                alert('Wrong password');
            }
        }

        //User entered old password correctly.

        if (oldPassword === password || check) {
            check = 1;

            while (check) {

                //prompt for a new password.

                newPassword = prompt('enter new password');

                //If the input is an empty line or ‘Cancel’ button is clicked  – show “Canceled” .

                if (newPassword === null || newPassword.trim().length === 0) {
                    alert('Canceled');
                    check = 0;

                //If the input length less than 6 – show  “It’s too short password. Sorry.”

                } else if (newPassword.length < six) {
                    alert('It’s too short password. Sorry');
                } else {

                    //If the new password is valid ask to enter it again.

                    while (newPassword !== newPasswordAgain) {
                        newPasswordAgain = prompt('enter your password again');

                        //If the inputted value doesn’t match the new password – show “You wrote the wrong password.”

                        if (newPassword !== newPasswordAgain) {
                            alert('You wrote the wrong password.');

                        //If user write the same new – show “You have successfully changed your password.” 

                        } else {
                            alert('You have successfully changed your password');
                        }
                    }

                    //Finish the program.

                    check = 0;
                }
            }
        }
    }
}
