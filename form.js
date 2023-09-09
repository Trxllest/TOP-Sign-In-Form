let pwd = document.getElementById('password');
let confirmPwd = document.getElementById('confirm-password');
let pwdCheck = document.querySelector('.pwdCheck')

function checkPasswords() {
    let pwd1 = pwd.value;
    let pwd2 = confirmPwd.value;

    if (pwd1 !== pwd2) {
        pwdCheck.classList.remove('validPwd');
        pwdCheck.classList.add('invalidPwd'); 
        pwdCheck.textContent = 'Passwords do not match!';
    }

    if (pwd1 === pwd2) {
        pwdCheck.classList.add('validPwd');
        pwdCheck.classList.remove('invalidPwd')
        pwdCheck.textContent = '';
        console.log(pwd1);
        console.log(pwd2);
    }
}

confirmPwd.addEventListener('keyup', checkPasswords);